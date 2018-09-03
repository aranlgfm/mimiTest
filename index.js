const express = require('express');
const cors = require('cors');
const mysql = require('mysql');

var bodyParser = require('body-parser');

const app = express();
var userRouter = require('./routes/user');
app.use('/user', userRouter);

const dbConn = mysql.createConnection({
    host: 'localhost',
    user: 'Apex',
    password: 'apex1234',
    database: 'express_proto'
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

dbConn.connect(err => {
    if (err) {
        return err;
    }
});

app.use(cors());

app.get('/', (req, res) => {
    // res.send('nothing');
    res.sendfile('test.html', { root: __dirname })
});

app.get('/user/del', (req, res) => {
    const { id } = req.query;
    const DELETE_USER = `DELETE FROM persons WHERE id='${id}'`;
    dbConn.query(DELETE_USER, (err, results) => {
        if (err) {
            return res.send(err);
        }
        else {
            return res.send('delete success');
        }
    });
});

app.get('/user/add', (req, res) => {
    const { name, age } = req.query;
    const INSERT_USER = `INSERT INTO persons(name, age) VALUES('${name}', ${age})`;
    dbConn.query(INSERT_USER, (err, results) => {
        if (err) {
            return res.send(err);
        }
        else {
            return res.send('add success');
        }
    });
});

app.get('/user', (req, res) => {
    const SELECT_ALL = 'SELECT * FROM persons';
    dbConn.query(SELECT_ALL, (err, results) => {
        if (err) {
            return res.send(err);
        }
        else {
            return res.json({
                data: results
            });
        }
    });
});

app.listen(3500, () => {
    console.log('server start');
});