'use strict';

angular.module('main').controller('BookmarksController', ['$scope', '_', 'BookmarksService',
  function ($scope, _, BookmarksService) {

  $scope.files = [];

  $scope.selectedFile = null;

  // select file
  $scope.selectItem = function (file) {
    _.forEach($scope.files, function (item) {
      item.selected = false;
    });

    file.selected = !file.selected;

    $scope.selectedFile = file;
  };

  (function init() {
    BookmarksService.loadBookmarksList().then(function (list) {
      $scope.files = list;
    });
  })();

}]);
