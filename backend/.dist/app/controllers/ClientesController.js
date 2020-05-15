"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }/* eslint-disable no-unused-vars */
/* eslint-disable class-methods-use-this */

var _Cliente = require('../models/Cliente'); var _Cliente2 = _interopRequireDefault(_Cliente);

class ClientesController {
  async index(req, res) {
    const { pagina = 1, limite = 10 } = req.query;
    const cliente = await _Cliente2.default.findAndCountAll({
      attributes: ['id', 'nome', 'email', 'dataDeNascimento'],
      limit: JSON.parse(limite),
      offset: (pagina - 1) * limite,
    });
    return res.json(cliente);
  }

  async show(req, res) {
    const { id } = req.params;
    const showCostumer = await _Cliente2.default.findOne({
      where: { id },
      attributes: ['id', 'nome', 'email', 'dataDeNascimento'],
    });
    if (showCostumer === null) {
      return res.status(404).json({ error: 'Cliente não encontrado!' });
    }
    return res.json(showCostumer);
  }

  async store(req, res) {
    const emailExists = await _Cliente2.default.findOne({
      where: { email: req.body.email },
    });
    if (emailExists) {
      return res.status(400).json({
        error: 'Este e-mail já pertence a um cliente cadastrado no sistema',
      });
    }

    const { id, nome, email, dataDeNascimento } = await _Cliente2.default.create(
      req.body
    );

    return res.status(201).json({ id, nome, email, dataDeNascimento });
  }

  async update(req, res) {
    const { id } = req.params;
    const cliente = await _Cliente2.default.findByPk(id);
    const { nome, email, dataDeNascimento } = await cliente.update(req.body);

    return res.status(200).json(`O cliente ${nome} foi alterado com sucesso!`);
  }

  async delete(req, res) {
    const { id } = req.params;
    const costumerExists = await _Cliente2.default.findByPk(id);

    if (!costumerExists) {
      return res.status(404).json({ error: 'Cliente não encontrado!' });
    }

    await _Cliente2.default.destroy({ where: { id } });

    return res.sendStatus(200);
  }
}

exports. default = new ClientesController();
