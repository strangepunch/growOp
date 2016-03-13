(function () {
	angular
			.module("growOpApp")
			.controller("PhotoListViewCtrl",
						["$scope",
						 "localStorageService",
						 "plantPhotoSvc",
							PhotoListViewCtrl]);
	
	function PhotoListViewCtrl($scope, localStorageService, plantPhotoSvc){
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
    	vm.currentPlantsList = [
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
						 //lightHt: 0,
						 pruning: vm.Pruning,
						 plantMsg: '',
						 budNum: null,
						 budLength: 0,
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
						 ////lightHt: 0,
						 pruning: vm.Pruning,
						 plantMsg: '',
						 budNum: null,
						 budLength: 0,
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
						 //lightHt: 0,
						 pruning: vm.Pruning,
						 plantMsg: '',
						 budNum: null,
						 budLength: 0,
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
						 //lightHt: 0,
						 pruning: vm.Pruning,
						 plantMsg: '',
						 budNum: null,
						 budLength: 0,
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
						 //lightHt: 0,
						 pruning: vm.Pruning,
						 plantMsg: '',
						 budNum: null,
						 budLength: 0,
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
						 //lightHt: 0,
						 pruning: vm.Pruning,
						 plantMsg: '',
						 budNum: null,
						 budLength: 0,
						 entryTime: vm.currentTimestamp,
      					 entryDate: vm.currentDate}
			}
	    ];

	    /**---function declarations---**/
	
	    //filter images actions

	    /**---function---**/


	    /**---initiate the function---**/
	    
	}

}());