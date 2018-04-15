# Api rest

Teste api com node 8.10, sequelize, teste de integração e teste unitario

## Getting Started
Para iniciar a aplicação devemos ter em mãos um banco no Mysql chamado teste_api,
a utilização do sequelize faz a criação de tabela, então esse ponto não precisamos nos preocupar.

Crie um insert iniciao, com alguns dados para teste, o arquivo se encontra na pasta **dump/insert.sql**

Podemos usar 
```
npm start
```
para inicar a aplicação, ou 

```
npm server
```
caso formos colocar a aplicação em produção.

Para os testes unitários e de integração, deve-se inserir dados no banco.
```
npm run test-integration
```
```
npm run test-unit
```

## Authors

* **Leonardo Peixoto**


