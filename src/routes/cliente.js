import ClienteController from '../controllers/cliente';

module.exports = app => {
  const models = app.get('db').teste_api.models;
  const { melhoresCompradores } = ClienteController(models);
  
  app
    .route('/clientes/melhoresCompradores/produto/:produtoId')
    .all(app.get('authenticate'))
    .get(melhoresCompradores);    
}