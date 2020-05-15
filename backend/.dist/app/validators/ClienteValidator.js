"use strict";Object.defineProperty(exports, "__esModule", {value: true});var _celebrate = require('celebrate');

exports. default = _celebrate.celebrate.call(void 0, {
  [_celebrate.Segments.BODY]: _celebrate.Joi.object().keys({
    nome: _celebrate.Joi.string().required(),
    email: _celebrate.Joi.string().required().email(),
    dataDeNascimento: _celebrate.Joi.date(),
  }),
});
