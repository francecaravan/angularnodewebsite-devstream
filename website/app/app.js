var FranceApp = angular.module("franceCaravan", [
  //External Objects
  "ngAnimate",
  "ngTouch",
  "ui.router",
  "ui.bootstrap",
  "ngMaterial",
  "highcharts-ng",
  "firebase",
  //Controllers
  "rsHome",
  "rsCaravan",
  "rsNav",
  "rsBook",
  "rsBlog",
  "rsExistingBooking",
  "rsHeader",
  //Services
  "loginService"
]);

FranceApp.config(function ($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/home');
    
    $stateProvider        
        .state('home', {
            url: '/home',
            templateUrl: 'app/components/home/home-view.html',
            data: {
        		requireLogin: false
      			}
        })
        .state('caravan', {
            url: '/caravan',
            templateUrl: 'app/components/caravan/caravan-view.html',
            data: {
        		requireLogin: false
      			}
        })
        .state('book', {
            url: '/book',
            templateUrl: 'app/components/book/book-view.html',
            data: {
        		requireLogin: false
      			}
        })
        .state('existingbooking', {
            url: '/existingbooking',
            templateUrl: 'app/components/existingbooking/existingbooking-view.html',
            data: {
        		requireLogin: false
      			}
        })
        .state('blog', {
            url: '/blog',
            templateUrl: 'app/components/blog/blog-view.html',
            data: {
        		requireLogin: false
      			}
        });

});

FranceApp.run(function ($rootScope, $state) {

  $rootScope.$on('$stateChangeStart', function (event, toState, toParams) {
    var requireLogin = toState.data.requireLogin;

    if (requireLogin && typeof $rootScope.currentUser === 'undefined') {
      event.preventDefault();

	  loginService.login();
      //loginModal()
      // .then(function () {
      //    return $state.go(toState.name, toParams);
      //  })
      //  .catch(function () {
      //    return $state.go('welcome');
      //  });
    }
  });

});