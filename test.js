/**
 * test
 */

/* Node modules */

/* Third-party modules */

/* Files */
const Connection = require('./src/connection');

const obj = new Connection('mysql', {
  host: 'localhost',
  port: 13306,
  username: 'root',
  password: 'q1w2e3r4',
});

obj.connect()
  .then((connection) => {
    return obj.query(connection, "show databases")
  })
  .then((res) => {
    console.log(res);
    console.log('then');
  })
  .catch((err) => {
    console.log(err);
    console.log('err');
  });
