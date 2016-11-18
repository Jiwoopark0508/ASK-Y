var mongoose = require('mongoose');

module.exports = function(url) {
    mongoose.model('User', {
        username : String,
        password : String
    })
}
