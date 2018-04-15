import { assoc } from 'ramda';
import HttpStatus from 'http-status';

export default models => {
  const { Cliente } = models;

  //Filtrado por Produtos
  const melhoresCompradores = (req, res, next) => {
    let { produtoId } = req.params;

    Cliente
      .melhoresCompradores(produtoId)
      .then(clientes => {
        res.send(clientes);
      })
      .catch(err => next(assoc('status', HttpStatus.INTERNAL_SERVER_ERROR, err)));      
  };
    
  return {
    melhoresCompradores: melhoresCompradores,
  };
}