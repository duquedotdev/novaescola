"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _sequelize = require('sequelize'); var _sequelize2 = _interopRequireDefault(_sequelize);

class Clientes extends _sequelize.Model {
  static init(sequelize) {
    super.init(
      {
        nome: _sequelize2.default.STRING,
        email: _sequelize2.default.STRING,
        dataDeNascimento: _sequelize2.default.DATE,
      },
      {
        timestamp: true,
        tableName: 'clientes',
        sequelize,
      }
    );
    return this;
  }
}

exports. default = Clientes;
