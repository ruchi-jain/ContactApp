/**
 * Created by ruchi on 7/20/16.
 */

'use strict';

// module dependecies
var config = require('../config'),
    mongoose = require('mongoose'),
    path = require('path'),
contact = require(path.join(process.cwd(), 'modules/core/server/models/contact.server.model'));

module.exports.connect = function (callback) {
    var db = mongoose.connect(config.db.uri, config.db.options, function(err){
        if (err) {
            console.error("Error: Couldn't connect to MongoDB!!");
            console.log(err);
        } else {
            if (callback) callback(db);
        }
    });
}