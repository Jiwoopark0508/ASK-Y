"use strict";

var express = require('express');
let mongoUtil = require('./mongoUtil');
var app     = express();
var port    = 9000;

app.use(express.static( __dirname + '/../client'));      // static files in client
mongoUtil.connect();                                     // mongo Connection
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
app.listen(port, () => { console.log("Welcome to mkque! Go to localhost:" + port); });
