require("dotenv").config();
const { DATABASE_URL } = process.env;

module.exports = {
  development: {
    client: "postgresql",
    connection: {
      connectionString: DATABASE_URL,
      ssl: { rejectUnauthorized: false }, // Required for Render
    },
    migrations: {
      directory: "./api/db/migrations",
    },
    seeds: {
      directory: "./api/db/seeds",
    },
  },
  production: {
    client: "postgresql",
    connection: {
      connectionString: DATABASE_URL,
      ssl: { rejectUnauthorized: false }, // Required for Render
    },
    migrations: {
      directory: "./api/db/migrations",
    },
    seeds: {
      directory: "./api/db/seeds",
    },
  },
};
