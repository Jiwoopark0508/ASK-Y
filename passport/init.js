var login = require('./login');
var signup = require('./signup');
var User = require('../model/user');

module.exports = function(passport) {
    passport.serializeUser(function(user, done) {
        console.log('serialzie');
        done(null, user);
    });

    passport.deserializeUser(function(user, done) {
        console.log('deserialzie');
        done(null, user);
    });

    login(passport);
    signup(passport);
};
