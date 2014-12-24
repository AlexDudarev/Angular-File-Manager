'use strict';

angular.module('common').factory('NavigationService', ['$state', function ($state) {

  function navigateToFileList () {
    $state.go('home');
  }

  function navigateToBookmarks () {
    $state.go('bookmarks');
  }

  function navigateToUpload () {
    $state.go('upload');
  }

  function navigateToCreateNew () {
    $state.go('createNew');
  }

  return {
    navigateToFileList: navigateToFileList,
    navigateToBookmarks: navigateToBookmarks,
    navigateToUpload: navigateToUpload,
    navigateToCreateNew: navigateToCreateNew
  };

}]);