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

	    vm.currentTimestamp = hr + ":" + min + ":" + sec + ":" + mSec;
	    vm.currentDate = YYYY + "/" + MM + "/" + DD;
		/**---local variables---**/
		vm.PlantName = $stateParams.plantName;
		vm.PlantID = $stateParams.plantID;

	    vm.imageURLArray = [];
	    vm.currentIndex = 0;
	    vm.imageURL = "";
	    vm.currentImage = vm.imageURLArray[0];

	    /**---function declarations---**/
	    vm.findWeeklySpecImages = findWeeklySpecImages;
	    //button function for parsing the images
	    vm.prevOne = prevOne;
		vm.nextOne = nextOne;

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

	    /**---initiate the function---**/
	    if(vm.PlantName == "All Plants"){
	    	vm.findWeeklySpecImages("0", null);
	    } else{
	    	vm.findWeeklySpecImages("0", vm.PlantID);
	    }
	    //vm.currentImage = vm.imageURLArray[5];
	}

}());