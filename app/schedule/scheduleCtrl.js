(function () {
	angular
			.module("growOpApp")
			.controller("ScheduleCtrl",
						["$scope",
						 "localStorageService",
						 "plantGetDataSvc",
							ScheduleCtrl]);
	
	function ScheduleCtrl($scope, localStorageService){
		var vm = this;
    	
		var d = new Date();
		var hr = d.getHours();
		var min = d.getMinutes();
		var sec = d.getSeconds();
		var mSec = d.getMilliseconds();

		var MM = d.getMonth() + 1;
    	var DD = d.getDate();
    	var YYYY = d.getFullYear();

    	var _MS_PER_DAY = 1000 * 60 * 60 * 24;

    	vm.titleName = hr + ":" + min + ":" + sec + ":" + mSec;
    	vm.currentDate = {
    		year: YYYY,
    		month: MM,
    		day: DD
    	};
    	
    	vm.input_day = null;
    	vm.input_month = null;
    	vm.input_year = 2016;

    	vm.startDate = {
    		year: 2016,
    		month: 1,
    		day: 15
    	};

    	vm.currentImage = "week0.png";
    	vm.currentWeek = "0";
    	vm.currentIndex = 0;
		vm.feedSchedule = [
				{
					"week": "0",
					"url": "week0.png"
				},
				{
					"week": "0B",
					"url": "week0B.png"
				},
				{
					"week": "1",
					"url": "week1.png"
				},
				{
					"week": "2",
					"url": "week2.png"
				},
				{
					"week": "3",
					"url": "week3.png"
				},
				{
					"week": "4",
					"url": "week4.png"
				},
				{
					"week": "5",
					"url": "week5.png"
				},
				{
					"week": "6",
					"url": "week6.png"
				},
				{
					"week": "7",
					"url": "week7.png"
				},
				{	"week": "8",
					"url": "week8.png"
				},
				{	"week": "9",
					"url": "week9.png"
				},
				{
					"week": "10",
					"url": "week10.png"
				},
				{
					"week": "11",
					"url": "week11.png"
				},
				{
					"week": "12",
					"url": "week12.png"
				},
				{
					"week": "13",
					"url": "week13.png"
				}

			];

		/*---other variables---*/
		vm.showEditStartDate = false;

		/*---function declarations---*/
		vm.prevOne = prevOne;
		vm.nextOne = nextOne;
		vm.findCurrentWeek = findCurrentWeek;
		vm.editStartDate = editStartDate;
		vm.changeStartDate = changeStartDate;

		//calculate the difference between to date objects
		vm.dateDiffInDays = dateDiffInDays;

		/*---function definition---*/

		//calculate the difference between to date objects
		//start day vs. current day
		function dateDiffInDays(start, current) {
		  // Discard the time and time-zone information.
		  var utc1 = Date.UTC(start.year, start.month, start.day);
		  var utc2 = Date.UTC(current.year, current.month, current.day);

		  return Math.floor((utc2 - utc1) / _MS_PER_DAY);
		}

		function findCurrentWeek(){
			vm.timePassed = dateDiffInDays(vm.startDate, vm.currentDate);
			//console.log("vm.timePassed: ", vm.timePassed);
			vm.currentWeek = Math.floor(vm.timePassed / 7);
			//console.log("vm.currentWeek: ", vm.currentWeek);

			vm.currentIndex = vm.currentWeek;
			vm.currentImage = vm.feedSchedule[vm.currentIndex].url
		}


		function prevOne(){
			var i = vm.currentIndex;
			if(i > 0){
				vm.currentImage = vm.feedSchedule[i].url;
				vm.currentWeek = vm.feedSchedule[i].week;
				i--;
				vm.currentIndex = i;
			}else{
				i = 0;
				vm.currentImage = vm.feedSchedule[i].url;
				vm.currentWeek = vm.feedSchedule[i].week;
				vm.currentIndex = i;
			}
			
		}

		//button functions
		function nextOne(){
			var i = vm.currentIndex;
			if(i < vm.feedSchedule.length-1){
				i++;
				vm.currentImage = vm.feedSchedule[i].url;
				vm.currentWeek = vm.feedSchedule[i].week;
				vm.currentIndex = i;
				console.log("vm.currentIndexE: ", vm.currentWeek);
			}else{
				i = vm.feedSchedule.length-1;
				vm.currentImage = vm.feedSchedule[i].url;
				vm.currentWeek = vm.feedSchedule[i].week;
				vm.currentIndex = i;
				console.log("vm.currentIndexF: ", vm.currentWeek);
			}
			
		}

		//form functions
		function editStartDate(){
			vm.showEditStartDate = !vm.showEditStartDate;
		}
		function changeStartDate(){
			vm.startDate.year = vm.input_year;
			vm.startDate.month = vm.input_month,
			vm.startDate.day = vm.input_day
			vm.findCurrentWeek();
			vm.showEditStartDate = false;
		}

		/**---RUN Functions---**/
		vm.findCurrentWeek();
	} 

}());