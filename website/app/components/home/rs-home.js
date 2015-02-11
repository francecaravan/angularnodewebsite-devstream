angular.module("rsHome", []);

angular.module("rsHome").controller("HomeCtrl", ["$scope", "$location", "$http", "dealFactory","bookingFactory","$firebase", function ($scope, $location, $http, dealFactory, bookingFactory, $firebase) {

    $scope.highchartsNG = {
        options: {
            chart: {
                type: 'bar'
            }
        },
        series: [{
        	name: 'Temperature Values',
            data: [10, 15, 12, 20, 22]
        }],
                xAxis: {
            categories: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday']
        },
        yAxis: {
            title: {
                text: 'Celsius'
            }
        },
        title: {
            text: 'Temperature over last 5 days'
        },
        loading: false
    }

	$scope.init = function () {
				
	    $scope.home_status;
	    $scope.home_deals;
	    $scope.home_bookings;

    	getHomeDeals();
		
		function getHomeDeals() {
			dealFactory.getDeals()
				.success(function (home_deals) {
					$scope.home_deals = home_deals;
				})
				.error(function (error) {
					$scope.home_status = 'Unable to find deals: ' + error.message;
				});
		}

    	getHomeBookings();
		
		function getHomeBookings() {
			bookingFactory.getBookings()
				.success(function (home_bookings) {
					$scope.home_bookings = home_bookings;
				})
				.error(function (error) {
					$scope.status = 'Unable to find bookings: ' + error.message;
				});
		}

	};
	$scope.init();
	
	
		
}]);


