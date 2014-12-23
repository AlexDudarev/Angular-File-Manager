'use strict';
// modules
angular.module('common', ['ui.router', 'LocalStorageModule', 'lodash']);
angular.module('main', ['common']);
angular.module('lodash', []);

angular.module('fileManager', [
  'ui.router',
  'LocalStorageModule',
  'ngAnimate',
  'main'
])
  .run(
  ['$rootScope', '$state', '$stateParams',
    function ($rootScope, $state, $stateParams) {
      $rootScope.$state = $state;
      $rootScope.$stateParams = $stateParams;
    }
  ]
)
  .config(
  ['$stateProvider', '$urlRouterProvider',
    function ($stateProvider, $urlRouterProvider) {

      $urlRouterProvider
        .otherwise('/');

      $stateProvider

        .state('home', {
          // Use a url of "/" to set a states as the "index".
          url: '/',
          templateUrl: 'public/scripts/main/main.html'
        })

        .state('upload', {
          // Use a url of "/" to set a states as the "index".
          url: '/upload',
          templateUrl: 'public/scripts/upload/upload.html'
        })

        .state('editWebPage', {
          // Use a url of "/" to set a states as the "index".
          url: '/editpage',
          templateUrl: 'editWebPage/edit-web-page.html'
        });
    }
  ]
);
