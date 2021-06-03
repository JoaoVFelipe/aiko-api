/* eslint-disable no-unused-expressions */
import Sequelize from 'sequelize';
import Configs from '../api/models/Configs';
import Users from '../api/models/Users';
import configDatabase from '../config/database';

const models = [
  Users,
  Configs
];

class Database {
  constructor() {
    this.init();
  }

  static init() {
    this.connection = new Sequelize(configDatabase);

    models.forEach((model) => {
      model.init(this.connection);
    });

    models.forEach((model) => {
      model.associate && model.associate(this.connection.models);
    });
  }
}

Database.init();

module.export = Database;