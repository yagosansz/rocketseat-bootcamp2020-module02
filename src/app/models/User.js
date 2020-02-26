import Sequelize, { Model } from 'sequelize';

import bcrypt from 'bcryptjs';

class User extends Model {
  // sequelize <--> this.connection from database/index.js
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        email: Sequelize.STRING,
        password: Sequelize.VIRTUAL, // will not be stored in the db
        password_hash: Sequelize.STRING,
        provider: Sequelize.STRING
      },
      {
        sequelize // we need to pass the connection instance
      }
    );

    this.addHook('beforeSave', async user => {
      // if new user is being created or password is being edited
      if (user.password) {
        // second argument represents how 'strong' the cryptography will be
        user.password_hash = await bcrypt.hash(user.password, 8);
      }
    });

    // returns the model that was intialized
    return this;
  }

  static associate(models) {
    // 'avatar' is an alias of File model
    this.belongsTo(models.File, { foreignKey: 'avatar_id', as: 'avatar' });
  }

  checkPassword(password) {
    return bcrypt.compare(password, this.password_hash);
  }
}

export default User;
