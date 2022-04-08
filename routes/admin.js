const express = require('express');
const router = express.Router();
const conn = require('../connection/connection');

router.get('/cms', function (request, response) {
    if (request.session.loggedin) {
        response.render("index");
    } else {
        response.redirect("/login");
    }
    response.end();
});

module.exports = router;