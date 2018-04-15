import HttpStatus  from 'http-status';
import { concat, assoc } from 'ramda';


describe('Teste de Autenticação', () => {
  let token = '';
  
  let UserTeste = {login: 'leonardo', password: '1234567'};
  let { User } = app.get('db').teste_api.models;

  before(done => {

    User
      .create(UserTeste)
      .then(user => done())
      .catch(err => done(err));
  });

  after(done => {
    User
      .destroy({where: {login: UserTeste.login}})
      .then(() => done())
      .catch(err => done(err));
  });

  describe('POST /user/login', () => {
    it("Usário válido, deve retornar um token", done => {
      request
        .post('/user/login')
        .send(UserTeste)
        .expect(HttpStatus.OK)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          console.log(res)
          expect(res.body).to.have.property('token');
          token = res.body.token;
          done(err);
        });
    });
  });

  describe('GET /clientes/melhoresCompradores/produto', () => {
    it("Acesso a rota com um token válido", done => {
      request
        .get('/clientes/melhoresCompradores/produto/1')
        .set('Authorization', concat('JWT ', token))
        expect(HttpStatus.OK, done())
    });

    it("Acesso a rota sem token", done => {
      request
        .get('/clientes/melhoresCompradores/produto/')
        expect(HttpStatus.UNAUTHORIZED, done())
    })
  })
});
