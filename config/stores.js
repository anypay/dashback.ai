/**
 * Datastore Configuration
 * (app.config.stores)
 *
 * Configure the ORM layer, connections, etc.
 *
 * @see {@link http://trailsjs.io/doc/config/stores}
 */

const parse = require("parse-database-url")

if (!process.env.DATABASE_URL) {
  throw new Error('DATABASE_URL environment variable must be set');
}

const db = parse(process.env.DATABASE_URL);

// config/database.js
module.exports = {
  stores: {
    knexPostgres: {
      orm: 'bookshelf',
      client: 'pg',

      /**
       * knex connection object
       * see: http://knexjs.org/#Installation-client
       */
      connection: db,
      migrate: 'none'
    }
  },

  /**
   * Supported Migrate Settings:
   * - none
   * - drop
   */
  migrate: 'none',
  defaultStore: 'knexPostgres'
}
