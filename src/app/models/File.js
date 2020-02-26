import Sequelize, { Model } from 'sequelize';

class File extends Model {
  // sequelize <--> this.connection from database/index.js
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        path: Sequelize.STRING,
        url: {
          type: Sequelize.VIRTUAL,
          get() {
            return `http://localhost:3333/files/${this.path}`;
          }
        }
      },
      {
        sequelize // we need to pass the connection instance
      }
    );

    // returns the model that was intialized
    return this;
  }
}

export default File;
