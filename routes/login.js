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
    try {
        const password = req.body.password;
        const salt = await bcrypt.genSalt(10)
        const encryptedPassword = await bcrypt.hash(password, salt)
        const users = {
            "email": req.body.email,
            "password": encryptedPassword, 
        }
        
        let findEmailExistsQuery = 'SELECT COUNT(*) FROM ?? WHERE email = ?'
        let findEmailExistsInserts = ['users', users.email]

        let insertUserRecordQuery = 'INSERT INTO ?? SET ?'
        let inserts = ['users', users]

        connection.query(findEmailExistsInserts, findEmailExistsInserts, function(err, results, fields) {
            console.log({err, results, fields})
            if(results.length === 1) {
                connection.query(insertUserRecordQuery,inserts, function (error, results, fields) {
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
            } else {
                res.send({
                    "code": 200,
                    "failer": "User already registered"
                })
            }
        })
        
    }
    catch(err) {
        console.log(err)
    }
    

}) 


module.exports = router  