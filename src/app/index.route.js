(function() {
  'use strict';

  angular
    .module('playquizzy')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/views/main/main.html',
        controller: 'MainController',
        controllerAs: 'main'
      })

      .state('question', {
        url: '/question/:id',
        templateUrl: 'app/views/question/question.html',
        controller: 'QuestionController',
        controllerAs: 'question'
      })
   
      .state('result', {
        url: '/result',
        templateUrl: 'app/views/result/result.html',
        controller: 'ResultController',
        controllerAs: 'result'
      })
      .state('product', {
        url: '/product',
        templateUrl: 'app/views/product/product.html',
        controller: 'ProductController',
        controllerAs: 'product'
      })

      ;

    $urlRouterProvider.otherwise('/');
  }

})();
