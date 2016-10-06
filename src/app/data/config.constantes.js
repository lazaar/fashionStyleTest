(function () {
    'use strict';

    angular.module('playquizzy').constant('configConstantes', {
    

        siteUrlBase :  'http://localhost:3000',
        facebookUrlApp : 'http://localhost:3000',

        share:{
        	main:{
        		name:"Find your fashion personality style",
        		caption:"From now on, you will feel comfortable with your clothes",
        		description:"A 'Clothing Personality Quiz' will give you an idea of what fashion style suits you, and may be an indicator of your dominant core, true clothing personality "
        	}, 
        	result:{
        		caption:"Find your personality Clothing Style by taking the Quiz"
        	}
        }
        
    });
})();
