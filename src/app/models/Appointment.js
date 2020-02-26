import Sequelize, { Model } from 'sequelize';

class Appointment extends Model {
  // sequelize <--> this.connection from database/index.js
  static init(sequelize) {
    super.init(
      {
        date: Sequelize.DATE,
        canceled_at: Sequelize.DATE
      },
      {
        sequelize // we need to pass the connection instance
      }
    );

    // returns the model that was intialized
    return this;
  }

  static associate(models) {
    this.belongsTo(models.User, { foreignKey: 'user_id', as: 'user' });
    this.belongsTo(models.User, {
      foreignKey: 'provider_id',
      as: 'provider'
    });
  }
}

export default Appointment;
