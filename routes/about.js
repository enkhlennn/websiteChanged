const express = require('express');
const router = express.Router();
const conn = require('../connection/connection');

router.get('/about', function (request, response) {
    response.render("about");
});

module.exports = router;