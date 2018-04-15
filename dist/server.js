'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _http = require('http');

var _server = require('./config/server');

var _server2 = _interopRequireDefault(_server);

var _app = require('./app');

var _app2 = _interopRequireDefault(_app);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ip = _server2.default.ip,
    portExpress = _server2.default.portExpress;


var httpServer = (0, _http.Server)(_app2.default);

httpServer.listen(portExpress, ip, function () {
  console.log('listening on ' + ip + ':' + portExpress);
});

exports.default = httpServer;