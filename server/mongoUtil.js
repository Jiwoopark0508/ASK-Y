"use strict";

let mongo = require('mongodb');
let mongoClient = mongo.MongoClient;
let _db;

module.exports = {
    connect() {
        mongoClient.connect('mongodb://localhost:27017/gqapp', (err, db) => {
            if(err){
                console.log("Connection Failed!");
                process.exit(1);
            }
            _db = db;
            console.log("Mongo Connected!");
        })
    },
    template() {
        return _db.collection('template');
    },
    lectures(){
        return _db.collection('lecture');
    },
    user(){
        return _db.collection('user');
    }
}
