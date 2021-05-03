const express = require('express');
const cardRouter = express.Router();
const mysql = require("mysql");

const magicDB = mysql.createConnection({
    host: 'localhost',
    port: '3306',
    user: 'magicplayer',
    password: '',
    //Connect to a database by default
    database: 'magicthegathering'
});

magicDB.connect((err) => {
    if (err) {
        throw err;
    }
    console.log("Magic Database Connection Established Successfully!")
});

// Create Database
cardRouter.get('/createDB', (req, res) => {
    const sql = "CREATE DATABASE magicthegathering";
    //Execute the SQL Command
    avengersDB.query(sql, (err, result) => {
        if(err){
            throw err;
        }
        console.log(result);
        res.status(201).send("magicthegathering Database Created Successfully!");
    });
});

//Create Table
cardRouter.get('/createTable', (req, res) => {
    const sql = "CREATE TABLE cards (id INT AUTO_INCREMENT, numbercollected INT, name VARCHAR(100), color VARCHAR(25), manacost VARCHAR(100), type VARCHAR(100), rarity VARCHAR(25), abilities VARCHAR(250), flavor VARCHAR(250), power INT, toughness INT, expansion VARCHAR(100), artist VARCHAR(100), collectornumber INT, artstyle VARCHAR(100), imageurl VARCHAR(250), PRIMARY KEY (id));"
    //Execute the SQL Command
    magicDB.query(sql, (err, result) => {
        if(err){
            throw err;
        }
        res.status(201).send(result);
    });
});

//Execute INSERT (Add Card)
cardRouter.post('/addcard', (req, res, next) => {
    const newCard = req.body;
    const sql = "INSERT INTO cards SET ?";
    //Execute the SQL Command
    magicDB.query(sql, newCard, (err, result) => {
        if(err){
            throw err;
        }
        res.status(201).send(result);
    });
});

//Execute a SELECT Query (Select a specific card)
cardRouter.get('/getcard/:id', (req, res) => {
    const sql = `SELECT * FROM cards WHERE id = ${req.params.id}`;
    //Execute the SQL Command
    magicDB.query(sql, (err, result) => {
        if(err){
            throw err;
        }
        res.status(201).send(result);
    });
});

//Execute a SELECT Query (Select all cards)
cardRouter.get('/getcards/', (req, res) => {
    const sql = `SELECT * FROM cards`;
    //Execute the SQL Command
    magicDB.query(sql, (err, result) => {
        if(err){
            throw err;
        }
        res.status(201).send(result);
    });
});

//Execute UPDATE Query
cardRouter.post('/updatecollected/:id', (req, res) => {
    const numberCollected = req.body.numbercollected;
    const sql = `UPDATE cards SET numbercollected = '${numberCollected}' WHERE id = ${req.params.id}`;
    //Execute the SQL Command
    magicDB.query(sql, (err, result) => {
        if(err){
            throw err;
        }
        res.status(201).send(result);
    });
});

//Execute DELETE Query
cardRouter.get('/deletecard/:id', (req, res) => {
    let sql = `DELETE FROM cards WHERE id = ${req.params.id}`;
    //Execute the SQL Command
    magicDB.query(sql, (err, result) => {
        if(err){
            throw err;
        }
        res.status(201).send(result);
    });
});

module.exports = cardRouter