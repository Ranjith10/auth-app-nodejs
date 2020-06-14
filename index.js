const express = require('express')
const bodyParser = require('body-parser')
const mysql = require('mysql')
require('dotenv').config();

// const login = require('./routes/login.js')

const router = express.Router()

//Express app
const app = express()

const port = 5000

//Bodyparser 
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//CORS handling
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
})
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
    console.log('connected as id ' + connection.threadId + ' in db ' + process.env.DB_NAME);
  });
router.get('/', ()=> {
    console.log("Initial")
})

// redirect /api's to routes file
// app.use('/api', login)

//Handle err
app.use((err, req, res, next) => {
    console.log('Error', err);
    next()
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`)
});

