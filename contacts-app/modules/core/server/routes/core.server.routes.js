/**
 * Created by Ruchi on 7/10/16.
 */

'use strict';

module.exports = function(app){
    
    var controller = require('../controllers/core.server.controller')
    
    app
        .route('/api/contact')
             .get(controller.getContacts);
}
    