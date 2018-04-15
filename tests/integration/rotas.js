import HttpStatus  from 'http-status';
import { concat, assoc } from 'ramda';


describe('Rotas', () => {
  let token = null;
  
  let UserTeste = {login: 'leonardo', password: '1234567'};
  let { User } = app.get('db').teste_api.models;

  before(done => {

    User
      .create(UserTeste)
      .then(user => {
        request
          .post('/user/login')
          .send(UserTeste)
          .end((err, res) => {
            token = res.body.token;
            done(err);
          })
      })
      .catch(err => done(err));
  });

  after(done => {
    User
      .destroy({where: {login: UserTeste.login}})
      .then(() => done())
      .catch(err => done(err));
  });

  describe('GET /clientes/melhoresCompradores/produto', () => {
    it("Deve retornar um array contendo os clientes", done => {
      request
        .get('/clientes/melhoresCompradores/produto/1')
        .set('Authorization', concat('JWT ', token))
        .expect(HttpStatus.OK)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          expect(res.body).to.be.an('array');
          done(err);
        });
    });  
  });
});
