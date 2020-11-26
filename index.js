const express = require('express');
const mysql = require('mysql');

const app = express();
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'classicmodels'
});


app.get('/', function(req, res) {
    res.send("Hello");
});

app.get('/customers', function(req, res) {
    const sql = "SELECT * from customers";
    db.query(sql, (err, result) => {
        if (err) throw err;
        res.send(result);
    });
});

app.listen(5000, function() {
    console.log('loaded');
});