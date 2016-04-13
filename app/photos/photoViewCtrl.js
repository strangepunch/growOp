(function () {
	angular
			.module("growOpApp")
			.controller("PhotoViewCtrl",
						["$scope",
						 "$stateParams",
						 "localStorageService",
						 "plantPhotoSvc",
							PhotoViewCtrl]);
	
	function PhotoViewCtrl($scope, $stateParams, localStorageService, plantPhotoSvc){
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

	    vm.currentTimestamp = hr + ":" + min + ":" + sec + ":" + mSec;
	    //vm.currentDate = YYYY + "/" + MM + "/" + DD;
	    vm.startDate = {
    		year: 2016,
    		month: 1,
    		day: 12
    	};
	    vm.currentDate = {
    		year: YYYY,
    		month: MM,
    		day: DD
    	};

		/**---local variables---**/
		vm.PlantName = $stateParams.plantName;
		vm.PlantID = $stateParams.plantID;

	    vm.imageURLArray = [];
	    vm.currentIndex = 0;
	    vm.imageURL = "";
	    vm.currentImage = vm.imageURLArray[0];

	    vm.currentWeek = "0";
	    vm.weekList = ["0", "0B", "1", "2", "3", "4", "5", "6",
	    				"7", "8", "9", "10", "11", "12", "13", "14"];

	    vm.Show = false;
	    vm.Selected = "label-default";
	    vm.currentSelection = vm.currentWeek;

	    /**---function declarations---**/
	    vm.findWeeklySpecImages = findWeeklySpecImages;
	    vm.filterWeek = filterWeek;
	    vm.selectedFilter = selectedFilter;

	    //button function for parsing the images
	    vm.prevOne = prevOne;
		vm.nextOne = nextOne;
		vm.closeBTN = closeBTN;
		vm.openBTN = openBTN;

		//calculate the difference between to date objects
		vm.dateDiffInDays = dateDiffInDays;
		vm.findCurrentWeek = findCurrentWeek;

	    /**---function---**/
	    //possible filter actions
	    function findWeeklySpecImages(_weekNum, _plantNum){
	    	var plantArray = plantPhotoSvc.getWeeklyPlantPhoto(_weekNum);

	    	//find image for specific plant
	    	if(_plantNum != null && _plantNum != ""){

	    		for(var i=0; i<plantArray.length; i++){
	    			if(plantArray[i].plant == _plantNum){
	    				for(var x=0; x<plantArray[i].plantPic.length; x++){
	    					vm.imageURL = plantArray[i].plantPic[x];
	    					console.log("vm.imageURL ", vm.imageURL);
	    					vm.imageURLArray.push(vm.imageURL);
	    					vm.currentImage = vm.imageURLArray[0];
	    				}
	    			}
	    		}

	    	}else{ //when _plantNum  is null, get all plant's plantPic arrays

	    		for(var i=0; i<plantArray.length; i++){
    				for(var x=0; x<plantArray[i].plantPic.length; x++){
    					vm.imageURL = plantArray[i].plantPic[x];
    					vm.imageURLArray.push(vm.imageURL);
    					vm.currentImage = vm.imageURLArray[0];
    				}
	    		}

	    	}
	    }

	    //button function for parsing the images
	    function prevOne(){
			var i = vm.currentIndex;
			if(i > 0){
				i--;
				vm.currentImage = vm.imageURLArray[i];
				vm.currentIndex = i;
			}else{
				i = 0;
				vm.currentImage = vm.imageURLArray[i];
				vm.currentIndex = i;
			}
			
		}
		function nextOne(){
			var i = vm.currentIndex;
			
			if(i < vm.imageURLArray.length-1){
				i++;
				vm.currentImage = vm.imageURLArray[i];
				vm.currentIndex = i;
			}else{
				i = vm.imageURLArray.length-1;
				vm.currentImage = vm.imageURLArray[i];
				vm.currentIndex = i;
			}
			
		}

		//For "See More" week panel buttons
		//filter
	    function filterWeek(week){
	    	vm.currentSelection = week;
	    	vm.imageURLArray = [];
	    	vm.findWeeklySpecImages(week, vm.PlantID);
	    }
	    //open & close button
		function closeBTN(){
			vm.Show = false;
		}
		function openBTN(){
			vm.Show = true;
		}
		function selectedFilter(week){
			if(week == vm.currentSelection){
				return vm.Selected;
			} else{
				return "";
			}
		}

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
			vm.currentWeek = Math.floor(vm.timePassed / 7);
			vm.currentSelection = vm.currentWeek;
		}

	    /**---initiate the function---**/
	    vm.findCurrentWeek();
	    if(vm.PlantName == "All Plants"){
	    	vm.findWeeklySpecImages(vm.currentWeek, null);
	    } else{
	    	vm.findWeeklySpecImages(vm.currentWeek, vm.PlantID);
	    }
	    
	}

}());