const express = require('express');
const router = express.Router();
const conn = require('../connection/connection');

router.get('/category', function (request, response) {
    response.render("category");
});

module.exports = router;