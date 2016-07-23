/**
 * Created by ruchi on 7/20/16.
 */
'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    validator = require('validator');

var validateFieldStrategy = function(property){
    return property.length;
}

var validateEmailStartegy = function(property){
    return validator.isEmail(property);
}

var ContactSchema = new Schema({
    firstname:{
        type: String,
        default: '',
        trim: true,
        validate:[validateFieldStrategy, 'Firstname cannot be empty']
    },
    lastname:{
        type: String,
        default: '',
        trim: true,
        validate:[validateFieldStrategy, 'Lastname cannot be empty']
    },
    email:{
        type: String,
        default: '',
        trim: true,
        unique:true,
        lowercase:true,
        validate:[validateEmailStartegy, 'Email validation not passed']
    }
});

mongoose.model('rContact', ContactSchema);
//var Contact = mongoose.model('Contact', ContactSchema);

//module.exports = Contact;