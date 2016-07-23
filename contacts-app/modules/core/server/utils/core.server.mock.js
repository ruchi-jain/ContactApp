/**
 * Created by Ruchi on 7/10/16.
 */
'use strict';

var Chance = require('chance'),
    _ = require('lodash'),
    underscore = require('underscore');
   

var contacts = generateMockContacts();



module.exports.saveContact = function(contact){
    var chance = new Chance();
  var ccontact = _.clone(contact);
    ccontact.id = chance.guid();
    contacts.push(ccontact);
    return ccontact;
}

//module.exports.deleteContact = function(contactID){
  //  var ocontacts = underscore.reject(contacts, function(el) { return el.id === contactID; });
  //  var index = contacts.indexOf(contactID);
   // contacts.splice(index,1);
    //return ocontacts;
//}




module.exports.findContactById = function(id){
    var foundContact;
    contacts.some(function(contact, index){
        if(contact.id === id){
            foundContact = {}
            foundContact.contact = contact;
            foundContact.index = index;
            return foundContact;
        }
    });
    return foundContact;
}

module.exports.getContacts = contacts;

module.exports.updateContact = function(index, updatedContact){
    contacts[index] = updatedContact;
    return updatedContact;
}


function generateMockContacts(){

    var contacts =[];
    var chance = new Chance();
    for(var i=0; i< 10 ; i++){
        var contact = {};
        contact.id= chance.guid();
        var name = chance.name().split(' ');
        contact.firstName = name[0];
        contact.lastName = name[1];
        contact.zip = chance.zip();
        contact.email = chance.email();
        contact.address = chance.address();

        contacts.push(contact);
    }
    return contacts;
}