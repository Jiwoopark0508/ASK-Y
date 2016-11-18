"use strict";

var express = require('express');
var bodyParser = require('body-parser');
let mongoUtil = require('./mongoUtil');
let login     = require('./login');

var app     = express();
var port    = 9000;

app.use('/user', route);
app.use(express.static( __dirname + '/../client'));      // static files in client
app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());
mongoUtil.connect();                                     // mongo Connection

app.get('/lecture', function(req, res){
    let lectures = mongoUtil.lectures();
    let _arr;
    lectures.find().toArray((err, docs) => {
       if(err){
           console.log(err);
       }
       _arr = docs;
       res.json(_arr);
    });
});
app.get('/template', function(req, res){
    let template = mongoUtil.template();
    let _arr;
    template.find().toArray((err, doc) => {
        if(err){
            console.log("Error");
        }
        _arr = doc;    
        res.json(_arr);
    });
});

app.get('/template2', function(req, res){});
app.listen(port, () => { console.log("Welcome to mkque! Go to localhost:" + port); });
