angular.module('franceCaravan')
  .factory('bookingFactoryPromise', ['$q', '$http',function ($q, $http) {
    return {
      getBookingsPromise: function () {
        var deferred = $q.defer(),
          httpPromise = $http.get('http://localhost:8282/api/booking');
 
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