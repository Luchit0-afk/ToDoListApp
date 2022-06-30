var express = require('express');
var router = express.Router();
var _posts = require('./posts.js');

router.post('/new', _posts.newTask);

module.exports = router;