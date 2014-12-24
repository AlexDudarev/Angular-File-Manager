'use strict';

angular.module('common').factory('BookmarksService', ['$q', 'StorageService', function ($q, StorageService) {

  // initially list of bookmarks empty
  var bookmarks = [];

  /**
   * load list of bookmarks from local storage
   * @param{object} filter - filter for bookmarks collection
   * @param{boolean} reload - reload bookmarks from storage or use cache
   * @return $q promise
   */
  function loadBookmarksList(filter, reload) {
    if (!bookmarks.length || reload) {
      return StorageService.loadItems(filter).then(function (collection) {
        bookmarks = collection;
        return angular.copy(bookmarks);
      });
    } else {
      return $q.when(bookmarks);
    }
  }

  /**
   * add file to bookmarks
   * @param{object} file - file to add
   */
  function addBookmark(file) {
    return loadBookmarksList().then(function (){
      bookmarks.push(angular.copy(file));
      StorageService.saveFiles(bookmarks, false);
    });

  }

  return {
    loadBookmarksList: loadBookmarksList,
    addBookmark: addBookmark
  };

}]);