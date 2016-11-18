// Router for login and signup 
var express = require('express');
var router = express.Router();
var isAuthenticated = function (req, res, next) {
    if (req.isAuthenticated())
        return next();
    res.redirect('/');
}

module.exports = function(passport) {
    
    router.get('/', function (req, res, next) {
       res.render('user');
    });

    router.post('/login', passport.authenticate('login', {
       successRedirect: '/home',
       failureRedirect: '/',
       failureFlash : true
    }));
    
}
