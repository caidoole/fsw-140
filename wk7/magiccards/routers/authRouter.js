const express = require('express');
const authRouter = express.Router();
const mysql = require("mysql");
const jwt = require('jsonwebtoken');

const userDB = mysql.createConnection({
    host: 'localhost',
    port: '3306',
    user: 'magicplayer',
    password: '',
    //Connect to a database by default
    database: 'magicusers'
});

userDB.connect((err) => {
    if (err) {
        throw err;
    }
    console.log("Magic Users Connection Established Successfully!")
});

// Signup
authRouter.post("/signup", (req, res, next) => {
    const username = req.body.username.toLowerCase();
    const sql = `SELECT username FROM users WHERE username = '${username}'`;
    userDB.query(sql, (err, result) => {
        if (err) {
            res.status(500)
            return next(err)
        }
        if (result[0]) {
            res.status(403)
            return next(new Error('Username Already Exists'))
        }
        const user = req.body;
        const sql = "INSERT INTO users SET ?"
        userDB.query(sql, user, (err, result) => {
            if (err) {
                res.status(500)
                return next(err)
            }
            const token = jwt.sign(user, process.env.SECRET)
            return res.status(201).send({ token, user: user })
        })
    })
})

// Login
authRouter.post("/login", (req, res, next) => {
    const sql = `SELECT * FROM users WHERE username = '${req.body.username.toLowerCase()}'`;
    userDB.query(sql, (err, result) => {
        if (err) {
            res.status(500)
            return next(err)
        }
        if (!result[0] || req.body.password !== result[0].password) {
            res.status(403)
            return next(new Error('Invalid Credentials'))
        }
        const user = req.body;
        const token = jwt.sign(user, process.env.SECRET)
        return res.status(201).send({ token, user: user })
    })
})

module.exports = authRouter