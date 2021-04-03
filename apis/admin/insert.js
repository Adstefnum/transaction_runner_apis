var client = require('./database_helpers/connectdb');

const query =   `INSERT TABLE users (
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