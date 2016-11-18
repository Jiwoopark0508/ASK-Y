var LocalStrategy = require('passport-local').Strategy;
var User = require('../model/user');
var bCrypt = require('bcrypt-nodejs');

module.export = function(passport) {
    passport.use('login', new LocalStrategy({
       passReqToCallback : true 
    }, 
    function(req, username, password, done) {
        User.findOne({ 'username' : username}, 
            function(err, user) {
                if (err) 
                    return done(err);
                if (!user) {
                    console.log('User not Found! ' + username);
                    return done(null, false, req.flash('message', 'User Not Found'));
                }

                if (!isValidPassword(user, password)) {
                    console.log('Invalid Password');
                    return done(null, false, req.flash('message', 'Invalid Password'));
                }

                return done(null, user);
            })      
    }));

    var isValidPassword = function(user, password) {
        return bCrypt.compareSync(password, user.password);
    };
}
