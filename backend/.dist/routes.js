"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express');
var _ClientesController = require('./app/controllers/ClientesController'); var _ClientesController2 = _interopRequireDefault(_ClientesController);
var _ClienteValidator = require('./app/validators/ClienteValidator'); var _ClienteValidator2 = _interopRequireDefault(_ClienteValidator);

const routes = new (0, _express.Router)();

routes.post('/cliente', _ClienteValidator2.default, _ClientesController2.default.store);
routes.get('/cliente', _ClientesController2.default.index);
routes.get('/cliente/:id', _ClientesController2.default.show);
routes.put('/cliente/:id', _ClientesController2.default.update);
routes.delete('/cliente/:id', _ClientesController2.default.delete);

exports. default = routes;
