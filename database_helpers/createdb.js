var { client } = require('./connectdb');

const query =   `CREATE TABLE users (
  ID SERIAL PRIMARY KEY,
  name VARCHAR(30),
  email VARCHAR(30),
  
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