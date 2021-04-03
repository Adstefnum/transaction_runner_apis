import dotenv from 'dotenv';

dotenv.config();

console.log(process.env.DB_HOST)

module.exports = {

database_url : process.env.DB_HOST,

};