INSERT INTO `teste_api`.`Cliente` (`nome`) VALUES ('Maria');
INSERT INTO `teste_api`.`Cliente` (`nome`) VALUES ('Carla');
INSERT INTO `teste_api`.`Cliente` (`nome`) VALUES ('João');
INSERT INTO `teste_api`.`Cliente` (`nome`) VALUES ('Mario');
INSERT INTO `teste_api`.`Cliente` (`nome`) VALUES ('Beth');

INSERT INTO `teste_api`.`Produto` (`descricao`, `preco`) VALUES ('Tv', '1000');
INSERT INTO `teste_api`.`Produto` (`descricao`, `preco`) VALUES ('Pc', '2000');
INSERT INTO `teste_api`.`Produto` (`descricao`, `preco`) VALUES ('Cadeira', '550');

INSERT INTO `teste_api`.`Vendedor` (`nome`) VALUES ('Leonardo');
INSERT INTO `teste_api`.`Vendedor` (`nome`) VALUES ('Marcos');

INSERT INTO `teste_api`.`Venda` (`clienteId`, `vendedorId`) VALUES ('1', '1');
INSERT INTO `teste_api`.`Venda` (`clienteId`, `vendedorId`) VALUES ('1', '2');
INSERT INTO `teste_api`.`Venda` (`clienteId`, `vendedorId`) VALUES ('1', '1');
INSERT INTO `teste_api`.`Venda` (`clienteId`, `vendedorId`) VALUES ('1', '1');
INSERT INTO `teste_api`.`Venda` (`clienteId`, `vendedorId`) VALUES ('2', '1');
INSERT INTO `teste_api`.`Venda` (`clienteId`, `vendedorId`) VALUES ('3', '1');
INSERT INTO `teste_api`.`Venda` (`clienteId`, `vendedorId`) VALUES ('4', '1');
INSERT INTO `teste_api`.`Venda` (`clienteId`, `vendedorId`) VALUES ('5', '2');

INSERT INTO `teste_api`.`Venda_has_Produto` (`vendaId`, `produtoId`) VALUES ('13', '1');
INSERT INTO `teste_api`.`Venda_has_Produto` (`vendaId`, `produtoId`) VALUES ('13', '2');
INSERT INTO `teste_api`.`Venda_has_Produto` (`vendaId`, `produtoId`) VALUES ('13', '3');
INSERT INTO `teste_api`.`Venda_has_Produto` (`vendaId`, `produtoId`) VALUES ('14', '1');
INSERT INTO `teste_api`.`Venda_has_Produto` (`vendaId`, `produtoId`) VALUES ('15', '2');
INSERT INTO `teste_api`.`Venda_has_Produto` (`vendaId`, `produtoId`) VALUES ('16', '1');
INSERT INTO `teste_api`.`Venda_has_Produto` (`vendaId`, `produtoId`) VALUES ('17', '3');
INSERT INTO `teste_api`.`Venda_has_Produto` (`vendaId`, `produtoId`) VALUES ('18', '2');
INSERT INTO `teste_api`.`Venda_has_Produto` (`vendaId`, `produtoId`) VALUES ('19', '2');
INSERT INTO `teste_api`.`Venda_has_Produto` (`vendaId`, `produtoId`) VALUES ('20', '1');


-- use teste_api;

-- select c.nome, count(p.id) / (
-- 	select count(p.descricao)  from Venda_has_Produto as vhp
-- 		inner join Venda   as v on (v.id = vhp.vendaId)
-- 			inner join Produto as p on (p.id = vhp.produtoId)
-- 				inner join Cliente as c on (c.id = v.clienteId)
-- 		where p.descricao like 'Tv'
-- 		group by p.descricao
-- 	) as total
	
--     from Venda_has_Produto as vhp
-- 		inner join Venda   as v on (v.id = vhp.vendaId)
-- 			inner join Produto as p on (p.id = vhp.produtoId)
-- 				inner join Cliente as c on (c.id = v.clienteId)
    
--     where p.descricao like 'Tv'
    
--     group by c.nome;