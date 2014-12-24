'use strict';

angular.module('main').directive('actions',[ 'BookmarksService', function (BookmarksService) {
  return {
    restrict: 'E',
    templateUrl: 'public/scripts/main/actions/actions.html',
    link: function(scope) {

      scope.downloadFile = function () {

      };

      scope.navigateToPreview = function () {

      };

      scope.saveToBookmarks = function () {
        var file = angular.copy(scope.selectedFile);
        delete file.selected;
        BookmarksService.addBookmark(file).then(function () {

        });
      };

      scope.navigateToEdit = function () {

      };
    }
  };
}]);