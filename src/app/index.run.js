(function() {
  'use strict';

  angular
    .module('playquizzy')
    .run(runBlock);

  /** @ngInject */
  function runBlock($rootScope, $window, sAuth) {

		$rootScope.user = {};

		$window.fbAsyncInit = function() {
			// Executed when the SDK is loaded

			FB.init({
			  appId: '1588207604818429',
			  status: true,
			  cookie: true,
			  xfbml: true
			});

			sAuth.watchLoginChange();

		};

	  (function(d){
	    // load the Facebook javascript SDK

	    var js,
	    id = 'facebook-jssdk',
	    ref = d.getElementsByTagName('script')[0];

	    if (d.getElementById(id)) {
	      return;
	    }

	    js = d.createElement('script');
	    js.id = id;
	    js.async = true;
	    js.src = "//connect.facebook.net/en_US/all.js";

	    ref.parentNode.insertBefore(js, ref);

	  }(document));
  }

})();
