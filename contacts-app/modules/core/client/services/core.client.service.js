/**
 * Created by ruchi on 8/1/16.
 */

'use strict'

angular
    .module('ContactsApp')
     .factory("contacts",function(){
        var contacts =[ {
            "firstName": "Ethan",
            "lastName": "Arnold",
            "zip": "96363",
            "email": "posawle@si.ac",
            "address": "1150 Oruoju Grove",
            "id": "1"
        },
            {
                "firstName": "Elijah",
                "lastName": "Olson",
                "zip": "02067",
                "email": "zopirpi@vaetku.ci",
                "address": "1061 Povu Circle",
                "id": "2"
            },
            {
                "firstName": "Alvin",
                "lastName": "McGuire",
                "zip": "82380",
                "email": "melucor@osogi.kh",
                "address": "1743 Bafus Boulevard",
                "id": "3"
            },
            {
                "firstName": "Peter",
                "lastName": "Myers",
                "zip": "38600",
                "email": "hebopis@wipurel.ba",
                "address": "452 Ucmar Center",
                "id": "4"
            },
            {
                "firstName": "Herbert",
                "lastName": "Richards",
                "zip": "83692",
                "email": "lanfa@feidle.td",
                "address": "1505 Rasgum Path",
                "id": "5"
            },
            {
                "firstName": "Cody",
                "lastName": "Blair",
                "zip": "03048",
                "email": "inuleafo@miloc.com",
                "address": "253 Wopa Park",
                "id": "6"
            },
            {
                "firstName": "Derek",
                "lastName": "Terry",
                "zip": "18972",
                "email": "cisef@ipi.fm",
                "address": "56 Fozsaf Way",
                "id": "7"
            },
            {
                "firstName": "Ronnie",
                "lastName": "Wright",
                "zip": "03948",
                "email": "hohzi@hez.mq",
                "address": "1799 Ibbo Place",
                "id": "8"
            },
            {
                "firstName": "Caroline",
                "lastName": "Hoffman",
                "zip": "74410",
                "email": "here@refgeg.ax",
                "address": "1243 Voon Center",
                "id": "9",
            },
            {
                "firstName": "Hallie",
                "lastName": "Reyes",
                "zip": "35020",
                "email": "osutiwme@buknumito.gy",
                "address": "1070 Baban Heights",
                "id": "10"
            }
        ];

        contacts.add = function(contact){
            console.log(contact);
            contacts.push(contact);
        };
         console.log(contacts);
        return contacts;
     })
