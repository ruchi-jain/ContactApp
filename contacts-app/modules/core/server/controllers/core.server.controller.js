/**
 * Created by Ruchi on 7/10/16.
 */
'use strict';

var mockService = require('../utils/core.server.mock');

module.exports.getContacts = function(req,res){
    res.status(200);
    res.json(mockService.getContacts);
    res.end('Hello World');
}