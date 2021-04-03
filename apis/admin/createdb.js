var { client } = require('./connectdb');

const query =   `CREATE TABLE users (
  ID SERIAL PRIMARY KEY,
  first_name VARCHAR(40),
  last_name VARCHAR(40),
  email VARCHAR(50),
  password VARCHAR(40),
  hashed_password VARCHAR(40),
  uuid VARCHAR(40),
  global_balance VARCHAR(100),
  created_on VARCHAR(11),
);`;

client.connect(function(err) {
  if(err) {
    return console.error('could not connect to postgres', err);
  }
  client
    .query(query)
    .then(res => {
        console.log('Table is successfully created');
    })
    .catch(err => {
        console.error(err);
    })
    .finally(() => {
        client.end();
  });
});