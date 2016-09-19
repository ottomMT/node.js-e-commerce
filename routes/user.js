var express = require('express');
var router = express.Router();
var md5 = require('crypto-md5');
var async = require('async');
var passport = require('passport');
var flash = require('connect-flash');

/* GET login page. */
router.get('/login', function(req, res, next) {
	if (req.isAuthenticated()) res.redirect('/user/account');
	
	res.render('user/login', { 
		message: req.flash('error'), 
		title: 'Login'
	});
});

router.post('/login', passport.authenticate('local', {
		successRedirect: '/',
		failureRedirect: '/user/login',
		failureFlash: true
	})
);

/* GET registration page. */
router.get('/register', function(req, res, next) {
	if (req.isAuthenticated()) res.redirect('/user/account');
	
	res.render('user/register', { title: 'Register' });
});

/* POST Create User Account. */
router.post('/register/create', function(req, res, next) {
	var db = req.db;
		users = db.get('users');
	
	async.parallel([
		function(callback) {
			users.count({'email':req.body.email}, function (error, count) {
				user_exists = count;
				callback();
			});
		}
	], function(err) {
		if(req.body.email == '' || req.body.password == ''){
			res.send({
				'status': 0,
				'message': 'Please fill-up all required fields'
			});
		} else if(req.body.password != req.body.password2) {
			res.send({
				'status': 0,
				'message': 'Passwords do not match'
			});
		} else if(user_exists) {
			res.send({
				'status': 0,
				'message': 'User ' + req.body.email + ' already exists'
			});
		} else {
			users.insert({
				'email' : req.body.email,
				'password' : md5(req.body.password),
				'first_name' : req.body.first_name,
				'last_name' : req.body.last_name,
				'phone_number' : req.body.phone_number
				
			}, function (err, doc) {
				if (err) {
					res.send({
						'status': 0,
						'message': err
					});
				} else {
					res.send({
						'status': 1,
						'message': doc._id /* Return document ID if insert was successfull */
					});
				}
			});
		}
	});
});

/* GET User Account page. */
router.get('/account', function(req, res, next) {
	if (!req.isAuthenticated()) res.redirect('/user/login');
	
	res.render('user/account', { title: 'Account' });
});

/* POST Update User Account Info. */
router.get('/account/update', function(req, res, next) {
	
});

/* Handle Logout */
router.get('/logout', function(req, res) {
	req.logout();
	res.redirect('/');
});

module.exports = router;