var express = require('express');
var router = express.Router();

/* GET login page. */
router.get('/login', function(req, res, next) {
	res.render('user/login', { title: 'Login' });
});

/* GET registration page. */
router.get('/register', function(req, res, next) {
	res.render('user/register', { title: 'Register' });
});

/* POST Create User Account. */
router.get('/register/create', function(req, res, next) {
	
});

/* GET User Account page. */
router.get('/account', function(req, res, next) {
	res.render('user/account', { title: 'Account' });
});

/* POST Update User Account Info. */
router.get('/account/update', function(req, res, next) {
	
});

module.exports = router;