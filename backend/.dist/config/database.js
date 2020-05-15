"use strict";require('../bootstrap');

module.exports = {
  dialect: process.env.DB_DIALECT || 'mysql',
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  storage: './__tests__/db_test.sqlite',
  define: {
    timestamp: true,
  },
};
