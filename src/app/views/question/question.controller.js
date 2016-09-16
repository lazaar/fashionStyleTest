(function() {
  'use strict';

  angular
    .module('playquizzy')
    .controller('QuestionController', QuestionController);

  /** @ngInject */
  function QuestionController($stateParams, $state, questionsData, responses) {
    var vm = this;
    function goToNext(response){
        if(responses.addResponse(vm.id, response)){
          if(vm.activeQuestion < vm.totalNumber){
            $state.go('question', {id:vm.activeQuestion});
          }
          else{
            $state.go('result');
          }
        }
        else{
          $state.go('home');
        }
    }
    function goToBack(){
      window.history.back();
    }
    function init(){
      vm.id = parseInt($stateParams.id);
      var question = _.result(questionsData,'questions['+vm.id+']',{});
      vm.totalNumber = questionsData.questions.length;
      if(_.isNaN(vm.id) || (vm.id != 0 && responses.getResponseByIndex(vm.id - 1) === undefined)){
        $state.go('home');
      }
      else{
        vm.activeQuestion = vm.id + 1;
        vm.activeResponse = responses.getResponseByIndex(vm.id);
        vm.goToNext = goToNext;
        vm.question = question.text;
        vm.responses = question.responses;
        vm.image = question.image;
        vm.goToBack= goToBack;
      }
    }
    init();

  }
})();
