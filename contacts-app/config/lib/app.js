/**
 * Created by Ruchi on 7/10/16.
 */
'use strict';

var express = require('./express'), // ./ search in same directory otherwise it will search in node_,odule directory
    config = require('../config'),
    mongoose = require('./mongoose'),
    path = require('path');
    

module.exports.loadRoutes = function(app){
    var coreRoute = require(path.join(process.cwd(),'modules/core/server/routes/core.server.routes'));
    coreRoute(app);
}

module.exports.start = function(){
  var self = this;

    mongoose.connect(function(db){
        var app =  express.init();
        self.loadRoutes(app);
        app.listen(config.app.port,function(){
            console.log("Application is running on port :: " + config.app.port);
        });
    })

    
    //Route Registration 
    //this.loadRoutes(app);
    

}