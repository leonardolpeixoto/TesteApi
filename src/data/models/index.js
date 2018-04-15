import Sequelize from 'sequelize';
// import * as config from '../../config';
import config from '../../config/database';
import fs from 'fs';
import path from 'path';


/**
 * Carrega os models para o sequelize de acordo com o banco certo.
 * @param {Sequelize} sequelize 
 * @param {string} database_name 
 */
const loadModels = (sequelize, database_name) => {
  let dir = path.join(__dirname);
  let models = [];

  function filterModels(file) {
    let archive_model = file.split(".");
    return database_name === archive_model[0];
  }

  function initModel(file) {
    const model = sequelize.import(path.join(dir, file));
    models[model.name] = model;
  }

  fs
    .readdirSync(dir)
    .filter(filterModels)
    .forEach(initModel)

  return models;
};

export default app => {
  let databases = {};
  Object.keys(config).forEach(database => {
    if (typeof databases[database] != database) {
      databases[database] = new Sequelize(config[database]);
    }

    databases[database].models = loadModels(databases[database], database);
    
    /**
     * Set relacionamento entre os modelos
     */
    let Models = databases[database].models;
    Object.keys(Models).forEach(modelName => {
      if (Models[modelName].associate) {
        Models[modelName].associate(Models);
      }
    })

    databases[database].sync().done(() => databases[database]);
  });

  app.set('db', databases);
}