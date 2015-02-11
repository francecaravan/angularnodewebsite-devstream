angular.module("rsBlog", []);

angular.module("rsBlog").controller("BlogCtrl", ["$scope", "$location","blogFactoryPromise", function ($scope, $location,blogFactoryPromise) {

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

        $scope.changeView = function(view){
            $location.path(view); // path not hash
        }

		$scope.blogs = {};
		blogFactoryPromise.getBlogsPromise()
		.then(function (components) {
			$scope.blogs = components;
		}, function (error) {
			console.error(error);
		});

}]);