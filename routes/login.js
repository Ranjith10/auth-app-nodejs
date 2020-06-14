const express = require('express')
const mysql = require('mysql')
const bcrypt = require('bcryptjs');
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
    console.log('connected as id ' + connection.threadId + ' in db ' + process.env.DB_NAME);
});

router.get('/', (req, res) => {
    console.log("In root")
})

router.post('/register', async (req,res) => {
    const password = req.body.password;
    // const encryptedPassword = await bcrypt.genSalt(10, function(err, salt) {
    //                                     bcrypt.hash(password, salt, function(err, hash) {
    //                                         // Store hash in your password DB.
    //                                     });
    //                                 });
    
    const users = {
        "email": req.body.email,
        "password": password, 
    }
    
    connection.query('INSERT INTO `users` SET ?',users, function (error, results, fields) {
        if (error) {
            res.send({
                "code":400,
                "failed":"error ocurred",
                "err": error
            })
        } else {
                res.send({
                    "code":200,
                    "success":"user registered sucessfully"
                });
            }
    });

}) 


module.exports = router  