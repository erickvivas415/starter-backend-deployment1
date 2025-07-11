require("dotenv").config();
const parse = require("pg-connection-string").parse;

const {
  NODE_ENV = "development",
  DEVELOPMENT_DATABASE_URL,
  PRODUCTION_DATABASE_URL,
} = process.env;

const devConfig = {
  ...parse(DEVELOPMENT_DATABASE_URL),
  ssl: { rejectUnauthorized: false }, // ✅ Add this for development (Render DB requires SSL)
};

const prodConfig = {
  ...parse(PRODUCTION_DATABASE_URL),
  ssl: { rejectUnauthorized: false }, // ✅ Already present here
};

module.exports = {
  development: {
    client: "pg",
    connection: devConfig,
    migrations: {
      directory: __dirname + "/api/db/migrations",
    },
    seeds: {
      directory: __dirname + "/api/db/seeds",
    },
  },

  production: {
    client: "pg",
    connection: prodConfig,
    migrations: {
      directory: __dirname + "/api/db/migrations",
    },
    seeds: {
      directory: __dirname + "/api/db/seeds",
    },
  },
};
