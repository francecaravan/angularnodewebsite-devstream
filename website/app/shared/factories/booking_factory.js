angular.module('franceCaravan')
    .factory('bookingFactory', ['$http', function($http) {

    var urlBase = 'http://localhost:8282/api/booking';
    var dataFactory = {};

    dataFactory.getBookings = function () {
        return $http.get(urlBase);
    };

    dataFactory.getBooking = function (id) {
        return $http.get(urlBase + '/' + id);
    };

    dataFactory.insertBooking = function (cust) {
        return $http.post(urlBase, cust);
    };

    dataFactory.updateBooking = function (cust) {
        return $http.put(urlBase + '/' + cust.ID, cust)
    };

    dataFactory.deleteBooking = function (id) {
        return $http.delete(urlBase + '/' + id);
    };

    return dataFactory;
}]);

FranceApp.factory('Post', function ($resource) {
  return $resource('https://flickering-fire-8595.firebaseio.com/name');
});