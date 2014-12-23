'use strict';

angular.module('main').controller('MainController', ['$scope', 'FilesService', function ($scope, FilesService) {

  $scope.files = [];

  $scope.fileTypes = {
    'html': 'Web Page',
    'txt': 'TXT file',
    'png': 'PNG file'
  };

  $scope.selectedFileName = null;

  (function init() {
    FilesService.loadFileList().then(function (list) {
      $scope.files = list;
    });
  })();

}]);
