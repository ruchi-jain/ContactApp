/**
 * Created by Ruchi on 7/10/16.
 */
'use strict';

var express = require('./express'); // ./ search in same directory otherwise it will search in node_,odule directory

module.exports.start = function(){
   var app =  express.init();
    app.listen('8090',function(){
        console.log("Application is running on port 8090");
    });
}