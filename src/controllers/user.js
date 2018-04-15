import { assoc, isNil } from 'ramda';
import HttpStatus from 'http-status';
import { ExtractJwt } from 'passport-jwt';
import getToken from '../helpers/getToken';
import decodeToken from '../helpers/decodeToken';

export default models => {
  const { User } = models;

  const login = (req, res, next) => {
    const { login, password } = req.body;
    User
      .findByLogin(login)
      .then(user => {
        if (isNil(user) || !user.isPassword(password)) {
          next(next(assoc('status', HttpStatus.UNAUTHORIZED, { error: "Não autorizado" })));
        }
        else {
          res.send({
            token: getToken({userId: user.id})
          });
        }
      })
      .catch(err => next(assoc('status', HttpStatus.INTERNAL_SERVER_ERROR, err)));
  };


  return {
    login: login,
  };
}