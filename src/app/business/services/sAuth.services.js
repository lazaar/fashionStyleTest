(function() {
    'use strict';

    /**
     * @module playquizzy
     *
     * @description Service pour l'authentification
     *
     */
    angular.module('playquizzy').factory('sAuth', sAuth);

    function sAuth($rootScope) {



        // ############################################# //
        // ############### PUBLIC BUSINESS ############# //
        // ############################################# //

        function watchLoginChange(pageNumber, search, idProfil) {
          var _self = this;
          FB.Event.subscribe('auth.authResponseChange', function(res) {

            if (res.status === 'connected') {
              getUserInfo();
            }
            else {
                console.log("Not connected");
            }

          });
        }



        // ############################################# //
        // ############### Private BUSINESS ############ //
        // ############################################# //

        var getUserInfo = function() {

          var _self = this;

          FB.api('/me', {fields: 'name, email, birthday, picture'}, function(res) {
            $rootScope.$apply(function() {
              $rootScope.user = res;
              console.log($rootScope.user);
            });
          });

        }


        return {
            watchLoginChange: watchLoginChange,
        };
    }

})();
