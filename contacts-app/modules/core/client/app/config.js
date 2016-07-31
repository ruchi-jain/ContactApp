/**
 * Created by Ruchi on 7/29/16.
 */
'use strict';

var ApplicationConfiguration = (function(){  //one single global variable
        
        var _applicationModuleName = 'ContactsApp';  //super modue
        
        var _applicationDependencies = ['ui.router'];
        
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