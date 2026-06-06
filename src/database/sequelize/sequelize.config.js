// src/database/sequelize.config.js
require('ts-node/register');
require('module-alias/register');

require('module-alias').addAlias('@', `${process.cwd()}/src`);

const configs = require('../../config.ts');

// console.log(configs.DB_PASSWORD);

const PASS = decodeURIComponent(configs.DB_PASSWORD);

// console.log(PASS);

module.exports = {
  username: configs.DB_USERNAME,
  password: PASS,
  database: configs.DB_DATABASE,
  host: configs.DB_HOST,
  dialect: 'postgres',
};

// test

// test 2
