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
    return this.connection.select(1)
      .then(() => this.connection);
  }

  disconnect () {
    // return this.connection.close();
  }

  navTree () {
    return 33;
  }

  query (connection, query, replacements = []) {
    return connection.raw(query);
    // return connection.query(query, {
    //   replacements,
    // }).then(([results, metadata]) => {
    //   return results;
    // });
  }

  setDb () {

  }

};
