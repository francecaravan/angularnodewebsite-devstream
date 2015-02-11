angular.module('franceCaravan')
  .factory('loginFactoryPromise', ['$q', '$http',function ($q, $http) {
    return {
      getLoginPromise: function () {
        var deferred = $q.defer(),
          httpPromise = $http.get('http://localhost:8282/api/login');
 
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