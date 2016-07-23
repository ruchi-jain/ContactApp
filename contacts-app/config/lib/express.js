/**
 * Created by Ruchi on 7/10/16.
 */
'use strict';

var express = require('express'),
    bodyParser = require('body-parser');//3rd party library

module.exports.init = function(){
    var app = express();

    //body parser middleware integration
    this.initBodyParser(app)

    return app;
};

module.exports.initBodyParser = function(app){
    // parse application/x-www-form-urlencoded
    app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
    app.use(bodyParser.json())

}
