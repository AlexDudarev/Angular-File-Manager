'use strict';

angular.module('common').factory('FilesService', ['$q', 'StorageService', function ($q, StorageService) {

  // initially list of files empty
  var files = [
    {
      name: 'first.html',
      size: '50000'
    }, {
      name: 'second.txt',
      size: '40000'
    }

  ];

  // process response
  function processFiles(files) {
    files.forEach(function (file) {
      file.extension = file.name.substr(file.name.lastIndexOf('.') + 1,
                                        (file.name.length - file.name.lastIndexOf('.')));
    });
    return files;
  }

  /**
   * load list of files from local storage
   * @param{object} filter - filter for files collection
   * @param{boolean} reload - reload files from storage or use cache
   * @return $q promise
   */
  function loadFileList(filter, reload) {
    if (!files.length || reload) {
      return StorageService.loadFiles(filter).then(function (collection) {
        files = collection;
        return angular.copy(processFiles(files));
      });
    } else {
      return $q.when(processFiles(files));
    }
  }

  return {
    loadFileList: loadFileList
  };

}]);