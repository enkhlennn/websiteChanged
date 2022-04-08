const express = require('express');
const router = express.Router();
const conn = require('../connection/connection');

router.get('/contact', function (request, response) {
    response.render("contact");
});

module.exports = router;