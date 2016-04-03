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

    	var dayOfWeek = d.getDay()+1;

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
		vm.totalWeeks = 0;

		vm.totalWater = 0;
		vm.grewMost = {};
		vm.grewLeast = {};
		vm.tallest = {};
		vm.shortest = {};

		//arrays of data
		vm.PlantMessages = [];
		vm.PlantHeights = [];
		vm.PlantGrowth = [];
		vm.PlantWater = [];

		//current plant 1 to 1 grab bag of stuff
		vm.currentPlantsList = [
		    {plant:1, 
		     name: 'JH',
		     img: 'images/strains/jack-herer_100x100.jpg', 
			},
			{plant:2, 
		     name: 'CSS',
		     img: 'images/strains/critical-sensi-star_100x100.jpg', 
			},
			{plant:3, 
		     name: 'DM',
		     img:'images/strains/acapulco-gold_100x100.jpg', 
			},
			{plant:4, 
		     name: 'GSC',
		     img:'images/strains/girl-scout-cookies_100x100.jpg', 
			},
			{plant:5, 
		     name: 'OR',
		     img:'images/strains/acapulco-gold_100x100.jpg',
			}
	    ];

		//declare

		/**---Function declarations---**/

		//get current week's data array
		vm.getWeekly = getWeekly;
		//calculate the difference between to date objects
		vm.dateDiffInDays = dateDiffInDays;
		//parse the data for useful info
		//---find how much water each plants have drunk this week
		vm.getTotalWaterPerPlant = getTotalWaterPerPlant;
		//---find how much each plants have grown this week
		vm.getTotalGrowthPerPlant = getTotalGrowthPerPlant;
		//---find what time of day the person checks on the plant the most
		//vm.getWhenCheckPlantOften = getWhenCheckPlantOften;
		//---check general health of each plant this week
		//vm.getHealthOfEachPlant = getHealthOfEachPlant;
		//---Messages of the week (random?) for each plant
		vm.getPlantMessages = getPlantMessages;

		//button functions
		vm.prevOne = prevOne;
		vm.nextOne = nextOne;

		//image selecction
		vm.getPlantImg = getPlantImg

		/**---Functions---**/

		//get current week's data array
		function getWeekly(){
			plantGetDataSvc.getWeekArrayForAllPlants(vm.currentWeek).then(function(data){
				vm.plantWeekly = data;
				console.log("vm.plantWeekly: ", vm.plantWeekly);
				vm.getTotalWaterPerPlant();
				vm.getTotalGrowthPerPlant();
				vm.getPlantMessages();
				$scope.$apply();
			}).catch(function(error){
				alert(error);
			});
		};

		//calculate the difference between to date objects
		//start day vs. current day
		function dateDiffInDays(start, current) {
		  // Discard the time and time-zone information.
		  var utc1 = Date.UTC(start.year, start.month, start.day);
		  var utc2 = Date.UTC(current.year, current.month, current.day);

		  return Math.floor((utc2 - utc1) / _MS_PER_DAY);
		};

		//find how much water each plants have drunk this week
		function getTotalWaterPerPlant(){
			//console.log("here");
			//clear values
			vm.totalWater = 0;
			vm.PlantWater.splice(0,vm.PlantWater.length);
			for(var i=0; i<vm.plantWeekly.length; i++){
				var sum = 0;
				for(var x=0; x<vm.plantWeekly[i].data.length; x++){
					var water = Number(vm.plantWeekly[i].data[x].data[0].plantWater);
					if(!Number.isNaN(water)){
						//console.log("water: ", water);
						sum = sum + water;
					}
				}
				vm.totalWater = vm.totalWater + sum;
				roundSum = Math.round(sum * 10)/10;
				//console.log("SUM:", sum);
				//vm.PlantWater.push({"pID":vm.plantWeekly[i].pID, "totWater":sum});
				vm.PlantWater.push({"pID":vm.plantWeekly[i].pID, "totWater":roundSum});
			}
			vm.totalWater = Math.round(vm.totalWater * 100)/100;
			//console.log("vm.totalWater:", vm.totalWater);
		};

		//---Messages of the week (random?) for each plant
		function getPlantMessages(){
			console.log("here");
			//clear values
			vm.PlantMessages.splice(0,vm.PlantMessages.length);
			for(var i=0; i<vm.plantWeekly.length; i++){
				var msg = [];
				for(var x=0; x<vm.plantWeekly[i].data.length; x++){
					var pMsg = vm.plantWeekly[i].data[x].data[0].plantMsg;
					//console.log("messages: ", pMsg )
					if(pMsg != undefined && pMsg != ""){
						msg.push(vm.plantWeekly[i].data[x].data[0].plantMsg);
					}else{
						msg.push(null);
					}
				}
				vm.PlantMessages.push({"pID":vm.plantWeekly[i].pID, "plantMsg":msg});
			}

			console.log("vm.PlantMessages: ", vm.PlantMessages);
		};

		//---find how much each plants have grown this week
		function getTotalGrowthPerPlant(){
			//console.log("here");
			//clear values
			vm.PlantGrowth.splice(0,vm.PlantGrowth.length);
			vm.PlantHeights.splice(0,vm.PlantHeights.length);
			for(var i=0; i<vm.plantWeekly.length; i++){
				var diff = 0;
				var maxHeight = 0;
				var tempArray = [];
				for(var x=0; x<vm.plantWeekly[i].data.length; x++){
					var growth = Number(vm.plantWeekly[i].data[x].data[0].plantHeight);
					if(!Number.isNaN(growth) && growth!=0){
						//console.log("growth: ", growth);
						tempArray.push(growth);
					}
				}
				if(tempArray.length != 0){
					//console.log("tempArray:", tempArray);
					diff = Math.max.apply(null, tempArray) - Math.min.apply(Math, tempArray);
					//console.log("diff:", diff);
					maxHeight = Math.max.apply(null, tempArray);
					vm.PlantHeights.push({"pID":vm.plantWeekly[i].pID, "totHeight":maxHeight});
					vm.PlantGrowth.push({"pID":vm.plantWeekly[i].pID, "totGrowth":diff});
				}
			}

			var max = vm.PlantGrowth[0];
			var min = vm.PlantGrowth[0];
			for(var i=1; i<vm.PlantGrowth.length; i++){
				if(vm.PlantGrowth[i].totGrowth > max.totGrowth){
					max = vm.PlantGrowth[i];
				}

				if(vm.PlantGrowth[i].totGrowth < min.totGrowth){
					min = vm.PlantGrowth[i];
				}
			}
			vm.grewMost = max;
			vm.grewLeast = min;

			//console.log("vm.grewMost: ", vm.grewMost);
			//console.log("vm.grewLeast: ", vm.grewLeast);

			var max = vm.PlantHeights[0];
			var min = vm.PlantHeights[0];
			for(var i=1; i<vm.PlantHeights.length; i++){
				if(vm.PlantHeights[i].totHeight > max.totHeight){
					max = vm.PlantHeights[i];
				}

				if(vm.PlantHeights[i].totHeight < min.totHeight){
					min = vm.PlantHeights[i];
				}
			}
			vm.tallest = max;
			vm.shortest = min;
			//console.log("vm.tallest: ", vm.tallest);
			//console.log("vm.shortest: ", vm.shortest);
		};

		function prevOne(){
			var i = vm.currentIndex;
			if(i > 0){
				i--;
				vm.currentIndex = i;
				vm.currentWeek = vm.currentIndex;
				vm.getWeekly();
			}else{
				i = 0;
				vm.currentIndex = i;
				vm.currentWeek = vm.currentIndex;
				vm.getWeekly();
			}
			
		}

		//button functions
		function nextOne(){
			var i = vm.currentIndex;
			if(i < vm.totalWeeks){
				i++;
				vm.currentIndex = i;
				//console.log("vm.currentIndexE: ", vm.currentWeek);
				vm.currentWeek = vm.currentIndex;
				vm.getWeekly();
			}else{
				i = vm.totalWeeks;
				vm.currentIndex = i;
				//console.log("vm.currentIndexF: ", vm.currentWeek);
				vm.currentWeek = vm.currentIndex;
				vm.getWeekly();
			}
			
		}

		//get plant images
		function getPlantImg(id){
			console.log("id ", id);
			for(var i=0;i<vm.currentPlantsList.length;i++){
				if(vm.currentPlantsList[i].plant == id){
					return vm.currentPlantsList[i].img;
				}
			}
		}

		/**---RUN Functions---**/
		vm.timePassed = dateDiffInDays(vm.startDate, vm.currentDate);
		//console.log("vm.timePassed: ", vm.timePassed);
		vm.currentWeek = Math.floor(vm.timePassed / 7);
		//console.log("vm.currentWeek: ", vm.currentWeek);
		vm.totalWeeks = vm.currentWeek;
		vm.currentIndex = vm.currentWeek;

		vm.getWeekly();
	}

}());