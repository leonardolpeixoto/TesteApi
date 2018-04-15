'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getConfig = exports.getEnv = undefined;

var _ramda = require('ramda');

var getEnv = exports.getEnv = function getEnv(env) {
  return env || process.env.NODE_ENV || 'development';
};

var getConfig = exports.getConfig = function getConfig(config) {
  return function (env) {
    return (0, _ramda.prop)(getEnv(env), config);
  };
};