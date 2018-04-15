#!/bin/bash

read -p "Nome do Banco: " db
read -p "Nome da tabela: " table

sequelize-auto -o "./src/data/models" -t "${table}" -h localhost -d "${db}" -u root -x root -p 3306 -e mysql

mv ./src/data/models/${table}.js ./src/data/models/${db}.${table}.js 