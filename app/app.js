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
					$urlRouterProvider.when("/", "/daily_plantList");
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
							abstract: true,
							url: "/daily",
							templateUrl: "app/views/dailyView.html",
							controller: "DailyViewCtrl",
							controllerAs: "vm"
						})
						.state('daily.plants', {
							url: "_plantList",
					        templateUrl: 'app/views/dailyPlantsView.html',
					        controller: "DailyViewCtrl",
							controllerAs: "vm"
					    })
					    .state('daily.details', {
							url: "_details",
					        templateUrl: 'app/views/dailyDetailView.html',
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
						.state("plant.details", {
							url: "_details",
							templateUrl: "app/views/plantDetailView.html",
							controller: "PlantViewCtrl",
							controllerAs: "vm"
						})

						//Plant Progress View
						.state("overview", {
							url: "/overview",
							templateUrl: "app/views/overView.html",
							controller: "OverViewCtrl",
							controllerAs: "vm"
						})

				}]

	);

}());