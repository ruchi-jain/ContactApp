/**
 * Created by Ruchi on 7/10/16.
 */
'use strict';

var _ = require('lodash');
var initGlobalConfig = function(){
   
    var config = {
             server : {},
             client : {}
        };
    
    var defaultConfig =require('./env/default'),
        environment = process.env.NODE_ENV;
    config = _.extend(defaultConfig, require('./env/' + (environment || 'development')));
    return config;
};

module.exports = initGlobalConfig();