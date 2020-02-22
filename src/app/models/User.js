import Sequelize, { Model } from 'sequelize';

class User extends Model {
  // sequelize <--> this.connection from database/index.js
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        email: Sequelize.STRING,
        password_hash: Sequelize.STRING,
        provider: Sequelize.STRING
      },
      {
        sequelize // we need to pass the connection instance
      }
    );
  }
}

export default User;
