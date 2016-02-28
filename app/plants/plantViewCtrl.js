(function () {
	angular
			.module("growOpApp")
			.controller("PlantViewCtrl",
						["$scope",
						 "localStorageService",
						 "plantDetSvc",
							PlantViewCtrl]);
	
	function PlantViewCtrl($scope, localStorageService, plantDetSvc){
		var vm = this;
		/**---time variables--**/
    	//time
		var d = new Date();
		var hr = d.getHours();
		var min = d.getMinutes();
		var sec = d.getSeconds();
		var mSec = d.getMilliseconds();

    	vm.CurrentTime = hr + ":" + min + ":" + sec + ":" + mSec;

    	//date
    	var _MM = d.getMonth() + 1;
    	var _DD = d.getDate();
    	var _YYYY = d.getFullYear();

    	/**---local variables---**/
    	
    	//set up a place to store the plant objects 
    	vm.currentPlantsList = [];
    	
    	// temp storage for field placeholder text - placeholders 
    	vm.placeholders = {
		    plantName: "Enter name of this plant...",
		    plantCompany: "Enter company that sold this plant..."
	    };

	    //plant status variable
	    vm.plantStatusData = {
	    	plantName: null,
	    	plantHealth: "good" //insert function to get actual plant stage here
	    };

    	//input variables
    	vm.inputData = {
			plantName: null,
			plantCompany: null,
			plantDate: {year: _YYYY, month: _MM, day: _DD},
			plantStage: "Seedling"
	    };
	    
	    //btn variables
	    vm.addButtonStyle = "btn-primary";

	    /**---function declarations---**/
	    //get plant array
	    vm.getFullPlantsArray = getFullPlantsArray;
	    //add plant button
	    vm.addPlantBTN = addPlantBTN;
	    //clear plant inputs
	    vm.clearFieldsBTN = clearFieldsBTN;
	    //remove plant
	    vm.deletePlantBTN = deletePlantBTN;

	    /**---function---**/
	    //get plant array
	    function getFullPlantsArray(){
	    	vm.currentPlantsList.splice(0,vm.currentPlantsList.length);
	    	for(var obj in plantDetSvc.returnPlantArray()){
	    	 	vm.currentPlantsList.splice(obj,vm.currentPlantsList.length, plantDetSvc.returnPlantArray()[obj]);
	    	}
	    	//vm.currentPlantsList = plantDetSvc.returnPlantArray();
		    console.log("vm.currentPlantsList ", vm.currentPlantsList);  	
	    }

	    //add plant button
	    function addPlantBTN(){
	    	console.log("vm.inputData", vm.inputData);
	    	if(!$scope.addPlantForm.$invalid) {
	    		vm.addButtonStyle = "btn-primary";
		        if(vm.inputData.plantCompany == null){
		        	vm.inputData.plantCompany = "(N.A.)"
		        }
		        plantDetSvc.addPlant(vm.inputData.plantName, vm.inputData.plantCompany, vm.inputData.plantStage, vm.inputData.plantDate);
		        vm.addButtonStyle = "btn-success";
		        vm.errorMessage = "Plant Added. refreshing screen...";
		    }else{
		        alert("No entry!");
		        vm.addButtonStyle = "btn-danger";
		    }
		    vm.getFullPlantsArray();
		    //vm.clearFieldsBTN();
	    }

	    //clear plant inputs
	    function clearFieldsBTN(){
	    	vm.inputData = {
				plantName: null,
				plantCompany: null,
				plantDate: {year: _YYYY, month: _MM, day: _DD},
				plantStage: "Seeding"
		    };
	    }

	    //remove plant from array
	    function deletePlantBTN(ID){
	    	console.log("ID: ", ID);
	    	plantDetSvc.removePlant(ID);
	    	vm.getFullPlantsArray();
	    }

	    /**---Run Function---**/
	    vm.getFullPlantsArray();

	    //temporary solution. refresh screen to see updated array.
	    /*setInterval(function(){
	    	vm.getFullPlantsArray(); 
	    	vm.errorMessage = ""; 
	    	vm.addButtonStyle = "btn-primary"; 
	    	$scope.$apply();
	    }, 5000);*/

	    /**---Temporary Stuff---**/
    	/*vm.currentPlantsList = [
		    {plant:1, 
		     name: 'Jack Herer',
		     desc: '(Blackskull)',
		     img: 'images/strains/jack-herer_100x100.jpg', 
		     plantData: {plantType: 'Sativa',
						 plantWater: 0,
						 plantPPM: 0,
						 plantPH: 0,
						 plantHeight: 0,
						 plantCond: 'good',
						 //timeOfDay: 'morning',
						 lightType: 'CFL',
						 plantMsg: '',
						 entryTime: vm.currentTimestamp,
      					 entryDate: vm.currentDate}
			},
			{plant:2, 
		     name: 'CSS',
		     desc: '(Delicious)',
		     img: 'images/strains/critical-sensi-star_100x100.jpg', 
		     plantData: {plantType: 'Indica',
						 plantWater: 0,
						 plantPPM: 0,
						 plantPH: 0,
						 plantHeight: 0,
						 plantCond: 'good',
						 //timeOfDay: 'morning',
						 lightType: 'HPS',
						 plantMsg: '',
						 entryTime: vm.currentTimestamp,
      					 entryDate: vm.currentDate}
			},
			{plant:3, 
		     name: 'Auto DM',
		     desc: '(Blackskull)',
		     img:'images/strains/acapulco-gold_100x100.jpg', 
		     plantData: {plantType: 'Indica',
						 plantWater: 0,
						 plantPPM: 0,
						 plantPH: 0,
						 plantHeight: 0,
						 plantCond: 'good',
						 //timeOfDay: 'morning',
						 lightType: 'CFL',
						 plantMsg: '',
						 entryTime: vm.currentTimestamp,
      					 entryDate: vm.currentDate}
			},
			{plant:4, 
		     name: 'Auto GSC',
		     desc: '(Fastbuds)',
		     img:'images/strains/girl-scout-cookies_100x100.jpg', 
		     plantData: {plantType: 'Hybrid',
						 plantWater: 0,
						 plantPPM: 0,
						 plantPH: 0,
						 plantHeight: 0,
						 plantCond: 'good',
						 //timeOfDay: 'morning',
						 lightType: 'CFL',
						 plantMsg: '',
						 entryTime: vm.currentTimestamp,
      					 entryDate: vm.currentDate}
			},
			{plant:5, 
		     name: 'Orange Rooster',
		     desc: '(N.A.)', 
		     img:'images/strains/acapulco-gold_100x100.jpg',
		     plantData: {plantType: 'Hybrid',
						 plantWater: 0,
						 plantPPM: 0,
						 plantPH: 0,
						 plantHeight: 0,
						 plantCond: 'good',
						 //timeOfDay: 'morning',
						 lightType: 'CFL',
						 plantMsg: '',
						 entryTime: vm.currentTimestamp,
      					 entryDate: vm.currentDate}
			},
			{plant:6, 
		     name: 'Empty',
		     desc: '',
		     img:'images/strains/acapulco-gold_100x100.jpg',  
		     plantData: {plantType: 'Sativa',
						 plantWater: 0,
						 plantPPM: 0,
						 plantPH: 0,
						 plantHeight: 0,
						 plantCond: 'good',
						 //timeOfDay: 'morning',
						 lightType: 'CFL',
						 plantMsg: '',
						 entryTime: vm.currentTimestamp,
      					 entryDate: vm.currentDate}
			}
	    ];*/

    	vm.PlantName = "This Is A Test!"
	}

}());