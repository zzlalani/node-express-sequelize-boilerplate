const config = require('config');

const dbConfig = { ...config.get('db') };

module.exports = {
  development: dbConfig,
  migration: dbConfig,
  staging: dbConfig,
  uat: dbConfig,
  production: dbConfig,
};
