const express = require('express');
const { Pool } = require('pg');

const app = express();
const port = 3000;

const pool = new Pool({
  user: 'your_username',
  host: 'postgres',
  database: 'requisitos_de_usuarios',
  password: 'your_password',
  port: 5432,
});

app.get('/users', async (req, res) => {
  try {
    const { rows } = await pool.query('SELECT * FROM user');
    res.json(rows);
  } catch (error) {
    console.error('Error querying database:', error);
    res.status(500).send('Internal Server Error');
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
