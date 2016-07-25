/**
 * Created by Ruchi on 7/10/16.
 */
/*
'use strict';

var mockService = require('../utils/core.server.mock');

module.exports.getContacts = function(req,res){
    res.status(200);
    res.json(mockService.getContacts);
    res.end('Hello World');
}

module.exports.createContact =function(req,res){
    var contact = req.body;
    if(!contact){
        res.status(400);
        res.end("Error: couldn't save contact");
    }
       contact = mockService.saveContact(contact);
    if(contact){
        res.status(200);
        res.json(contact);
      
    }
   
}



module.exports.updateContact = function(req, res){
    var updatedContact = req.body,
        contactID = req.metadata.contactId,
        index = req.metadata.index;

    var isUpdated = mockService.updateContact(index,updatedContact);
    if(!isUpdated){
        res.status(400)
            .send({message: "Error:: Unable to update contact. Please try again!!"});
    } else{
        res.status(200)
            .json(updatedContact);
    }
}


module.exports.validateContactIdAndForward = function(req, res, next, id){
    var metadata = req.metadata = {};
    metadata.contactId = id;
    var foundContact = mockService.findContactById(id);
    if (foundContact) {
        metadata.model = foundContact.contact;
        metadata.index = foundContact.index;
    }
    if(!metadata.model){
        res
            .status(400)
            .send({message: 'Error: Unable to find Contact with id '+id });
    }
    next();
}*/
'use strict';

var contactService = require('../services/contact.server.service');

module.exports.getContacts = function (req, res) {
    contactService.getContacts(function (contacts) {
        res.status(200);
        res.json(contacts);
    });
}

module.exports.getContact = function(req, res){
    var id = req.metadata.contactId;
    contactService.findContactById(id,function (foundContact) {
        if (foundContact) {
            res.status(200);
            res.json(foundContact);
            res.end;
        }
        else {
            res
                .status(400)
                .send({message: 'Error: Unable to find Contact with id ' + id});
            return;
        }
    });
}

module.exports.createContact = function (req, res) {
    var contact = req.body;
    contactService.saveContact(contact, function (err, contact) {
        if (err) {
            
            res
                .status(400)
                .send({message: "Error: Internal error while saving data. Please try again later"})
            return;
        } else
        {
            res
                .status(200)
                .json(contact)
        }
    });
}

module.exports.updateContact = function (req, res) {
    var updatedContact = req.body,
        contactID = req.metadata.contactId;

    contactService.updateContact(contactID, updatedContact, function (isUpdated) {
        if (!isUpdated) {
            res.status(400)
                .send({message: "Error:: Unable to update contact. Please try again!!"});
        } else {
            res.status(200)
                .json(isUpdated);
        }
    });
}

module.exports.deleteContact = function (req, res) {
    var contactID = req.metadata.contactId;

    contactService.deleteContact(contactID,function (isDeleted) {
        if (isDeleted) {
            res.status(200)
                .send({message: "Succesfully deleted contact."});
        } else {
            res.status(400)
                .send({message: "Error:: Unable to delete contact. Please try again!!"});
        }
    });
}


module.exports.validateContactIdAndForward = function (req, res, next, id) {
    var metadata = req.metadata = {};
    metadata.contactId = id;
    contactService.findContactById(id,function (foundContact) {
        if (foundContact) {
            metadata.model = foundContact;
        }
        if (!metadata.model) {
            res
                .status(400)
                .send({message: 'Error: Unable to find Contact with id ' + id});
                return;
        }
    });
    next();
}

module.exports.FindTopContacts = function(req,res){
    contactService.findTopContacts(function (foundContact) {
        if (foundContact) {
            res.status(200);
            res.json(foundContact);
            res.end;
        }
        else {
            res
                .status(400)
                .send({message: 'Error: Unable to find Contact'});
            return;
        }
    });
}

module.exports.getContactsWithCity = function(req,res) {
    contactService.getPhoneWithCity(function (foundContact) {
        if (foundContact) {
            res.status(200);
            res.json(foundContact);
            res.end;
        }
        else {
            res
                .status(400)
                .send({message: 'Error: Unable to find Contact'});
            return;
        }
    })
}