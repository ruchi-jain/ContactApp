/**
 * Created by Ruchi on 7/10/16.
 */

'use strict';

module.exports = function(app){
    
    var controller = require('../controllers/core.server.controller'),
        mainController=require('../controllers/main.server.controller');
    
    
    
    app   
        .route('/')
        .get(mainController.index);
    app
        .route('/api/contact')
             .get(controller.getContacts)
             .post(controller.createContact);
            

    app
             .route('/api/contact/:contactId')
             .get(controller.getContact)
             .delete(controller.deleteContact)
             .put(controller.updateContact);

    app.param ('contactId', controller.validateContactIdAndForward);

    app
        .route('/api/topcontacts')
        .get(controller.FindTopContacts);

    app
        .route('/api/contactWithCity')
        .get(controller.getContactsWithCity)
    
   
}
    