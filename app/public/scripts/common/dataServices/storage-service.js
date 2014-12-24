'use strict';

angular.module('common').factory('StorageService', ['_', '$q', 'localStorageService',
  function(_, $q, localStorageService){

  var dataKey = 'files',
    bookmarksKey = 'bookmarks';

  /**
   * load list of items
   * @param{boolean} isLoadFiles - if true then load files else bookmarks
   * @return $q promise
   */
  function loadItems(isLoadFiles) {
    var files = JSON.parse(localStorageService.get(isLoadFiles ? dataKey : bookmarksKey));
    files = _.filter(files, function () {
      return true;
    });
    return $q.when(files);
  }

  /**
   * save list of items
   * @param{array} items - collection to save
   * @param{boolean} isSaveFiles - if true then save files else bookmarks
   * @return $q promise
   */
  function saveItems(items, isSaveFiles) {
    var data = JSON.parse(items);
    localStorageService.set(isSaveFiles ? dataKey : bookmarksKey, data);
    return $q.when(data);
  }

  return {
    loadItems: loadItems,
    saveFiles: saveItems
  };

}]);