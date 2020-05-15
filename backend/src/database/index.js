/* eslint-disable class-methods-use-this */
import Sequelize from 'sequelize';
import databaseConfig from '../config/database';
import Clientes from '../app/models/Cliente';

const models = [Clientes];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(databaseConfig);
    models.map((model) => model.init(this.connection));
  }
}

export default new Database();
