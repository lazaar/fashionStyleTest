(function() {
  'use strict';

  angular
    .module('playquizzy')
    .controller('ResultController', ResultController);

  /** @ngInject */
  function ResultController(responses, $timeout, questionsData, resultsData, $state) {
    var vm = this;
    var responseFlags;
    var results;

    function calculateResult(){
      responses.getResponses().forEach(function(ResponseIndex, QuestionIndex){

        var response = _.result(questionsData,'questions['+QuestionIndex+'].responses['+ResponseIndex+']',{});
        _.result(response,'flags',[]).forEach(function(flag, index){
          responseFlags[index] += flag;
        });
      });
      var userResultIndex = responseFlags.indexOf(_.max(responseFlags));
      vm.description = results[userResultIndex].description;
      vm.name = results[userResultIndex].name;
      vm.image = results[userResultIndex].image;
    }

    function init(){
      if(responses.getResponses().length === 0){
        $state.go('home');
      }
      else{
        results = resultsData.results;
        responseFlags = new Array(results.length);
        _.fill(responseFlags, 0);
        vm.isLoading = true;
        calculateResult();
        $timeout(function() {
          vm.isLoading = false;
        }, 1500);
      }
    }
    init();

  }
})();
