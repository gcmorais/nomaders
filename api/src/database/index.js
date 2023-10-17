const { Client } = require('pg');

const client = new Client({
  host: 'localhost',
  port: 5175,
  user: 'root',
  password: 'root',
  database: 'nomaders',
});

client.connect();

exports.query = async (query, values) => {
  const { rows } = await client.query(query, values);
  return rows;
};
