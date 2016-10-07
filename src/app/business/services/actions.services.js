(function() {
    'use strict';

    /**
     * @module playquizzy
     *
     * @description Service pour le partage
     *
     */
    angular.module('playquizzy').factory('actionServices', actionServices);

    function actionServices(configConstantes, $http) {



        // ############################################# //
        // ############### PUBLIC BUSINESS ############# //
        // ############################################# //

        function subscribe(email, fashionType) {
          return $http({
            method:'post',
            url:configConstantes.BOurl,
            data:{method:configConstantes.methods.newsletter,email:email, fashionType: fashionType},
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
          });
        }


        function saveResult(email, fashionType, facebookUser, responses ) {
          $http({
            method:'post',
            url:configConstantes.BOurl,
            data:{
              method:configConstantes.methods.saveResult,
              email:email,
              fashionType: fashionType,
              facebookUser:JSON.stringify(facebookUser),
              responses:JSON.stringify(responses)
            },
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
          });
        }

        // ############################################# //
        // ############### Private BUSINESS ############ //
        // ############################################# //


        return {
            subscribe: subscribe,
            saveResult: saveResult
        };
    }

})();
