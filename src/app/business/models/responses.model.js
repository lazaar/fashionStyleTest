(function () {
    'use strict';

    angular.module('playquizzy').factory('responses', responses);
    
    function responses() {
        
        
        // ############################################# //
        // #################### MODEL ################## //
        // ############################################# //

        var responses = [];
        
        // ############################################# //
        // ############### PUBLIC BUSINESS ############# //
        // ############################################# //
        
        /**
         * Set responses
         * @param value
         */
        function setResponses(value) {
            responses = value;
        }

        /**
         * Set responses
         * @param value
         */
        function addResponse(indexQuestion, indexResponse) {

            if(responses.length > indexQuestion){
                responses[indexQuestion] = indexResponse;
            }
            else if(responses.length === indexQuestion){
                responses.push(indexResponse);
            }
            else{
                return false;
            }
            return true;
        }
        
        /**
         * Récupération les responses  en mémoire si ils sont défini
         * @returns {*}
         */
        function getResponses() {
            return responses;
        }

        /**
         * Récupération les responses  en mémoire si ils sont défini
         * @returns {*}
         */
        function getResponseByIndex(index) {
            return responses[index];
        }
        // ############################################# //
        // ################### API ##################### //
        // ############################################# //
        
        return {
            setResponses: setResponses,
            getResponses: getResponses,
            addResponse: addResponse,
            getResponseByIndex: getResponseByIndex
            
        };
    }
    
})();
