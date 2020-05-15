/* eslint-disable no-unused-vars */
/* eslint-disable class-methods-use-this */

import Cliente from '../models/Cliente';

class ClientesController {
  async index(req, res) {
    try {
      const { pagina = 1, limite = 10 } = req.query;
      const cliente = await Cliente.findAndCountAll({
        attributes: ['id', 'nome', 'email', 'dataDeNascimento'],
        limit: JSON.parse(limite),
        offset: (pagina - 1) * limite,
      });
      return res.json(cliente);
    } catch (err) {
      return res.status(500).json(err);
    }
  }

  async show(req, res) {
    try {
      const { id } = req.params;
      const showCostumer = await Cliente.findOne({
        where: { id },
        attributes: ['id', 'nome', 'email', 'dataDeNascimento'],
      });
      if (showCostumer === null) {
        return res.status(404).json({ error: 'Cliente não encontrado!' });
      }
      return res.json(showCostumer);
    } catch (err) {
      return res.status(500).json(err);
    }
  }

  async store(req, res) {
    try {
      const emailExists = await Cliente.findOne({
        where: { email: req.body.email },
      });
      if (emailExists) {
        return res.status(400).json({
          error: 'Este e-mail já pertence a um cliente cadastrado no sistema',
        });
      }

      const { id, nome, email, dataDeNascimento } = await Cliente.create(
        req.body
      );

      return res.status(201).json({ id, nome, email, dataDeNascimento });
    } catch (err) {
      return res.status(500).json(err);
    }
  }

  async update(req, res) {
    try {
      const { id } = req.params;
      const cliente = await Cliente.findByPk(id);
      const { nome, email, dataDeNascimento } = await cliente.update(req.body);

      return res
        .status(200)
        .json(`O cliente ${nome} foi alterado com sucesso!`);
    } catch (err) {
      return res.status(500).json(err);
    }
  }

  async delete(req, res) {
    try {
      const { id } = req.params;
      const costumerExists = await Cliente.findByPk(id);

      if (!costumerExists) {
        return res.status(404).json({ error: 'Cliente não encontrado!' });
      }

      await Cliente.destroy({ where: { id } });

      return res.sendStatus(200);
    } catch (err) {
      return res.status(500).json(err);
    }
  }
}

export default new ClientesController();
