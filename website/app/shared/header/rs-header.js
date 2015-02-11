angular.module("rsHeader", []);

angular.module("rsHeader").controller("topHeaderCtrl", ["$scope", "$location","$firebase","loginService", function ($scope, $location,$firebase,loginService) {

	$scope.init = function () {

			// create an AngularFire reference to the data
			var ref = new Firebase("https://flickering-fire-8595.firebaseio.com/");
			
			// download the data into a local object
			var sync = $firebase(ref);
			
			// synchronize the object with a three-way data binding
			// click on `index.html` above to see it used in the DOM!
			var syncObject = sync.$asObject();
			syncObject.$bindTo($scope, "firebase_data");
		
	};
	$scope.init();

	//Call Login Service
	$scope.clickLogin = function () {
		loginService.login();
	}

	//Call Regsiter Service
	$scope.clickRegister = function () {
		loginService.register();
	}

	$scope.clickLogin2 = function () {
		loginService.login();
	}

}]);

