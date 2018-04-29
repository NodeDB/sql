/**
 * connection
 */

/* Node modules */

/* Third-party modules */
const knex = require('knex');

/* Files */

module.exports = class Connection {

  constructor (client, connection) {
    this.connection = knex({
      client,
      connection,
    });
  }

  connect () {
    return this.connection.select(1);
  }

  disconnect () {
    return this.connection.close();
  }

  query (connection, query, replacements = []) {
    return connection.query(query, {
      replacements,
    }).then(([results, metadata]) => {
      return results;
    });
  }

  setDb () {

  }

};
