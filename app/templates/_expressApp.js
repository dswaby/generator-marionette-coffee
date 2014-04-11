'use strict';

var express = require('express');
var http = require('http');
var path = require('path');
var async = require('async');
var mongoose = require('mongoose');


var uristring = process.env.MONGOLAB_URI || process.env.MONGOHQ_URL || 'mongodb://localhost/marionetteApp';
var theport = process.env.PORT || 9000;
// Makes connection asynchronously.  Mongoose will queue up database
// operations and release them when the connection is complete.
mongoose.connect(uristring, function(err, res) {
    if (err) {
        console.log('ERROR connecting to: ' + uristring + '. ' + err);
    } else {
        console.log('Succeeded connected to: ' + uristring);
    }
});
var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function callback () {

    var app = express();
    app.configure(function() {
        app.set('port', theport);
        app.set('views', __dirname + '../app');
    });

    app.use(function(req, res, next) {
        console.log('%s %s', req.method, req.url);
        next();
    });
    // mount static
    app.use(express.static(path.join(__dirname, '../app')));
    app.use(express.static(path.join(__dirname, '../.tmp')));
    app.use(express.cookieParser());
    app.use(express.bodyParser());
    app.use( app.router );
    app.use( express.methodOverride() );
    app.use( express.errorHandler({ dumpExceptions: true, showStack: true }));

    app.get('/', function(req, res) {
        res.sendfile(path.join(__dirname, '../app/index.html'));
    });

    http.createServer(app).listen(app.get('port'), function() {
        console.log('Express App started!');
    });
});


