'use strict';

angular.module('common').factory('StorageService', ['_', '$q', 'LocalStorageService', function(_, $q, LocalStorageService){

  var dataKey = 'files';

  /**
   * load list of files
   * @return $q promise
   */
  function loadFiles() {
    var files = JSON.parse(LocalStorageService.get(dataKey));
    files = _.filter(files, function () {
      return true;
    });
    return $q.when(files);
  }

  return {
    loadFiles: loadFiles
  };

}]);