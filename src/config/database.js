import { getConfig } from './index';

let config = getConfig({
  development:{
    teste_api: {
      database: 'teste_api',
      username: 'root',
      password: 'root',
      host: 'localhost',
      dialect: 'mysql',
      define: {
        underscored: true,
        charset: 'utf8',
        timestamps: false,
        freezeTableName: true
      },
    }
  },

  production: {
    teste_api: {
      database: 'teste_api',
      username: 'root',
      password: 'root',
      host: 'localhost',
      dialect: 'mysql',
      define: {
        underscored: true,
        charset: 'utf8',
        timestamps: false,
        freezeTableName: true
      },
    }
  },

  test: {
    teste_api: {
      database: 'teste_api',
      username: 'root',
      password: 'root',
      host: 'localhost',
      dialect: 'mysql',
      logging: false,
      define: {
        underscored: true,
        charset: 'utf8',
        timestamps: false,
        freezeTableName: true
      },
    }
  },
})
export default config();