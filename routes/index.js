/*jslint browser: true, plusplus: true, regexp: true*/
/*global $, jQuery, angular, require, module*/

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res) {
	'use strict';
	res.render('index', { title: 'Express 4.9.0' });
});

module.exports = router;
