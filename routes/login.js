const mysql = require('mysql')
const express = require('express')
const bcrypt = require('bcrypt')
const saltRounds = 10;
const router = express.Router()

const connection = mysql.createConnection({
  host     : process.env.DB_HOST,
  user     : process.env.DB_USER,
  password : process.env.DB_PASS,
  database : process.env.DB_NAME,
  port: process.env.DB_PORT
}); 

connection.connect(function(err) {
  if (err) {
    console.error('error connecting: ' + err.stack);
    return;
  }
  console.log('connected as id ' + connection.threadId);
});

module.exports = router
