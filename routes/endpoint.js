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

//Get list of roles 
router.get('/roles', async(req, res) => {
    try {
        let query = 'SELECT * FROM ??'
        let roleInserts = ['roles']
        connection.query(query, roleInserts, (err, results) => {
            if(err) {
                res.status(400).send({
                    'message': `error occurred: ${err}`
                })
            } else {
                console.log(results)
                res.status(200).send(
                    results
                )
            }
        })
    } catch (err) {
        console.log("Error:", err)
    }
})

//Registration API
router.post('/register', async (req,res) => {
    try {
        let password = req.body.password;
        let salt = await bcrypt.genSalt(10)
        let encryptedPassword = await bcrypt.hash(password, salt)
        
        let users = {
            "name": req.body.name,
            "email": req.body.email,
            "password": encryptedPassword, 
        }
        
        let findEmailExistsQuery = 'SELECT COUNT(*) as count FROM ?? WHERE email = ?'
        let findEmailExistsInserts = ['users', users.email]

        let insertUserRecordQuery = 'INSERT INTO ?? SET ?'
        let inserts = ['users', users]

        connection.query(findEmailExistsQuery, findEmailExistsInserts, function(err, results, fields) {
            if(err) {
                res.status(400).send({
                    'message': `error occurred: ${err}`
                })
            }
            if(results[0].count === 0) {
                connection.query(insertUserRecordQuery,inserts, function (error, results, fields) {
                    if (error) {
                        res.status(400).send({
                            'message': `error occurred: ${err}`,
                            "err": error
                        })
                    } else {
                            res.status(200).send({
                                "message":"user registered sucessfully"
                            });
                        }
                });
            } else {
                res.status(405).send({
                    "message": "User already registered"
                })
            }
        })
        
    }
    catch(err) {
        console.log(err)
    }
}) 

//Login API
router.post('/login', async (req, res) => {
    let email = req.body.email
    let password = req.body.password

    let authenticateQuery = 'SELECT COUNT(*) AS count,password FROM ?? WHERE email = ?'
    let authenticateInserts = ['users', email]

    connection.query(authenticateQuery, authenticateInserts, async (err, results, fields) => {
        if(err) {
            res.status(400).send({
                "message": "Error occurred",
            })
        } else {
            if(results[0].count > 0) {
                let isPasswordMatched = await bcrypt.compare(password, results[0].password)
                if(isPasswordMatched) {
                    res.status(200).send({"message": "Valid user"})
                } else {
                    res.status(401).send({"message": "Password does not match"})
                }
                
            } else {
                res.status(401).send({
                    "message": "Email is not registered"
                })
            }
        }
    })

})


module.exports = router  