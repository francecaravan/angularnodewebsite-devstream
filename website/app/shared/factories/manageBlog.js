angular.module('franceCaravan')
  .factory('blogFactoryPromise', ['$q', '$http',function ($q, $http) {
    return {
      getBlogsPromise: function () {
        var deferred = $q.defer(),
          httpPromise = $http.get('http://localhost:8282/api/blog');
 
        httpPromise.success(function (components) {
          deferred.resolve(components);
        })
          .error(function (error) {
            console.error('Error: ' + error);
          });
 
        return deferred.promise;
      }
    };
  }]);