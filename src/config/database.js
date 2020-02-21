// Credentials to access the database
module.exports = {
  dialect: 'postgres',
  host: 'localhost',
  username: 'postgres',
  password: 'postgres',
  database: 'gobarber',
  define: {
    timestamps: true,
    underscored: true, // standard table names
    underscoredAll: true // standard column and relationship names
  }
};
