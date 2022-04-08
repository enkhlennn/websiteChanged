const express = require('express');
const router = express.Router();
const conn = require('../connection/connection');

router.get('/single-post', function (request, response) {
    response.render("single-standard");
});

module.exports = router;