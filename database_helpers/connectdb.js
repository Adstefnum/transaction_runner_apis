//dotenv = require('./settings/env');

//dotenv.config();

var pg = require('pg');

var conString = "postgres://otosrmiu:Fj1ckEV_f1exQ6ODln1QOVAovjjEqqce@queenie.db.elephantsql.com:5432/otosrmiu"

var client = new pg.Client(conString);

module.exports = {

  client:client
}

/*
client.connect(function(err) {
  if(err) {
    return console.error('could not connect to postgres', err);
  }
  client.query('SELECT NOW() AS "theTime"', function(err, result) {
    if(err) {
      return console.error('error running query', err);
    }
    console.log(result.rows[0].theTime);
    client.end();
  });
});*/