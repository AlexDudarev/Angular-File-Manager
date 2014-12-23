'use strict';

angular.module('common').factory('StorageService', ['_', '$q', 'localStorageService',
  function(_, $q, localStorageService){

  var dataKey = 'files';

  /**
   * load list of files
   * @return $q promise
   */
  function loadFiles() {
    var files = JSON.parse(localStorageServiceProvider.get(dataKey));
    files = _.filter(files, function () {
      return true;
    });
    return $q.when(files);
  }

  /**
   * save list of files
   * @return $q promise
   */
  function saveFiles(files) {
    var data = JSON.parse(files);
    localStorageServiceProvider.set(dataKey, data);
    return $q.when(data);
  }

  return {
    loadFiles: loadFiles,
    saveFiles: saveFiles
  };

}]);