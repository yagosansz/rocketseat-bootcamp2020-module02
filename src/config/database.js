require('dotenv/config');

// Credentials to access the database
module.exports = {
  dialect: 'postgres',
  host: process.env.DB_HOST,
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  define: {
    timestamps: true,
    underscored: true, // standard table names
    underscoredAll: true // standard column and relationship names
  }
};
