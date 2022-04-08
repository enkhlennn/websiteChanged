const express = require('express');
const router = express.Router();
const conn = require('../connection/connection');
const path = require('path')


router.get('/login', function (request, response) {
    response.render("test", { error: "" });
});
router.post('/login', function (request, response) {
    var username = request.body.username;
    var password = request.body.password;
    if (username && password) {
        conn.query('SELECT * FROM accounts WHERE username = ? AND password = ?', [username, password], function (error, results, fields) {
            if (results.length > 0) {
                request.session.loggedin = true;
                request.session.username = username;
                response.redirect('/home');
            } else {
                response.render("login", { error: "Please check your username or password" });;
            }
            response.end();
        });
    } else {
        response.send('Please enter Username and Password!');
        response.end();
    }
});

module.exports = router