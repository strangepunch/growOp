(function () {
	angular
			.module("growOpApp")
			.controller("ScheduleCtrl",
						["$scope",
						 "localStorageService",
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

    	vm.titleName = hr + ":" + min + ":" + sec + ":" + mSec;
    	vm.currentDate = {
    		year: YYYY,
    		month: MM,
    		day: DD
    	};

    	// vm.currentDate = {
    	// 	year: 2016,
    	// 	month: 5,
    	// 	day: 28
    	// };
    	
    	vm.input_day = null;
    	vm.input_month = null;
    	vm.input_year = 2016;

    	vm.startDate = {
    		year: 2016,
    		month: 1,
    		day: 5
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
				},
				{
					"week": "14",
					"url": "week14.png"
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

		/*---function definition---*/
		function findCurrentWeek(){

			/*vm.currentDate = {
	    		year: YYYY,
	    		month: MM,
	    		day: DD
	    	}

	    	vm.startDate = {
	    		year: 2016,
	    		month: 1,
	    		day: 14,
	    	}*/

	    	if(vm.currentDate.month == vm.startDate.month){
	    		console.log("same month~!");
	    		if(vm.currentDate.day == vm.startDate.day){
	    			console.log("same day~!");
	    			vm.currentImage = "week0.jpg";
    				vm.currentWeek = "0";
    				vm.currentIndex = 0;

	    		}else if(vm.currentDate.day > vm.startDate.day){
	    			var diff = vm.currentDate.day - vm.startDate.day;
	    			console.log(diff  + " days has past~!");
	    			if( diff < 7){
	    				vm.currentIndex = 0;
	    				vm.currentImage = vm.feedSchedule[vm.currentIndex].url;
    					vm.currentWeek = vm.feedSchedule[vm.currentIndex].week;
	    			}else if( diff < 7*2){
	    				vm.currentIndex = 1;
	    				vm.currentImage = vm.feedSchedule[vm.currentIndex].url;
    					vm.currentWeek = vm.feedSchedule[vm.currentIndex].week;
	    			}else if( diff < 7*3 ){
	    				vm.currentIndex = 2;
	    				vm.currentImage = vm.feedSchedule[vm.currentIndex].url;
    					vm.currentWeek = vm.feedSchedule[vm.currentIndex].week;
	    			}else if( diff < 7*4){
	    				vm.currentIndex = 3;
	    				vm.currentImage = vm.feedSchedule[vm.currentIndex].url;
    					vm.currentWeek = vm.feedSchedule[vm.currentIndex].week;
	    			}else if( diff < 31){
	    				vm.currentIndex = 4;
	    				vm.currentImage = vm.feedSchedule[vm.currentIndex].url;
    					vm.currentWeek = vm.feedSchedule[vm.currentIndex].week;
	    			}else{
	    				console.log("how many days is in this month?!!");
	    			}
	    			console.log("vm.currentIndex: ", vm.currentIndex);
	    		}else{
	    			console.log("time traveling backwards?!");
	    		}

	    	}else if(vm.currentDate.month > vm.startDate.month){
	    		console.log("another month~!");
	    		var diff_month = vm.currentDate.month - vm.startDate.month;
	    		var diff_day = 0;
	    		console.log(diff_month  + " month has past~!");

	    		if(diff_month > 4){
	    			console.log("you went beyond the end~!");
	    			vm.currentIndex = vm.feedSchedule.length-1;
    				vm.currentImage = vm.feedSchedule[vm.currentIndex].url;
					vm.currentWeek = vm.feedSchedule[vm.currentIndex].week;
	    		}else if(diff_month <= 1){
	    			console.log("next " + diff_month + " month!");
	    			if(vm.currentDate.day == vm.startDate.day){
	    				console.log("exactly 1 month~!");
	    				vm.currentIndex = 0;
    					vm.currentImage = vm.feedSchedule[vm.currentIndex].url;
						vm.currentWeek = vm.feedSchedule[vm.currentIndex].week;
	    			}else if(vm.currentDate.day > vm.startDate.day){
	    				diff_day = vm.currentDate.day - vm.startDate.day;
		    			console.log(diff_day  + " days has past~!");
		    			vm.currentIndex = 4;
		    			if( diff_day < 7){
		    				console.log("<7");
		    				vm.currentIndex = vm.currentIndex + 0;
		    				vm.currentImage = vm.feedSchedule[vm.currentIndex].url;
	    					vm.currentWeek = vm.feedSchedule[vm.currentIndex].week;
		    			}else if( diff_day < 7*2){
		    				console.log("7*2");
		    				vm.currentIndex = vm.currentIndex + 1;
		    				vm.currentImage = vm.feedSchedule[vm.currentIndex].url;
	    					vm.currentWeek = vm.feedSchedule[vm.currentIndex].week;
		    			}else if( diff_day < 7*3 ){
		    				console.log("7*3");
		    				vm.currentIndex = vm.currentIndex + 2;
		    				vm.currentImage = vm.feedSchedule[vm.currentIndex].url;
	    					vm.currentWeek = vm.feedSchedule[vm.currentIndex].week;
		    			}else if( diff_day < 7*4){
		    				console.log("7*4");
		    				vm.currentIndex = vm.currentIndex + 3;
		    				vm.currentImage = vm.feedSchedule[vm.currentIndex].url;
	    					vm.currentWeek = vm.feedSchedule[vm.currentIndex].week;
		    			}else if( diff_day < 31){
		    				console.log("<31");
		    				vm.currentIndex = vm.currentIndex + 4;
		    				vm.currentImage = vm.feedSchedule[vm.currentIndex].url;
	    					vm.currentWeek = vm.feedSchedule[vm.currentIndex].week;
		    			}else{
		    				console.log("how many days is in this month?!!");
		    			}
		    			console.log("vm.currentIndex: ", vm.currentIndex);

	    			}else{
	    				diff_day = vm.startDate.day - vm.currentDate.day;
	    				console.log("you still have " + diff_day + " days!");
	    				vm.currentIndex = 0;
	    				if( diff_day < 7){
	    					console.log("<7");
		    				vm.currentIndex = vm.currentIndex + 4;
		    				vm.currentImage = vm.feedSchedule[vm.currentIndex].url;
	    					vm.currentWeek = vm.feedSchedule[vm.currentIndex].week;
		    			}else if( diff_day < 7*2){
		    				console.log("7*2");
		    				vm.currentIndex = vm.currentIndex + 3;
		    				vm.currentImage = vm.feedSchedule[vm.currentIndex].url;
	    					vm.currentWeek = vm.feedSchedule[vm.currentIndex].week;
		    			}else if( diff_day < 7*3 ){
		    				console.log("7*3");
		    				vm.currentIndex = vm.currentIndex + 2;
		    				vm.currentImage = vm.feedSchedule[vm.currentIndex].url;
	    					vm.currentWeek = vm.feedSchedule[vm.currentIndex].week;
		    			}else if( diff_day < 7*4){
		    				console.log("7*4");
		    				vm.currentIndex = vm.currentIndex + 1;
		    				vm.currentImage = vm.feedSchedule[vm.currentIndex].url;
	    					vm.currentWeek = vm.feedSchedule[vm.currentIndex].week;
		    			}else if( diff_day < 31){
		    				console.log("<31");
		    				vm.currentIndex = vm.currentIndex + 0;
		    				vm.currentImage = vm.feedSchedule[vm.currentIndex].url;
	    					vm.currentWeek = vm.feedSchedule[vm.currentIndex].week;
		    			}else{
		    				console.log("how many days is in this month?!!");
		    			}

	    			}
	    		}else if(diff_month <= 2){
	    			console.log("next " + diff_month + " month!");
	    			if(vm.currentDate.day == vm.startDate.day){
	    				console.log("exactly 2 month~!");
	    				vm.currentIndex = 4;
    					vm.currentImage = vm.feedSchedule[vm.currentIndex].url;
						vm.currentWeek = vm.feedSchedule[vm.currentIndex].week;
	    			}else if(vm.currentDate.day > vm.startDate.day){
	    				diff_day = vm.currentDate.day - vm.startDate.day;
		    			console.log(diff_day  + " days has past~!");
		    			vm.currentIndex = 8;
		    			if( diff_day < 7){
		    				console.log("<7");
		    				vm.currentIndex = vm.currentIndex + 0;
		    				vm.currentImage = vm.feedSchedule[vm.currentIndex].url;
	    					vm.currentWeek = vm.feedSchedule[vm.currentIndex].week;
		    			}else if( diff_day < 7*2){
		    				console.log("7*2");
		    				vm.currentIndex = vm.currentIndex + 1;
		    				vm.currentImage = vm.feedSchedule[vm.currentIndex].url;
	    					vm.currentWeek = vm.feedSchedule[vm.currentIndex].week;
		    			}else if( diff_day < 7*3 ){
		    				console.log("7*3");
		    				vm.currentIndex = vm.currentIndex + 2;
		    				vm.currentImage = vm.feedSchedule[vm.currentIndex].url;
	    					vm.currentWeek = vm.feedSchedule[vm.currentIndex].week;
		    			}else if( diff_day < 7*4){
		    				console.log("7*4");
		    				vm.currentIndex = vm.currentIndex + 3;
		    				vm.currentImage = vm.feedSchedule[vm.currentIndex].url;
	    					vm.currentWeek = vm.feedSchedule[vm.currentIndex].week;
		    			}else if( diff_day < 31){
		    				console.log("<31");
		    				vm.currentIndex = vm.currentIndex + 4;
		    				vm.currentImage = vm.feedSchedule[vm.currentIndex].url;
	    					vm.currentWeek = vm.feedSchedule[vm.currentIndex].week;
		    			}else{
		    				console.log("how many days is in this month?!!");
		    			}
		    			console.log("vm.currentIndex: ", vm.currentIndex);

	    			}else{
	    				diff_day = vm.startDate.day - vm.currentDate.day;
	    				console.log("you still have " + diff_day + " days!");
	    				vm.currentIndex = 4;
	    				if( diff_day < 7){
	    					console.log("<7");
		    				vm.currentIndex = vm.currentIndex + 4;
		    				vm.currentImage = vm.feedSchedule[vm.currentIndex].url;
	    					vm.currentWeek = vm.feedSchedule[vm.currentIndex].week;
		    			}else if( diff_day < 7*2){
		    				console.log("7*2");
		    				vm.currentIndex = vm.currentIndex + 3;
		    				vm.currentImage = vm.feedSchedule[vm.currentIndex].url;
	    					vm.currentWeek = vm.feedSchedule[vm.currentIndex].week;
		    			}else if( diff_day < 7*3 ){
		    				console.log("7*3");
		    				vm.currentIndex = vm.currentIndex + 2;
		    				vm.currentImage = vm.feedSchedule[vm.currentIndex].url;
	    					vm.currentWeek = vm.feedSchedule[vm.currentIndex].week;
		    			}else if( diff_day < 7*4){
		    				console.log("7*4");
		    				vm.currentIndex = vm.currentIndex + 1;
		    				vm.currentImage = vm.feedSchedule[vm.currentIndex].url;
	    					vm.currentWeek = vm.feedSchedule[vm.currentIndex].week;
		    			}else if( diff_day < 31){
		    				console.log("<31");
		    				vm.currentIndex = vm.currentIndex + 0;
		    				vm.currentImage = vm.feedSchedule[vm.currentIndex].url;
	    					vm.currentWeek = vm.feedSchedule[vm.currentIndex].week;
		    			}else{
		    				console.log("how many days is in this month?!!");
		    			}

	    			}
	    		}else if(diff_month <= 3){
	    			console.log("next " + diff_month + " month!");
	    			if(vm.currentDate.day == vm.startDate.day){
	    				console.log("exactly 3 month~!");
	    				vm.currentIndex = 8;
    					vm.currentImage = vm.feedSchedule[vm.currentIndex].url;
						vm.currentWeek = vm.feedSchedule[vm.currentIndex].week;
	    			}else if(vm.currentDate.day > vm.startDate.day){
	    				diff_day = vm.currentDate.day - vm.startDate.day;
		    			console.log(diff_day  + " days has past~!");
		    			vm.currentIndex = 12;
		    			if( diff_day < 7){
		    				console.log("<7");
		    				vm.currentIndex = vm.currentIndex + 0;
		    				vm.currentImage = vm.feedSchedule[vm.currentIndex].url;
	    					vm.currentWeek = vm.feedSchedule[vm.currentIndex].week;
		    			}else if( diff_day < 7*2){
		    				console.log("7*2");
		    				vm.currentIndex = vm.currentIndex + 1;
		    				vm.currentImage = vm.feedSchedule[vm.currentIndex].url;
	    					vm.currentWeek = vm.feedSchedule[vm.currentIndex].week;
		    			}else if( diff_day < 7*3 ){
		    				console.log("7*3");
		    				vm.currentIndex = vm.currentIndex + 2;
		    				vm.currentImage = vm.feedSchedule[vm.currentIndex].url;
	    					vm.currentWeek = vm.feedSchedule[vm.currentIndex].week;
		    			}else if( diff_day < 7*4){
		    				console.log("7*4");
		    				vm.currentIndex = vm.currentIndex + 3;
		    				vm.currentImage = vm.feedSchedule[vm.currentIndex].url;
	    					vm.currentWeek = vm.feedSchedule[vm.currentIndex].week;
		    			}else if( diff_day < 31){
		    				console.log("<31");
		    				vm.currentIndex = vm.currentIndex + 4;
		    				vm.currentImage = vm.feedSchedule[vm.currentIndex].url;
	    					vm.currentWeek = vm.feedSchedule[vm.currentIndex].week;
		    			}else{
		    				console.log("how many days is in this month?!!");
		    			}
		    			console.log("vm.currentIndex: ", vm.currentIndex);

	    			}else{
	    				diff_day = vm.startDate.day - vm.currentDate.day;
	    				console.log("you still have " + diff_day + " days!");
	    				vm.currentIndex = 8;
	    				if( diff_day < 7){
	    					console.log("<7");
		    				vm.currentIndex = vm.currentIndex + 4;
		    				vm.currentImage = vm.feedSchedule[vm.currentIndex].url;
	    					vm.currentWeek = vm.feedSchedule[vm.currentIndex].week;
		    			}else if( diff_day < 7*2){
		    				console.log("7*2");
		    				vm.currentIndex = vm.currentIndex + 3;
		    				vm.currentImage = vm.feedSchedule[vm.currentIndex].url;
	    					vm.currentWeek = vm.feedSchedule[vm.currentIndex].week;
		    			}else if( diff_day < 7*3 ){
		    				console.log("7*3");
		    				vm.currentIndex = vm.currentIndex + 2;
		    				vm.currentImage = vm.feedSchedule[vm.currentIndex].url;
	    					vm.currentWeek = vm.feedSchedule[vm.currentIndex].week;
		    			}else if( diff_day < 7*4){
		    				console.log("7*4");
		    				vm.currentIndex = vm.currentIndex + 1;
		    				vm.currentImage = vm.feedSchedule[vm.currentIndex].url;
	    					vm.currentWeek = vm.feedSchedule[vm.currentIndex].week;
		    			}else if( diff_day < 31){
		    				console.log("<31");
		    				vm.currentIndex = vm.currentIndex + 0;
		    				vm.currentImage = vm.feedSchedule[vm.currentIndex].url;
	    					vm.currentWeek = vm.feedSchedule[vm.currentIndex].week;
		    			}else{
		    				console.log("how many days is in this month?!!");
		    			}

	    			}
	    		}else if(diff_month <= 4){
	    			console.log("next " + diff_month + " month!");
	    			if(vm.currentDate.day == vm.startDate.day){
	    				console.log("you are at the end~!");
	    				vm.currentIndex = vm.feedSchedule.length-1;
    					vm.currentImage = vm.feedSchedule[vm.currentIndex].url;
						vm.currentWeek = vm.feedSchedule[vm.currentIndex].week;
	    			}else if(vm.currentDate.day > vm.startDate.day){
	    				diff_day = vm.currentDate.day - vm.startDate.day;
	    				console.log("you went beyond the end by " + diff_day + " days!");
	    				vm.currentIndex = vm.feedSchedule.length-1;
    					vm.currentImage = vm.feedSchedule[vm.currentIndex].url;
						vm.currentWeek = vm.feedSchedule[vm.currentIndex].week;
	    			}else{
	    				diff_day = vm.startDate.day - vm.currentDate.day;
	    				console.log("you still have " + diff_day + " days!");
	    				vm.currentIndex = 12;
	    				if( diff_day < 7){
	    					console.log("<7");
		    				vm.currentIndex = vm.currentIndex + 4;
		    				vm.currentImage = vm.feedSchedule[vm.currentIndex].url;
	    					vm.currentWeek = vm.feedSchedule[vm.currentIndex].week;
		    			}else if( diff_day < 7*2){
		    				console.log("7*2");
		    				vm.currentIndex = vm.currentIndex + 3;
		    				vm.currentImage = vm.feedSchedule[vm.currentIndex].url;
	    					vm.currentWeek = vm.feedSchedule[vm.currentIndex].week;
		    			}else if( diff_day < 7*3 ){
		    				console.log("7*3");
		    				vm.currentIndex = vm.currentIndex + 2;
		    				vm.currentImage = vm.feedSchedule[vm.currentIndex].url;
	    					vm.currentWeek = vm.feedSchedule[vm.currentIndex].week;
		    			}else if( diff_day < 7*4){
		    				console.log("7*4");
		    				vm.currentIndex = vm.currentIndex + 1;
		    				vm.currentImage = vm.feedSchedule[vm.currentIndex].url;
	    					vm.currentWeek = vm.feedSchedule[vm.currentIndex].week;
		    			}else if( diff_day < 31){
		    				console.log("<31");
		    				vm.currentIndex = vm.currentIndex + 0;
		    				vm.currentImage = vm.feedSchedule[vm.currentIndex].url;
	    					vm.currentWeek = vm.feedSchedule[vm.currentIndex].week;
		    			}else{
		    				console.log("how many days is in this month?!!");
		    			}
	    			}
	    		}else{
	    			console.log("huh!");
	    		}

	    	}else{
	    		console.log("which year are you in?!");
	    	}

		}

		vm.findCurrentWeek();

		function prevOne(){
			var i = vm.currentIndex;
			if(i > 0){
				i--;
				vm.currentImage = vm.feedSchedule[i].url;
				vm.currentWeek = vm.feedSchedule[i].week;
				vm.currentIndex = i;
			}else{
				i = 0;
				vm.currentImage = vm.feedSchedule[i].url;
				vm.currentWeek = vm.feedSchedule[i].week;
				vm.currentIndex = i;
			}
			
		}

		function nextOne(){
			var i = vm.currentIndex;
			
			if(i < vm.feedSchedule.length-1){
				i++;
				vm.currentImage = vm.feedSchedule[i].url;
				vm.currentWeek = vm.feedSchedule[i].week;
				vm.currentIndex = i;
			}else{
				i = vm.feedSchedule.length-1;
				vm.currentImage = vm.feedSchedule[i].url;
				vm.currentWeek = vm.feedSchedule[i].week;
				vm.currentIndex = i;
			}
			
		}

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

	}

}());