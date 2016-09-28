(function() {
    'use strict';

    /**
     * @module playquizzy
     *
     * @description Service pour le partage
     *
     */
    angular.module('playquizzy').factory('facebookServices', facebookServices);

    function facebookServices() {



        // ############################################# //
        // ############### PUBLIC BUSINESS ############# //
        // ############################################# //

        function shareFacebook(link, name, caption, description) {
          FB.ui(
          {
            method: 'feed',
            redirect_uri: 'http://localhost:3000/#/',
            link: link,
            name: name,
            caption: caption,
            description: description
          }, function(response){
            console.log("Finished");
          });
        }


        function inviteFriends(message){
          FB.ui({method: 'apprequests',
            message:message
          }, function(response){
            console.log(response);
          });
        }

        function sendToFriend(link){
          FB.ui({method: 'send',
            link:link
          }, function(response){
            console.log(response);
          });
        }

        // ############################################# //
        // ############### Private BUSINESS ############ //
        // ############################################# //


        return {
            shareFacebook: shareFacebook,
            inviteFriends : inviteFriends,
            sendToFriend: sendToFriend
        };
    }

})();
