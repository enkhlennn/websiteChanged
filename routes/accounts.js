const express = require('express');
const router = express.Router();
const db=require('../connection/connection');
const { route } = require('./login');

router.get('/account-list', (req, res, next) =>{
const sql = 'SELECT * FROM accounts';
db.query(sql, (err, data, fields) => {
    if(err){
        // throw err;
        console.log('NONONONO')
    }
    console.log('Anha')
    res.render('account-list', {title: 'Account List', accountData: data});
})
})
module.exports = router;