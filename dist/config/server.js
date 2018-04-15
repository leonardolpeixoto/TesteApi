'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = require('./index');

var config = (0, _index.getConfig)({
  development: {
    portExpress: process.env.PORT_EXPRESS || 3000,
    ip: process.env.IP || '0.0.0.0',

    auth: {
      jwt: {
        secret: process.env.JWT_SECRET || 'teste_api'
      },
      jwtSession: {
        session: false
      },
      tokenExpires: {
        expiresIn: '2d'
      }
    }
  },

  production: {
    portExpress: process.env.PORT_EXPRESS || 3001,
    ip: process.env.IP || '0.0.0.0',

    auth: {
      jwt: {
        secret: process.env.JWT_SECRET || 'teste_api'
      },
      jwtSession: {
        session: false
      },
      tokenExpires: {
        expiresIn: '2h'
      }
    }
  },

  test: {
    portExpress: process.env.PORT_EXPRESS || 3001,
    portSocket: process.env.PORT_SOCKET || 3030,
    ip: process.env.IP || '0.0.0.0',

    auth: {
      jwt: {
        secret: process.env.JWT_SECRET || 'teste_api'
      },
      jwtSession: {
        session: false
      },
      tokenExpires: {
        expiresIn: '2h'
      }
    }
  }
});

exports.default = config();