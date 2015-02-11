angular.module("rsExistingBooking", []);

angular.module("rsExistingBooking").controller("ExistingBookCtrl", ["$scope","$modal", "$log","bookingFactory","modalService","bookingFactoryPromise", function ($scope, $modal, $log, bookingFactory, modalService, bookingFactoryPromise) {	  


	$scope.init = function () {

		$scope.book_bookings;

	};
	$scope.init();
	
	$scope.retrievecustomer = function () {
	
		var retrieveModalDefaults = {
		templateUrl: './app/components/retrieve_modal/modalRetrieveBooking.html'
		}

		var retrieveModalOptions = {
		closeButtonText: 'Cancel',
		actionButtonText: 'Retrieve',
		titleText: 'Retrieve Booking',
		headerText: '',
		bodyText: '',
		templateUrl: './app/components/retrieve_modal/modalRetrieveBooking.html'
		}
	
    	modalService.showModal(retrieveModalDefaults, retrieveModalOptions).then(function (result) {
	    	alert(result);
    		alert("In Retrieve Modal");
    	

    		if (!result) {
					$scope.book_bookings = {};
					bookingFactoryPromise.getBookingsPromise()
  					.then(function (components) {
    					$scope.book_bookings = components;
  					}, function (error) {
    					console.error(error);
  					});
			}
		});

	}
		
}]);
