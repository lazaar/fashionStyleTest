(function() {
    'use strict';

    /**
     * @module playquizzy
     *
     * @description Service pour le partage
     *
     */
    angular.module('playquizzy').factory('facebookServices', facebookServices);

    function facebookServices(configConstantes, $window) {



        // ############################################# //
        // ############### PUBLIC BUSINESS ############# //
        // ############################################# //

        function shareFacebook(link, name, caption, description, image) {
          $window.ga('send', 'event', 'fashionQuiz', 'Share Facebook', link);
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
          $window.ga('send', 'event', 'fashionQuiz', 'Send to Friend', link);
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
