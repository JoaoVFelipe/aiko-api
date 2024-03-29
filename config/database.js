require('dotenv/config');

module.exports = {
  dialect: "postgres",
  dialectOptions: {
    keepAlive: true,
  },
  ssl: true,
  host: process.env.DB_HOST,
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  },
};
