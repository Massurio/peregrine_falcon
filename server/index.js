const express = require('express');
const app = express();
const mysql = require('mysql');

const db = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'base3',
});

app.get('/', (req, res) => {
  // const sqlInsert =
  //   "INSERT INTO users (id, username, password) VALUES (1,'Massurio','pass123');";
  // db.query(sqlInsert, (err, result) => {
  //   res.send('Hello Mass!');
  // });
});

app.listen(3001, () => {
  console.log('Running on Port 3001!');
});
