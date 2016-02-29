(function () {
	angular
			.module("growOpApp")
			.controller("PhotoViewCtrl",
						["$scope",
						 "localStorageService",
						 "plantPhotoSvc",
							PhotoViewCtrl]);
	
	function PhotoViewCtrl($scope, localStorageService, plantPhotoSvc){
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
    	vm.someFilterItems = [
		     {name: 'Plant 1', checked: false},
		     {name: 'Plant 2', checked: false},
		     {name: 'Plant 3', checked: false},
		     {name: 'Plant 4', checked: false},
		     {name: 'Plant 5', checked: false},
		     {name: 'Seedling', checked: false},
		     {name: 'FIM', checked: false},
		     {name: 'Flower', checked: false},
		     {name: 'Misc', checked: false}
	    ];
	    vm.checkedSelec = false;
	    vm.imageURLArray = [];
	    vm.currentIndex = 0;
	    vm.imageURL = "";
	    vm.currentImage = vm.imageURLArray[0];

	    /**---function declarations---**/
	    //for checkbox filter
	    vm.checkedItem = checkedItem;
	    vm.findCheckedItem = findCheckedItem;
	    vm.removeCheckedItem = removeCheckedItem;
	    //button function for parsing the images
	    vm.prevOne = prevOne;
		vm.nextOne = nextOne;

	    //filter images actions
	    //--checked
	    vm.findWeeklySpecImages = findWeeklySpecImages;
	    //--unchecked
	    vm.removeWeeklySpecImages = removeWeeklySpecImages;

	    /**---function---**/
	    //for checkbox filter
	    vm.count = 0;
	    function checkedItem(item){
	    	//console.log(item);
	      	var getIndexNum = vm.someFilterItems.indexOf(item);
	      	//console.log(getIndexNum);
	      	if(vm.count < 1){
	      		vm.someFilterItems[getIndexNum].checked = true; 
	      		vm.findCheckedItem(vm.someFilterItems[getIndexNum].name);
	      		vm.count++;
	      	}else{
	      		if(vm.someFilterItems[getIndexNum].checked == true){
	      			vm.someFilterItems[getIndexNum].checked = true; 
	      			vm.findCheckedItem(vm.someFilterItems[getIndexNum].name);
		      		vm.count = 0;
		      	}else{
		      		vm.someFilterItems[getIndexNum].checked = false;
		      		vm.removeCheckedItem(vm.someFilterItems[getIndexNum].name);
		      		vm.count++;
		      	}
	      	}
	      	
	    };
	    //whatever selected gets pushed in to the array
	    function findCheckedItem(name){
	    	switch(name){
	    		case 'Plant 1':
	    			vm.findWeeklySpecImages('0', 1);
	    			break;
	    		case 'Plant 2':
	    			vm.findWeeklySpecImages('0', 2);
	    			break;
	    		case 'Plant 3':
	    			vm.findWeeklySpecImages('0', 3);
	    			break;
	    		case 'Plant 4':
	    			vm.findWeeklySpecImages('0', 4);
	    			break;
	    		case 'Plant 5':
	    			vm.findWeeklySpecImages('0', 5);
	    			break;
	    		case 'Seedling':
	    			break;
	    		case 'FIM':
	    			break;
	    		case 'Flower':
	    			break;
	    		default:
	    			break;

	    	}
	    };
	    //whatever unselected gets removed from the array
	    function removeCheckedItem(name){
	    	switch(name){
	    		case 'Plant 1':
	    			vm.removeWeeklySpecImages('0', 1);
	    			break;
	    		case 'Plant 2':
	    			vm.removeWeeklySpecImages('0', 2);
	    			break;
	    		case 'Plant 3':
	    			vm.removeWeeklySpecImages('0', 3);
	    			break;
	    		case 'Plant 4':
	    			vm.removeWeeklySpecImages('0', 4);
	    			break;
	    		case 'Plant 5':
	    			vm.removeWeeklySpecImages('0', 5);
	    			break;
	    		case 'Seedling':
	    			break;
	    		case 'FIM':
	    			break;
	    		case 'Flower':
	    			break;
	    		default:
	    			break;

	    	}
	    };


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

	    function removeWeeklySpecImages(_weekNum, _plantNum){
	    	var plantArray = plantPhotoSvc.getWeeklyPlantPhoto(_weekNum);
	    	//compare with each item in vm.imageURLArray
	    	//remove matches
	    	vm.currentImage = vm.imageURLArray[0];
	    	vm.imageURLArray = [];
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
	    vm.findWeeklySpecImages("0B");
	    vm.currentImage = vm.imageURLArray[5];
	}

}());