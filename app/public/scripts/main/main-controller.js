'use strict';

angular.module('main').controller('MainController', ['$scope', '_', 'FilesService',
  function ($scope, _, FilesService) {

    $scope.files = [];

    $scope.needActions = true;

    $scope.search = {
      filter: ''
    };

    $scope.orderByName = false;

    // select file
    $scope.selectItem = function (file) {
      _.forEach($scope.files, function (item) {
        item.selected = false;
      });

      file.selected = !file.selected;

      $scope.selectedFile = file;
    };

    (function init() {
      FilesService.loadFileList().then(function (list) {
        $scope.files = list;
      });
    })();

  }]);
