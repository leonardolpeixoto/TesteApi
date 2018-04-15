import passport from 'passport';
import config from './config/server';
import { Strategy, ExtractJwt } from 'passport-jwt';

let { auth } = config;

export default function (app) {
  const { User } = app.get('db').teste_api.models;
  
  const opts = {
    secretOrKey: auth.jwt.secret,
    jwtFromRequest: ExtractJwt.fromAuthHeader(),
  };

  const strategy = new Strategy(opts, (payload, done) => {
    User
      .findOne({ where: { id: payload.userId } })
      .then(user => {
        if (user) {
          return done(null, {
            id: user.id
          });
        }
        return done(new Error("Acesso não Autorizado"), null);
      })
      .catch(error => done(error, null));
  });
  passport.use(strategy);
  
  return {
    initialize: () => passport.initialize(),
    authenticate: () => passport.authenticate('jwt', auth.jwtSession),
  };
}