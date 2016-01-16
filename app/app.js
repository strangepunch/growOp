(function () {
	"use strict";
	var app = angular.module("growOpApp",
							["common.services",
							 "ui.router",
							 "ui.mask",
							 "ui.bootstrap",
							 "ui.unique",
							 "LocalStorageModule",
							 "productResourceMock"]);
	//error handling
	app.config(function($provide){
		$provide.decorator("$exceptionHandler",
			["$delegate",
				function ($delegate) {
					return function (exception, cause) {
						exception.message = "Please contact the help desk! \n Message: " + exception.message;

						$delegate(exception, cause);
						alert(exception.message);
					};
				}]);
	});

	app.config(["$stateProvider", "$urlRouterProvider",
				
				function ($stateProvider, $urlRouterProvider) {
					
					//default route provider
					$urlRouterProvider.when("/", "/daily");
					$urlRouterProvider.otherwise("/");

					$stateProvider
						//Entry View
						.state("/", {
							url: "/",
							templateUrl: "app/views/dailyView.html",
							controller: "DailyViewCtrl",
							controllerAs: "vm"
						})

						//Main Button Navs
						.state("main", {
							url: "/main_menu",
							templateUrl: "app/views/mainView.html",
							controller: "MainViewCtrl",
							controllerAs: "vm"
						})

						//Daily Feeding View
						.state("daily", {
							url: "/daily",
							templateUrl: "app/views/dailyView.html",
							controller: "DailyViewCtrl",
							controllerAs: "vm"
						})

						//Plant Progress View
						.state("plant", {
							url: "/plants",
							templateUrl: "app/views/plantView.html",
							controller: "PlantViewCtrl",
							controllerAs: "vm"
						})

						//Weekly Schedule View
						.state("schedule", {
							url: "/schedule",
							templateUrl: "app/views/scheduleView.html",
							controller: "ScheduleCtrl",
							controllerAs: "vm"
						})

				}]

	);

}());