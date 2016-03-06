(function () {
	angular
			.module("growOpApp")
			.controller("HistoryCtrl",
						["$scope",
						 "localStorageService",
						 "plantGetDataSvc",
							HistoryCtrl]);
	
	function HistoryCtrl($scope, localStorageService, plantGetDataSvc){
		var vm = this;
    	
		var d = new Date();
		var hr = d.getHours();
		var min = d.getMinutes();
		var sec = d.getSeconds();
		var mSec = d.getMilliseconds();

		var MM = d.getMonth() + 1;
    	var DD = d.getDate();
    	var YYYY = d.getFullYear();

    	vm.titleName = hr + ":" + min + ":" + sec + ":" + mSec;
    	vm.currentDate = {
    		year: YYYY,
    		month: MM,
    		day: DD
    	};

    	/**---Variable declaration---**/
    	vm.currentWeek = "7";
    	vm.currentDay = 4;
		vm.plantWeekly = [];

		/**---Function declarations---**/
		vm.getWeekly = getWeekly;

		/**---Functions---**/
		function getWeekly(){
			plantGetDataSvc.getWeekArrayForAllPlants(vm.currentWeek).then(function(data){
				vm.plantWeekly = data;
				console.log("vm.plantWeekly: ", vm.plantWeekly);
				$scope.$apply();
			}).catch(function(error){
				alert(error);
			});
		}
		vm.getWeekly();

	}

}());