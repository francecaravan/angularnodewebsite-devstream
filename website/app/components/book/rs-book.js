angular.module("rsBook", []);

angular.module("rsBook").controller("BookCtrl", ["$scope","$modal", "$log","bookingFactory","modalService","bookingFactoryPromise", function ($scope, $modal, $log, bookingFactory, modalService, bookingFactoryPromise) {	  

	$scope.init = function () {

	    //List initialisation
	    $scope.greeting = [
      		{greetingtitle:'Mr'},
      		{greetingtitle:'Mrs'},
      		{greetingtitle:'Dr'}
    	];
    	$scope.myGreeting = $scope.greeting[0];

		// Date initialisation
    	var date = new Date();
    	$scope.minDatearr = date.setDate((new Date()).getDate());
    	$scope.minDatedep = date.setDate((new Date()).getDate() + 1);
    	$scope.maxDatearr = date.setDate((new Date()).getDate() + 364);
    	$scope.maxDatedep = date.setDate((new Date()).getDate() + 365);
    	$scope.dtarr = $scope.minDatearr;
    	$scope.dtdep = $scope.minDatedep;	


		//Initialise booking status
		$scope.max = 100;

  		$scope.random = function() {
    		var value = Math.floor((Math.random() * 100) + 1);
    		var type;

    		$scope.dynamic = value;
    		$scope.type = type;
  			};
  		$scope.random();

		};
	$scope.init();
		
}]);
