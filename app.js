'use strict';

var PORT = process.env.PORT || 3000;

var express = require('express');
var morgan = require('morgan');
var bodyParser = require('body-parser');

var app = express();

app.set('view engine','jade');

//General Middleware
app.use(morgan('dev'));
app.use(bodyParser.urlencoded( {extended: true} ));
app.use(bodyParser.json());
app.use(express.static('public'));

//Routes
app.use('/',require('./routes/index'));
app.use('/newcontact',require('./routes/newcontact'));

app.listen(PORT);
