require('dotenv').config();

const express = require('express')
const bodyParser = require('body-parser')
const fs = require('fs')
const path = require('path')
const morgan = require('morgan')
const login = require('./routes/endpoint.js')

//Express app
const app = express()

const port = process.env.port || 5000
const accessLogStream = fs.createWriteStream(path.join(__dirname, 'access.log'), { flags: 'a' })

//Middleware 
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(morgan('combined', { stream: accessLogStream }))

//CORS handling
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
})

app.get('/', () => {
    console.log('Welcome to the auth app')
})

// redirect /api's to routes file
app.use('/api', login)

//Handle err
app.use((err, req, res, next) => {
    console.log('Error', err);
    next()
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`)
});

