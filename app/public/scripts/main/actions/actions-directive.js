'use strict';

angular.module('main').directive('actions', function () {
  return {
    restrict: 'E',
    templateUrl: 'public/scripts/main/actions/actions.html',
    link: function(scope) {
      scope.downloadFile = function () {

      };

      scope.navigateToPreview = function () {

      };

      scope.saveToBookmarks = function () {

      };

      scope.navigateToEdit = function () {

      };
    }
  };
});