'use strict';

angular.module('common').directive('actionButtons', ['NavigationService', function (NavigationService) {
  return {
    restrict: 'E',
    templateUrl: 'public/scripts/common/actionButtons/action-buttons.html',
    link: function (scope) {
      scope.navigateToFileList = function () {
        NavigationService.navigateToFileList();
      };

      scope.navigateToBookmarks = function () {
        NavigationService.navigateToBookmarks();
      };

      scope.navigateToUpload = function () {
        NavigationService.navigateToUpload();
      };

      scope.navigateToCreateNew = function () {
        NavigationService.navigateToCreateNew();
      };
    }
  };
}]);