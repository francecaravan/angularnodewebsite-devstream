// loginModal.js

angular.module("loginService", []);

angular.module('loginService').service('loginService', ["$modal", function ($modal) {

	alert ('In login service');

	var currentUser = "dummy_default";
	var	modal_result;

	this.updatecurrentuser = function (username) {
		currentUser = username;
		return currentUser;
	}

	this.verifyuser = function (username,password) {
		if (!username) {
			return 'notValidUser';
		}
		//lookup username & password
		//verifyResult = ();
		if (verifyResult) {
			return 'validUser';
		}
		else {
			return 'notValidUser';
		} 
	}	

	this.registeruser = function (username) {
		currentUser = username;
	}

	this.login = function () {
	
		var loginModalDefaults = {
		templateUrl: './app/components/login_modal/loginModalTemplate.html'
		}

		var loginModalOptions = {
		backdrop: 'static',
		keyboard: true,
		modalFade: true,
		closeButtonText: 'Cancel',
		actionButtonText: 'Login',
		titleText: 'Login',
		headerText: '',
		bodyText: '',
		templateUrl: './app/components/login_modal/loginModalTemplate.html'
		}	

		//modal_result = $modal.open(loginModalOptions).result;

    	var modalInstance = $modal.open({
	 	    controller: 'LoginModalInstanceCtrl',
			backdrop: 'static',
			keyboard: true,
			modalFade: true,
			templateUrl: './app/components/login_modal/loginModalTemplate.html'
	    });

    	modalInstance.result.then(function (selectedItem) {
      			alert(selectedItem + 'Hello');
    		}, function () {
      			alert('Modal dismissed at: ' + new Date());
    	});

	}

	this.register = function () {

		var registerModalDefaults = {
		templateUrl: './app/components/register_modal/registerModalTemplate.html'
		}

		var registerModalOptions = {
		backdrop: 'static',
		keyboard: true,
		modalFade: true,
		closeButtonText: 'Cancel',
		actionButtonText: 'Register',
		titleText: 'Register',
		headerText: '',
		bodyText: '',
		templateUrl: './app/components/register_modal/registerModalTemplate.html'
		}
	
		var modal_keypress;

			loginModalOptions.controller = function ($scope, $modalInstance) {
				$scope.modalOptions = registerModalOptions;
				$scope.modalOptions.ok = function (result) {			
					alert (result + 'know i am here1');
					alert (result.name1);
						$modalInstance.close('ok');
						
				};
				$scope.modalOptions.close = function (result) {
					$modalInstance.dismiss('cancel');
				};
			}

		modal_keypress = $modal.open(registerModalOptions).result;

    	alert('The result is when I am at end of function' + modal_keypress);	
    
    }	

}]);

//angular.module("rsHome", []);

//angular.module("rsHome").controller("HomeCtrl", ["$scope", "$location", "$http", "dealFactory","bookingFactory","$firebase", function ($scope, $location, $http, dealFactory, bookingFactory, $firebase) {


FranceApp.controller("LoginModalInstanceCtrl", ["$scope", "$modal", "loginFactoryPromise", function ($scope, $modal, loginFactoryPromise) {

			$scope.closeButtonText = 'Cancel';
			$scope.actionButtonText = 'Login',
			$scope.titleText = 'Login',
			$scope.headerText = '',
			$scope.bodyText = '',

			$scope.init =function () {
				function setFocusToTextBox(){
    				document.getElementById("emailID").focus();
				}
				//setFocusToTextBox();
			};

			$scope.init();

			$scope.ok = function (username,password) {			
				alert (username + 'know i am here1');
				alert (password + 'know i am here1');
				if (!username) {
					alert('Email ID required');
				}
				if (!password) {
					alert('Password required');
				}
				loginFactoryPromise.getLoginPromise(username,password)
					.then(function (components) {
						$modal.close('validUser');	
					}, function (error) {
						alert('Failed to Login');
						console.error(error);
				});
			};
			
			$scope.close = function (result) {
				$modal.dismiss('cancel');
			};
			
			$scope.display = function (username,password) {
				var display_result = username + ":" + password;
				alert(display_result);
			};
}]);