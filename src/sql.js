/**
 * SQL
 */

/* Node modules */
const path = require('path');

/* Third-party modules */

/* Files */
const Connection = require('./connection');

module.exports = class SQL {

  constructor({
    displayType,
    id,
    lang,
    loginForm,
    logo,
    name,
  }) {
    this.displayType = displayType;
    this.id = id;
    this.lang = lang;
    this.loginForm = loginForm;
    this.logo = path.join(__dirname, '..', 'logos', logo);
    this.name = name;
  }

  createConnection(opts) {
    return new Connection(this.id, opts);
  }

  static get config() {
    return [{
      id: 'mysql',
      name: 'MySQL',
      lang: 'text/x-mysql',
      logo: 'mysql.png',
      loginForm: [{
        label: 'HOST',
        key: 'host',
        type: 'text',
        default: 'localhost',
        required: true
      }, {
        label: 'PORT',
        key: 'port',
        type: 'number',
        default: 13306,
        required: true
      }, {
        label: 'USERNAME',
        key: 'user',
        default: 'root',
        type: 'text',
      }, {
        label: 'PASSWORD',
        key: 'password',
        default: 'q1w2e3r4',
        type: 'password',
      }]
    }, {
      id: 'postgres',
      name: 'PostgreSQL',
      lang: 'text/x-pgsql',
      logo: 'pgsql.png',
      loginForm: [{
        label: 'HOST',
        key: 'host',
        type: 'text',
        default: 'localhost',
        required: true
      }, {
        label: 'PORT',
        key: 'port',
        type: 'number',
        default: 15432,
        required: true
      }, {
        label: 'USERNAME',
        key: 'user',
        default: 'postgres',
        type: 'text',
      }, {
        label: 'PASSWORD',
        key: 'password',
        default: 'q1w2e3r4',
        type: 'password',
      }]
    }, {
      id: 'sqlite3',
      name: 'SQLite',
      lang: 'text/x-sql',
      logo: 'sqlite.png',
      loginForm: [{
        label: 'FILE',
        key: 'filename',
        type: 'file',
        default: [],
        required: true
      }]
    }, {
      id: 'mariadb',
      name: 'MariaDB',
      lang: 'text/x-mariadb',
      logo: 'mariadb.png',
      loginForm: [{
        label: 'HOST',
        key: 'host',
        type: 'text',
        default: 'localhost',
        required: true
      }, {
        label: 'PORT',
        key: 'port',
        type: 'number',
        default: 13307,
        required: true
      }, {
        label: 'USERNAME',
        key: 'user',
        default: 'root',
        type: 'text',
      }, {
        label: 'PASSWORD',
        key: 'password',
        default: 'q1w2e3r4',
        type: 'password',
      }]
    }, {
      id: 'mssql',
      name: 'MS-SQL',
      lang: 'text/x-mssql',
      logo: 'mssql.png',
      loginForm: [{
        label: 'HOST',
        key: 'host',
        type: 'text',
        default: 'localhost',
        required: true
      }, {
        label: 'PORT',
        key: 'port',
        type: 'number',
        default: 1443,
        required: true
      }, {
        label: 'USERNAME',
        key: 'user',
        default: 'sa',
        type: 'text',
      }, {
        label: 'PASSWORD',
        key: 'password',
        default: 'q1w2e3r4',
        type: 'password',
      }]
    }]
  }

  static createDriver() {
    return SQL.config.map(driver => new SQL(driver));
  }

};
