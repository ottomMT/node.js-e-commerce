var express = require('express');
var router = express.Router();

/* GET login page. */
router.get('/login', function(req, res, next) {
	res.render('front/login', { title: 'Login' });
});

/* GET registration page. */
router.get('/register', function(req, res, next) {
	res.render('front/register', { title: 'Register' });
});

/* GET User Account page. */
router.get('/account', function(req, res, next) {
	res.render('user/account', { title: 'Account' });
});

module.exports = router;