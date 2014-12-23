/**
 * Created by dua on 22.12.14.
 */
// modules

var commonModule = angular.module('common', []),
    mainModule = angular.module('main', ['common']);


var fileManager = angular.module('fileManager', [
  'ui.router',
  'ngAnimate',
  'main'
])
  .run(
  ['$rootScope', '$state', '$stateParams',
    function ($rootScope, $state, $stateParams) {
// It's very handy to add references to $state and $stateParams to the $rootScope
// so that you can access them from any scope within your applications.For example,
// <li ng-class="{ active: $state.includes('contacts.list') }"> will set the <li>
// to active whenever 'contacts.list' or one of its decendents is active.
      $rootScope.$state = $state;
      $rootScope.$stateParams = $stateParams;
    }
  ]
)
  .config(
  ['$stateProvider', '$urlRouterProvider',
    function ($stateProvider, $urlRouterProvider) {
      /////////////////////////////
      // Redirects and Otherwise //
      /////////////////////////////
      // Use $urlRouterProvider to configure any redirects (when) and invalid urls (otherwise).
      $urlRouterProvider
        // If the url is ever invalid, e.g. '/asdf', then redirect to '/' aka the home state
        .otherwise('/');
      //////////////////////////
      // State Configurations //
      //////////////////////////
      // Use $stateProvider to configure your states.
      $stateProvider
        //////////
        // Home //
        //////////
        .state("home", {
          // Use a url of "/" to set a states as the "index".
          url: "/",
          templateUrl: 'public/scripts/main/main.html'
        })

        .state("upload", {
          // Use a url of "/" to set a states as the "index".
          url: "/upload",
          templateUrl: 'public/scripts/upload/upload.html'
        })

        .state("editWebPage", {
          // Use a url of "/" to set a states as the "index".
          url: "/editpage",
          templateUrl: 'editWebPage/edit-web-page.html'
        })
        ///////////
        // About //
        ///////////
        .state('about', {
          url: '/about',
          // Showing off how you could return a promise from templateProvider
          templateProvider: ['$timeout',
            function ($timeout) {
              return $timeout(function () {
                return '<p class="lead">UI-Router Resources</p><ul>' +
                  '<li><a href="https://github.com/angular-ui/ui-router/tree/master/sample">Source for this Sample</a></li>' +
                  '<li><a href="https://github.com/angular-ui/ui-router">Github Main Page</a></li>' +
                  '<li><a href="https://github.com/angular-ui/ui-router#quick-start">Quick Start</a></li>' +
                  '<li><a href="https://github.com/angular-ui/ui-router/wiki">In-Depth Guide</a></li>' +
                  '<li><a href="https://github.com/angular-ui/ui-router/wiki/Quick-Reference">API Reference</a></li>' +
                  '</ul>';
              }, 100);
            }]
        });
    }
  ]
);
