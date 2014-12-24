'use strict';

angular.module('main').controller('MainController', ['$scope', '_', 'FilesService',
  function ($scope, _, FilesService) {

    $scope.files = [];

    $scope.needActions = true;

    $scope.search = {
      filter: ''
    };

    $scope.orderByName = false;

    //*********** HELPERS ***********

    //clear selection of files
    function clearFilesSelection (){
      _.forEach($scope.files, function (item) {
        item.selected = false;
      });
    }
    //*******************************

    // select file
    $scope.selectItem = function (file) {
      var selectedValue = file.selected;
      clearFilesSelection();

      file.selected = !selectedValue;

      $scope.selectedFile = file;
    };

    // clear selection when click outside the table
    $scope.clearSelection = function () {
      clearFilesSelection();
      $scope.$apply();
    };

    (function init() {
      FilesService.loadFileList().then(function (list) {
        $scope.files = list;
      });
    })();

  }]);
