'use strict';

angular.module('common').directive('actionButtons', ['$state', function ($state) {
  return {
    restrict: 'E',
    templateUrl: 'public/scripts/common/actionButtons/action-buttons.html',
    link: function (scope) {
      scope.navigateToFileList = function () {
        $state.go('home');
      };

      scope.navigateToBookmarks = function () {
        $state.go('bookmarks');
      };

      scope.navigateToUpload = function () {
        $state.go('upload');
      };

      scope.navigateToCreateNew = function () {
        $state.go('createNew');
      };
    }
  };
}]);