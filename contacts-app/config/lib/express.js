/**
 * Created by Ruchi on 7/10/16.
 */
'use strict';

var express = require('express'),
    bodyParser = require('body-parser'),//3rd party library
    consolidate = require('consolidate'),
    swig= require('swig'),
    path=require('path'),
    config=require('../config');

module.exports.init = function(){
    var app = express();  //express object

    //body parser middleware integration
    this.initBodyParser(app);
    this.initViewEngine(app);
    this.initIgnoreStaticRoute(app);

    return app;
};

module.exports.initBodyParser = function(app){
    // parse application/x-www-form-urlencoded
    app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
    app.use(bodyParser.json())

}


module.exports.initViewEngine = function (app) {
    app.engine('server.view.html', consolidate['swig']);
    
    app.set('view engine', 'server.view.html');
    app.set('views',path.join(process.cwd(), '/modules/core/server/views/'));
}

module.exports.initIgnoreStaticRoute = function(app){
    app.use('/public',express.static(path.resolve('./public')));
    
    config.client.files.forEach(function(staticPath){
        app.use(staticPath,express.static(path.resolve('./' + staticPath)));
    })
   

}