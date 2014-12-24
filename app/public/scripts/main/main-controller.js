'use strict';

angular.module('main').controller('MainController', ['$scope', '_', 'FilesService',
  function ($scope, _, FilesService) {

    $scope.files = [];

    $scope.needActions = true;

    $scope.search = {
      filter: '',
      regExp: new RegExp('')
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

    $scope.filterByName = function (item) {
      return $scope.search.regExp.test(item.name);
    };

    $scope.createRegex = function () {
      var text = $scope.search.filter.replace('.','\.');
      $scope.search.regExp = new RegExp(text.replace('*', '(.*)'));
    };

    (function init() {
      FilesService.loadFileList().then(function (list) {
        $scope.files = list;
      });
    })();

  }]);
