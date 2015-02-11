angular.module("rsNav", []);

angular.module("rsNav").controller("NavCtrl", ["$scope", "$location",	 function ($scope, $location) {

$scope.init = function () {
    $scope.links = [
        {
          url: "caravan",
          text: "Caravan",
          imageUrl: ""
        },
        {
          url: "book",
          text: "New Booking",
          imageUrl: ""

        },
        {
          url: "existingbooking",
          text: "Current Bookings",
          imageUrl: ""
        },
        {
          url: "blog",
          text: "Blog",
          imageUrl: ""
        },
        {
          url: "feedback",
          text: "Feedback",
          imageUrl: ""
        },
        {
          url: "login",
          text: "Login",
          imageUrl: ""
        }
    ];

};
$scope.init();

$scope.isActive = function (viewLocation) {
	var isActive = $location.path().indexOf (viewLocation.substr(1)) > -1;
	return isActive;
}



}]);