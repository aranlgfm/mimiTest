var express = require('express');
var router = express.Router();
// var dbConn = require(__dirname + '../config/database');

const bodyParser = require('body-parser');

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));

router.get('/aaa', function (req, res) {
    res.send('aaa success!');
})

router.post('/insert', (req, res) => {
    console.log(__dirname + "../");
    res.send('user insert!!!')
    // const { name, age } = req.body;
    // const INSERT_USER = `INSERT INTO persons(name, age) VALUES('${name}', ${age})`;
    // dbConn.query(INSERT_USER, (err, results) => {
    //     if (err) {
    //         // return res.send(err);
    //         return res.redirect('/');
    //     }
    //     else {
    //         return res.redirect('/');
    //         // return res.send('add success');
    //     }
    // });
});

module.exports = router;