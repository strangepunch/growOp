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
						exception.message = "Please contact the help desk (and pray)! \n Message: " + exception.message;

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
							templateUrl: "app/log/dailyView.html",
							controller: "DailyViewCtrl",
							controllerAs: "vm"
						})

						//Main Button Navs
						.state("main", {
							url: "/main_menu",
							templateUrl: "app/main/mainView.html",
							controller: "MainViewCtrl",
							controllerAs: "vm"
						})

						//Daily Feeding View
						.state("daily", {
							url: "/daily",
							templateUrl: "app/log/dailyView.html",
							controller: "DailyViewCtrl",
							controllerAs: "vm"
						})

						//Plant Progress View
						.state("plant", {
							url: "/plants",
							templateUrl: "app/plants/plantView.html",
							controller: "PlantViewCtrl",
							controllerAs: "vm"
						})
						.state("plant.addPlant", {
							url: "/addPlant",
							templateUrl: "app/plants/plantAddView.html",
							controller: "PlantViewCtrl",
							controllerAs: "vm"
						})
						.state("plantDet", {
							url: "/plantsDetail",
							templateUrl: "app/plants/plantDetView.html",
							controller: "PlantDetViewCtrl",
							controllerAs: "vm",
							params: {plantName: ''}
						})

						//Weekly Schedule View
						.state("schedule", {
							url: "/schedule",
							templateUrl: "app/schedule/scheduleView.html",
							controller: "ScheduleCtrl",
							controllerAs: "vm"
						})

						//Grow History View
						.state("history", {
							url: "/history",
							templateUrl: "app/history/historyView.html",
							controller: "HistoryCtrl",
							controllerAs: "vm"
						})

				}]

	);

}());