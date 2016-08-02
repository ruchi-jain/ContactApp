/**
 * Created by ruchi on 7/31/16.
 */
'use strict';

angular
    .module('ContactsApp')
       .controller('ContactsCntrl',function($scope,contacts){
           $scope.contacts =angular.copy(contacts);
           $scope.fields = Object.keys($scope.contacts[0]) || [];
       })
       .controller('saveCtrl', function($scope,contacts){
           $scope.saveContact = function(contact){
              contact.id = contacts.length + 1;
               contacts.add( contact);
               debugger;
           }
        })