/**
 * Created by ruchi on 7/20/16.
 */
'use strict';

var mongoose = require('mongoose'),
    Contact= mongoose.model('rContact');
    //Contact = require('../models/contact.server.model');

//contact = mongoose.model('Contact');
module.exports.getContacts = function (callback) {
    Contact.find({},function (err, contacts) {
        if(err) throw err;
        console.log(contacts);
        callback(contacts);
    });
}

module.exports.saveContact = function(savableContact, callback){

    var contact = new Contact(savableContact);
    contact.save(function (err) {
        callback(err, contact);
    });

    console.log('mongoose readyState is ' + mongoose.connection.readyState);// should be 1

}

module.exports.updateContact = function (contactID, updatedContact, callback) {

    Contact.findByIdAndUpdate(contactID, { firstname: updatedContact.firstname, lastname: updatedContact.lastname, email: updatedContact.email }, function(err, contact) {
        if (err) throw err;
        updatedContact._id = contact._id;
        console.log("====updated contact=====");
        console.log(updatedContact);
        callback(updatedContact);
    });

}

module.exports.deleteContact = function (id,callback) {
    var isDeleted;
    Contact.findByIdAndRemove(id, function(err) {
        if (err){
            console.log("Error: Unable to Delete");
            isDeleted = false;
        }else{
            console.log("Contact Deleted successfully");
            isDeleted = true;
        }
        callback(isDeleted);
    });
}

module.exports.findContactById = function(id,callback){
    Contact.findById(id, function(err, contact) {
        if (err) throw err;
        callback(contact);
    });
}