angular.module('franceCaravan')
    .factory('dealFactory', ['$http', function($http) {

    var urlBase = 'http://localhost:8282/api/deals';
    var dealFactory = {};

    dealFactory.getDeals = function () {
        return $http.get(urlBase);
    };

    dealFactory.getDeal = function (id) {
        return $http.get(urlBase + '/' + id);
    };

    return dealFactory;
}]);