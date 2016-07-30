/**
 * Created by Ruchi on 7/29/16.
 */
'use strict';

var ApplicationConfiguration = (function(){
        
        var _applicationModuleName = 'ContactsApp';
        
        var _applicationDependencies = [];
        
        var _registerModule = function(moduleName, dependencies){
            //create angular module
            angular.module(_applicationModuleName, dependencies || []);
            // new module will bind to contacts app.
            angular.module(_applicationModuleName).requires.push(moduleName);
            
        }
        return {
            applicationModuleName: _applicationModuleName,
            applicationDependencies: _applicationDependencies,
            registerModule: _registerModule // private variable
        }
    }
)();