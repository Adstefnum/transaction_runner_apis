var { client } = require('./connectdb');

const query =   `DROP TABLE users;`;

client.connect(function(err) {
  if(err) {
    return console.error('could not connect to postgres', err);
  }
  client
    .query(query)
    .then(res => {
        console.log('Table is successfully deleted');
    })
    .catch(err => {
        console.error(err);
    })
    .finally(() => {
        client.end();
  });
});