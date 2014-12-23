'use strict';

angular('common').factory('FilesService', ['$q', 'StorageService', function ($q, LocalStorageService) {

  // initially list of files empty
  var files = [];

  /**
   * load list of files from local storage
   * @param{object} filter - filter for files collection
   * @param{boolean} reload - reload files from storage or use cache
   * @return $q promise
   */
  function loadFileList(filter, reload) {
    if (!files.length || reload) {
      return LocalStorageService.loadFiles(filter).then(function (collection) {
        files = collection;
        return files;
      });
    } else {
      return $q.when(files);
    }
  }

  return {
    loadFileList: loadFileList
  };

}]);