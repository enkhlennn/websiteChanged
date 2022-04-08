const express = require('express');
const router = express.Router();
const path = require('path');
//use css and js and photos

router.get('/register', function (request, response) {
    response.render("register");
});

router.post('/register', function (request, response) {
    response.render("register");
});

module.exports = router;