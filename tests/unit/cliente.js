import HttpStatus  from 'http-status';
import { concat, assoc } from 'ramda';


describe('Teste Unitário', () => {
  
  describe('Métedo de filtro de cliente por filtro de produtos', () => {
    let { Cliente } = app.get('db').teste_api.models;
    let Clientes = null;
    
    before(done => {
      Clientes = Cliente
      .melhoresCompradores(1)
      .then(clientes => {
        Clientes = clientes;
        done();
      })
      .catch(err => done(err));
    });

    it("Deve retornar um array contendo os clientes", done => {
      expect(Clientes).to.be.an('array');
      done();
    });
    
    it("Deve ter o tamanho menor igual a 5", done => {
      expect(Clientes.length <= 5).to.be.true;
      done();
    });  
  });
});
