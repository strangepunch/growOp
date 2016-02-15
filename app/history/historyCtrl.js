(function () {
	angular
			.module("growOpApp")
			.controller("HistoryCtrl",
						["$scope",
						 "localStorageService",
							HistoryCtrl]);
	
	function HistoryCtrl($scope, localStorageService){
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

    	vm.currentImage = "or_week0_4.jpg";
    	vm.currentWeek = "0";
    	vm.currentIndex = 0;
		vm.feedSchedule = [
				{
					"week": "0",
					"url": "or_week0_4.jpg"
				},
				{
					"week": "0B",
					"url": "week0B_3.jpg"
				},
				{
					"week": "1",
					"url": "week1_4.jpg"
				},
				{
					"week": "2",
					"url": "week2_4.jpg"
				},
				{
					"week": "3",
					"url": "week2_6.jpg"
				},
				{
					"week": "4",
					"url": "Week4-css1.jpg"
				},
				{
					"week": "5",
					"url": "Week4-CSS2.jpg"
				},
				{
					"week": "6",
					"url": "fim_2.jpg"
				},
				{
					"week": "7",
					"url": "five_gal_bucket.jpg"
				},
				{	"week": "8",
					"url": "fim_1.jpg"
				},
				{	"week": "9",
					"url": "Week4-gsc1.jpg"
				},
				{
					"week": "10",
					"url": "Week4-JH1.jpg"
				},
				{
					"week": "11",
					"url": "Week4-orange-rooster1.jpg"
				},
				{
					"week": "12",
					"url": "Week4-JH2.jpg"
				},
				{
					"week": "13",
					"url": "Week4-orange-rooster2.jpg"
				},
				{
					"week": "14",
					"url": "fim_6.jpg"
				},

			];

/** photos **/
		vm.photos = [
				{
					"week": "0",
					"plant1url": "or_week0_4.jpg",
					"plant2url": "or_week0_4.jpg",
					"plant3url": "or_week0_4.jpg",
					"plant4url": "or_week0_4.jpg",
					"plant5url": "or_week0_4.jpg"

				},
				{
					"week": "0B",
					"plant1url": "week0B_3.jpg",
					"plant2url": "or_week0_4.jpg",
					"plant3url": "or_week0_4.jpg",
					"plant4url": "or_week0_4.jpg",
					"plant5url": "or_week0_4.jpg"
				},
				{
					"week": "1",
					"plant1url": "week1_4.jpg",
					"plant2url": "or_week0_4.jpg",
					"plant3url": "or_week0_4.jpg",
					"plant4url": "or_week0_4.jpg",
					"plant5url": "or_week0_4.jpg"

				},
				{
					"week": "2",
					"plant1url": "week2_4.jpg",
					"plant2url": "or_week0_4.jpg",
					"plant3url": "or_week0_4.jpg",
					"plant4url": "or_week0_4.jpg",
					"plant5url": "or_week0_4.jpg"
				},
				{
					"week": "3",
					"plant1url": "week2_6.jpg",
					"plant2url": "or_week0_4.jpg",
					"plant3url": "or_week0_4.jpg",
					"plant4url": "or_week0_4.jpg",
					"plant5url": "or_week0_4.jpg"
				},
				{
					"week": "4",
					"plant1url": "Week4-css1.jpg",
					"plant2url": "or_week0_4.jpg",
					"plant3url": "or_week0_4.jpg",
					"plant4url": "or_week0_4.jpg",
					"plant5url": "or_week0_4.jpg"
				},
				{
					"week": "5",
					"plant1url": "Week4-CSS2.jpg",
					"plant2url": "or_week0_4.jpg",
					"plant3url": "or_week0_4.jpg",
					"plant4url": "or_week0_4.jpg",
					"plant5url": "or_week0_4.jpg"
				},
				{
					"week": "6",
					"plant1url": "fim_2.jpg",
					"plant2url": "or_week0_4.jpg",
					"plant3url": "or_week0_4.jpg",
					"plant4url": "or_week0_4.jpg",
					"plant5url": "or_week0_4.jpg"
				},
				{
					"week": "7",
					"plant1url": "five_gal_bucket.jpg",
					"plant2url": "or_week0_4.jpg",
					"plant3url": "or_week0_4.jpg",
					"plant4url": "or_week0_4.jpg",
					"plant5url": "or_week0_4.jpg"
				},
				{	"week": "8",
					"plant1url": "fim_1.jpg",
					"plant2url": "or_week0_4.jpg",
					"plant3url": "or_week0_4.jpg",
					"plant4url": "or_week0_4.jpg",
					"plant5url": "or_week0_4.jpg"
				},
				{	"week": "9",
					"plant1url": "Week4-gsc1.jpg",
					"plant2url": "or_week0_4.jpg",
					"plant3url": "or_week0_4.jpg",
					"plant4url": "or_week0_4.jpg",
					"plant5url": "or_week0_4.jpg"
				},
				{
					"week": "10",
					"plant1url": "Week4-JH1.jpg",
					"plant2url": "or_week0_4.jpg",
					"plant3url": "or_week0_4.jpg",
					"plant4url": "or_week0_4.jpg",
					"plant5url": "or_week0_4.jpg"
				},
				{
					"week": "11",
					"plant1url": "Week4-orange-rooster1.jpg",
					"plant2url": "or_week0_4.jpg",
					"plant3url": "or_week0_4.jpg",
					"plant4url": "or_week0_4.jpg",
					"plant5url": "or_week0_4.jpg"
				},
				{
					"week": "12",
					"plant1url": "Week4-JH2.jpg",
					"plant2url": "or_week0_4.jpg",
					"plant3url": "or_week0_4.jpg",
					"plant4url": "or_week0_4.jpg",
					"plant5url": "or_week0_4.jpg"
				},
				{
					"week": "13",
					"plant1url": "Week4-orange-rooster2.jpg",
					"plant2url": "or_week0_4.jpg",
					"plant3url": "or_week0_4.jpg",
					"plant4url": "or_week0_4.jpg",
					"plant5url": "or_week0_4.jpg"
				},
				{
					"week": "14",
					"plant1url": "fim_6.jpg",
					"plant2url": "or_week0_4.jpg",
					"plant3url": "or_week0_4.jpg",
					"plant4url": "or_week0_4.jpg",
					"plant5url": "or_week0_4.jpg"
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
	    				vm.currentImage = vm.photos[vm.currentIndex].plant1url;
    					vm.currentWeek = vm.photos[vm.currentIndex].week;
	    			}else if( diff < 7*2){
	    				vm.currentIndex = 1;
	    				vm.currentImage = vm.photos[vm.currentIndex].plant1url;
    					vm.currentWeek = vm.photos[vm.currentIndex].week;
	    			}else if( diff < 7*3 ){
	    				vm.currentIndex = 2;
	    				vm.currentImage = vm.photos[vm.currentIndex].plant1url;
    					vm.currentWeek = vm.photos[vm.currentIndex].week;
	    			}else if( diff < 7*4){
	    				vm.currentIndex = 3;
	    				vm.currentImage = vm.photos[vm.currentIndex].plant1url;
    					vm.currentWeek = vm.photos[vm.currentIndex].week;
	    			}else if( diff < 31){
	    				vm.currentIndex = 4;
	    				vm.currentImage = vm.photos[vm.currentIndex].plant1url;
    					vm.currentWeek = vm.photos[vm.currentIndex].week;
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
	    			vm.currentIndex = vm.photos.length-1;
    				vm.currentImage = vm.photos[vm.currentIndex].plant1url;
					vm.currentWeek = vm.photos[vm.currentIndex].week;
	    		}else if(diff_month <= 1){
	    			console.log("next " + diff_month + " month!");
	    			if(vm.currentDate.day == vm.startDate.day){
	    				console.log("exactly 1 month~!");
	    				vm.currentIndex = 0;
    					vm.currentImage = vm.photos[vm.currentIndex].plant1url;
						vm.currentWeek = vm.photos[vm.currentIndex].week;
	    			}else if(vm.currentDate.day > vm.startDate.day){
	    				diff_day = vm.currentDate.day - vm.startDate.day;
		    			console.log(diff_day  + " days has past~!");
		    			vm.currentIndex = 4;
		    			if( diff_day < 7){
		    				console.log("<7");
		    				vm.currentIndex = vm.currentIndex + 0;
		    				vm.currentImage = vm.photos[vm.currentIndex].plant1url;
	    					vm.currentWeek = vm.photos[vm.currentIndex].week;
		    			}else if( diff_day < 7*2){
		    				console.log("7*2");
		    				vm.currentIndex = vm.currentIndex + 1;
		    				vm.currentImage = vm.photos[vm.currentIndex].plant1url;
	    					vm.currentWeek = vm.photos[vm.currentIndex].week;
		    			}else if( diff_day < 7*3 ){
		    				console.log("7*3");
		    				vm.currentIndex = vm.currentIndex + 2;
		    				vm.currentImage = vm.photos[vm.currentIndex].plant1url;
	    					vm.currentWeek = vm.photos[vm.currentIndex].week;
		    			}else if( diff_day < 7*4){
		    				console.log("7*4");
		    				vm.currentIndex = vm.currentIndex + 3;
		    				vm.currentImage = vm.photos[vm.currentIndex].plant1url;
	    					vm.currentWeek = vm.photos[vm.currentIndex].week;
		    			}else if( diff_day < 31){
		    				console.log("<31");
		    				vm.currentIndex = vm.currentIndex + 4;
		    				vm.currentImage = vm.photos[vm.currentIndex].plant1url;
	    					vm.currentWeek = vm.photos[vm.currentIndex].week;
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
		    				vm.currentImage = vm.photos[vm.currentIndex].plant1url;
	    					vm.currentWeek = vm.photos[vm.currentIndex].week;
		    			}else if( diff_day < 7*2){
		    				console.log("7*2");
		    				vm.currentIndex = vm.currentIndex + 3;
		    				vm.currentImage = vm.photos[vm.currentIndex].plant1url;
	    					vm.currentWeek = vm.photos[vm.currentIndex].week;
		    			}else if( diff_day < 7*3 ){
		    				console.log("7*3");
		    				vm.currentIndex = vm.currentIndex + 2;
		    				vm.currentImage = vm.photos[vm.currentIndex].plant1url;
	    					vm.currentWeek = vm.photos[vm.currentIndex].week;
		    			}else if( diff_day < 7*4){
		    				console.log("7*4");
		    				vm.currentIndex = vm.currentIndex + 1;
		    				vm.currentImage = vm.photos[vm.currentIndex].plant1url;
	    					vm.currentWeek = vm.photos[vm.currentIndex].week;
		    			}else if( diff_day < 31){
		    				console.log("<31");
		    				vm.currentIndex = vm.currentIndex + 0;
		    				vm.currentImage = vm.photos[vm.currentIndex].plant1url;
	    					vm.currentWeek = vm.photos[vm.currentIndex].week;
		    			}else{
		    				console.log("how many days is in this month?!!");
		    			}

	    			}
	    		}else if(diff_month <= 2){
	    			console.log("next " + diff_month + " month!");
	    			if(vm.currentDate.day == vm.startDate.day){
	    				console.log("exactly 2 month~!");
	    				vm.currentIndex = 4;
    					vm.currentImage = vm.photos[vm.currentIndex].plant1url;
						vm.currentWeek = vm.photos[vm.currentIndex].week;
	    			}else if(vm.currentDate.day > vm.startDate.day){
	    				diff_day = vm.currentDate.day - vm.startDate.day;
		    			console.log(diff_day  + " days has past~!");
		    			vm.currentIndex = 8;
		    			if( diff_day < 7){
		    				console.log("<7");
		    				vm.currentIndex = vm.currentIndex + 0;
		    				vm.currentImage = vm.photos[vm.currentIndex].plant1url;
	    					vm.currentWeek = vm.photos[vm.currentIndex].week;
		    			}else if( diff_day < 7*2){
		    				console.log("7*2");
		    				vm.currentIndex = vm.currentIndex + 1;
		    				vm.currentImage = vm.photos[vm.currentIndex].plant1url;
	    					vm.currentWeek = vm.photos[vm.currentIndex].week;
		    			}else if( diff_day < 7*3 ){
		    				console.log("7*3");
		    				vm.currentIndex = vm.currentIndex + 2;
		    				vm.currentImage = vm.photos[vm.currentIndex].plant1url;
	    					vm.currentWeek = vm.photos[vm.currentIndex].week;
		    			}else if( diff_day < 7*4){
		    				console.log("7*4");
		    				vm.currentIndex = vm.currentIndex + 3;
		    				vm.currentImage = vm.photos[vm.currentIndex].plant1url;
	    					vm.currentWeek = vm.photos[vm.currentIndex].week;
		    			}else if( diff_day < 31){
		    				console.log("<31");
		    				vm.currentIndex = vm.currentIndex + 4;
		    				vm.currentImage = vm.photos[vm.currentIndex].plant1url;
	    					vm.currentWeek = vm.photos[vm.currentIndex].week;
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
		    				vm.currentImage = vm.photos[vm.currentIndex].plant1url;
	    					vm.currentWeek = vm.photos[vm.currentIndex].week;
		    			}else if( diff_day < 7*2){
		    				console.log("7*2");
		    				vm.currentIndex = vm.currentIndex + 3;
		    				vm.currentImage = vm.photos[vm.currentIndex].plant1url;
	    					vm.currentWeek = vm.photos[vm.currentIndex].week;
		    			}else if( diff_day < 7*3 ){
		    				console.log("7*3");
		    				vm.currentIndex = vm.currentIndex + 2;
		    				vm.currentImage = vm.photos[vm.currentIndex].plant1url;
	    					vm.currentWeek = vm.photos[vm.currentIndex].week;
		    			}else if( diff_day < 7*4){
		    				console.log("7*4");
		    				vm.currentIndex = vm.currentIndex + 1;
		    				vm.currentImage = vm.photos[vm.currentIndex].plant1url;
	    					vm.currentWeek = vm.photos[vm.currentIndex].week;
		    			}else if( diff_day < 31){
		    				console.log("<31");
		    				vm.currentIndex = vm.currentIndex + 0;
		    				vm.currentImage = vm.photos[vm.currentIndex].plant1url;
	    					vm.currentWeek = vm.photos[vm.currentIndex].week;
		    			}else{
		    				console.log("how many days is in this month?!!");
		    			}

	    			}
	    		}else if(diff_month <= 3){
	    			console.log("next " + diff_month + " month!");
	    			if(vm.currentDate.day == vm.startDate.day){
	    				console.log("exactly 3 month~!");
	    				vm.currentIndex = 8;
    					vm.currentImage = vm.photos[vm.currentIndex].plant1url;
						vm.currentWeek = vm.photos[vm.currentIndex].week;
	    			}else if(vm.currentDate.day > vm.startDate.day){
	    				diff_day = vm.currentDate.day - vm.startDate.day;
		    			console.log(diff_day  + " days has past~!");
		    			vm.currentIndex = 12;
		    			if( diff_day < 7){
		    				console.log("<7");
		    				vm.currentIndex = vm.currentIndex + 0;
		    				vm.currentImage = vm.photos[vm.currentIndex].plant1url;
	    					vm.currentWeek = vm.photos[vm.currentIndex].week;
		    			}else if( diff_day < 7*2){
		    				console.log("7*2");
		    				vm.currentIndex = vm.currentIndex + 1;
		    				vm.currentImage = vm.photos[vm.currentIndex].plant1url;
	    					vm.currentWeek = vm.photos[vm.currentIndex].week;
		    			}else if( diff_day < 7*3 ){
		    				console.log("7*3");
		    				vm.currentIndex = vm.currentIndex + 2;
		    				vm.currentImage = vm.photos[vm.currentIndex].plant1url;
	    					vm.currentWeek = vm.photos[vm.currentIndex].week;
		    			}else if( diff_day < 7*4){
		    				console.log("7*4");
		    				vm.currentIndex = vm.currentIndex + 3;
		    				vm.currentImage = vm.photos[vm.currentIndex].plant1url;
	    					vm.currentWeek = vm.photos[vm.currentIndex].week;
		    			}else if( diff_day < 31){
		    				console.log("<31");
		    				vm.currentIndex = vm.currentIndex + 4;
		    				vm.currentImage = vm.photos[vm.currentIndex].plant1url;
	    					vm.currentWeek = vm.photos[vm.currentIndex].week;
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
		    				vm.currentImage = vm.photos[vm.currentIndex].plant1url;
	    					vm.currentWeek = vm.photos[vm.currentIndex].week;
		    			}else if( diff_day < 7*2){
		    				console.log("7*2");
		    				vm.currentIndex = vm.currentIndex + 3;
		    				vm.currentImage = vm.photos[vm.currentIndex].plant1url;
	    					vm.currentWeek = vm.photos[vm.currentIndex].week;
		    			}else if( diff_day < 7*3 ){
		    				console.log("7*3");
		    				vm.currentIndex = vm.currentIndex + 2;
		    				vm.currentImage = vm.photos[vm.currentIndex].plant1url;
	    					vm.currentWeek = vm.photos[vm.currentIndex].week;
		    			}else if( diff_day < 7*4){
		    				console.log("7*4");
		    				vm.currentIndex = vm.currentIndex + 1;
		    				vm.currentImage = vm.photos[vm.currentIndex].plant1url;
	    					vm.currentWeek = vm.photos[vm.currentIndex].week;
		    			}else if( diff_day < 31){
		    				console.log("<31");
		    				vm.currentIndex = vm.currentIndex + 0;
		    				vm.currentImage = vm.photos[vm.currentIndex].plant1url;
	    					vm.currentWeek = vm.photos[vm.currentIndex].week;
		    			}else{
		    				console.log("how many days is in this month?!!");
		    			}

	    			}
	    		}else if(diff_month <= 4){
	    			console.log("next " + diff_month + " month!");
	    			if(vm.currentDate.day == vm.startDate.day){
	    				console.log("you are at the end~!");
	    				vm.currentIndex = vm.photos.length-1;
    					vm.currentImage = vm.photos[vm.currentIndex].plant1url;
						vm.currentWeek = vm.photos[vm.currentIndex].week;
	    			}else if(vm.currentDate.day > vm.startDate.day){
	    				diff_day = vm.currentDate.day - vm.startDate.day;
	    				console.log("you went beyond the end by " + diff_day + " days!");
	    				vm.currentIndex = vm.photos.length-1;
    					vm.currentImage = vm.photos[vm.currentIndex].plant1url;
						vm.currentWeek = vm.photos[vm.currentIndex].week;
	    			}else{
	    				diff_day = vm.startDate.day - vm.currentDate.day;
	    				console.log("you still have " + diff_day + " days!");
	    				vm.currentIndex = 12;
	    				if( diff_day < 7){
	    					console.log("<7");
		    				vm.currentIndex = vm.currentIndex + 4;
		    				vm.currentImage = vm.photos[vm.currentIndex].plant1url;
	    					vm.currentWeek = vm.photos[vm.currentIndex].week;
		    			}else if( diff_day < 7*2){
		    				console.log("7*2");
		    				vm.currentIndex = vm.currentIndex + 3;
		    				vm.currentImage = vm.photos[vm.currentIndex].plant1url;
	    					vm.currentWeek = vm.feedSchedule[vm.currentIndex].week;
		    			}else if( diff_day < 7*3 ){
		    				console.log("7*3");
		    				vm.currentIndex = vm.currentIndex + 2;
		    				vm.currentImage = vm.feedSchedule[vm.currentIndex].plant1url;
	    					vm.currentWeek = vm.feedSchedule[vm.currentIndex].week;
		    			}else if( diff_day < 7*4){
		    				console.log("7*4");
		    				vm.currentIndex = vm.currentIndex + 1;
		    				vm.currentImage = vm.feedSchedule[vm.currentIndex].plant1url;
	    					vm.currentWeek = vm.feedSchedule[vm.currentIndex].week;
		    			}else if( diff_day < 31){
		    				console.log("<31");
		    				vm.currentIndex = vm.currentIndex + 0;
		    				vm.currentImage = vm.feedSchedule[vm.currentIndex].plant1url;
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
				vm.currentImage = vm.photos[i].plant1url;
				vm.currentWeek = vm.photos[i].week;
				vm.currentIndex = i;
			}else{
				i = 0;
				vm.currentImage = vm.photos[i].plant1url;
				vm.currentWeek = vm.photos[i].week;
				vm.currentIndex = i;
			}
			
		}

		function nextOne(){
			var i = vm.currentIndex;
			
			if(i < vm.photos.length-1){
				i++;
				vm.currentImage = vm.photos[i].plant1url;
				vm.currentWeek = vm.photos[i].week;
				vm.currentIndex = i;
			}else{
				i = vm.photos.length-1;
				vm.currentImage = vm.photos[i].plant1url;
				vm.currentWeek = vm.photos[i].week;
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