import Sequelize, { Model } from 'sequelize';

class Clientes extends Model {
  static init(sequelize) {
    super.init(
      {
        nome: Sequelize.STRING,
        email: Sequelize.STRING,
        dataDeNascimento: Sequelize.DATE,
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

export default Clientes;
