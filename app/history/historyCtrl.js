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

    	vm.startDate = {
    		year: 2016,
    		month: 1,
    		day: 15
    	};

    	var _MS_PER_DAY = 1000 * 60 * 60 * 24;

    	/**---Variable declaration---**/

    	vm.currentWeek = "7";
    	vm.currentDay = 4;
		vm.plantWeekly = [];
		vm.timePassed = 0;

		/**---Function declarations---**/

		//get current week's data array
		vm.getWeekly = getWeekly;
		//calculate the difference between to date objects
		vm.dateDiffInDays = dateDiffInDays;

		/**---Functions---**/

		//get current week's data array
		function getWeekly(){
			plantGetDataSvc.getWeekArrayForAllPlants(vm.currentWeek).then(function(data){
				vm.plantWeekly = data;
				console.log("vm.plantWeekly: ", vm.plantWeekly);
				$scope.$apply();
			}).catch(function(error){
				alert(error);
			});
		}

		//calculate the difference between to date objects
		//start day vs. current day
		function dateDiffInDays(start, current) {
		  // Discard the time and time-zone information.
		  var utc1 = Date.UTC(start.year, start.month, start.day);
		  var utc2 = Date.UTC(current.year, current.month, current.day);

		  return Math.floor((utc2 - utc1) / _MS_PER_DAY);
		}

		/**---RUN Functions---**/
		vm.timePassed = dateDiffInDays(vm.startDate, vm.currentDate);
		console.log("vm.timePassed: ", vm.timePassed);
		vm.currentWeek = Math.floor(vm.timePassed / 7);
		console.log("vm.currentWeek: ", vm.currentWeek);

		vm.getWeekly();

	}

}());