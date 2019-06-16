const express = require('express');
const path = require('path');
const config = require('config');
const bodyParser = require('body-parser');
const app = express();
const db = require('./db');

global.appRoot = path.resolve(__dirname);

app.use(bodyParser.json());
//Adding the CORS header
app.all('/*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-type,Accept,X-Access-Token,X-Key,X-Forwarded-For');
    res.header('Access-Control-Max-Age', '600');

    if (req.method == 'OPTIONS') {
        //Handling a pre-flighted request here
        res.status(200).end();
    } else {
        next();
    }
});

app.use('/', require('./routes'));
    //Route not found...return 404
    app.use(function (req, res, next) {
        res.status(404).send("Sorry can't find that!");
    });
    //Error middleware
    app.use(function (err, req, res, next) {
        console.error(err.stack);
        res.status(500).send('Something snapped!');
    });

/*
    Start the server
*/
app.set('port', process.env.PORT || 4000);
var server = app.listen(app.get('port'), function() {
    console.log('CP API server listening on port ' + app.get('port'));
});
