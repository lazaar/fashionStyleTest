(function() {
    'use strict';

    /**
     * @module playquizzy
     *
     * @description Service pour le partage
     *
     */
    angular.module('playquizzy').factory('facebookServices', facebookServices);

    function facebookServices(configConstantes) {



        // ############################################# //
        // ############### PUBLIC BUSINESS ############# //
        // ############################################# //

        function shareFacebook(link, name, caption, description, image) {
          FB.ui(
          {
            method: 'feed',
            redirect_uri: configConstantes.siteUrlBase,
            link: link,
            name: name,
            caption: caption,
            description: description,
            picture: configConstantes.siteUrlBase + image
          });
        }


        function inviteFriends(message){
          FB.ui({method: 'apprequests',
            message:message
          });
        }

        function sendToFriend(link){
          FB.ui({method: 'send',
            link:link
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
