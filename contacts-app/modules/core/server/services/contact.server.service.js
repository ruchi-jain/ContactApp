/**
 * Created by ruchi on 7/20/16.
 */
'use strict';

var mongoose = require('mongoose'),
    Contact= mongoose.model('rContact');


module.exports.getContacts = function (callback) {
    Contact.find({},function (err, contacts) {
        if(err) throw err;
        console.log(contacts);
        callback(contacts);
    });
}

module.exports.saveContact = function(savableContact, callback){
    console.log(savableContact);
    var contact = new Contact(savableContact);
    console.log(contact);
    contact.save(function (err) {
        if(err){
            callback(err);
            return;
        }
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

module.exports.findTopContacts = function(callback){
    Contact.find({}).limit(10).exec(function (err, contacts) {
        if(err) {
            console.log(err);
            throw err;
        }
        console.log(contacts);
        callback(contacts);
    })
}

module.exports.getPhoneWithCity = function(callback){
    Contact.find({'city' : 'fremont'},{phone:1, firstname: 1}).exec(function (err, contacts) {
        if(err){
            console.log(err);
            throw  err;
        }
        console.log(contacts);
        callback(contacts);
    })
}

module.exports.getContactsPhone = function(callback){
    Contacts.find({phone : {$regex : /^408/}}).exec(function (err, contacts) {
        if(err) throw err;
        console.log(contacts);
        callback(contacts);
    })
}