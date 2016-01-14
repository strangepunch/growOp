(function () {
	angular
			.module("growOpApp")
			.controller("DailyViewCtrl",
						["$scope",
						 "localStorageService",
							DailyViewCtrl]);
	
	function DailyViewCtrl($scope, localStorageService){
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

    	vm.someToDoListItems = [
		     {item:1, discription: 'RO Water B', measurement: 'N.A.', checked: false},
		     {item:2, discription: 'Grow Big B', measurement: '5 tsp/g', checked: false},
		     {item:3, discription: 'Big Bloom B', measurement: '5 tsp/g', checked: false},
		     {item:4, discription: 'Tiger BloomS B', measurement: '5 tsp/g', checked: false},
		     {item:5, discription: 'Compost tea (brew)', measurement: 'x consentration per plant', checked: false},
		     {item:6, discription: 'Clean up', measurement: 'N.A.', checked: false}
	    ];

	    vm.somePlantsList = [
		    {plant:1, 
		     name: 'Jack',
		     desc: 'none', 
		     plantData: {plantType: 'some info...',
						 plantWater: 2,
						 plantPPM: 50,
						 plantPH: 5,
						 plantHeight: 10,
						 plantCond: 'good',
						 timeOfDay: 'evening',
						 entryTime: vm.currentTimestamp,
      					 entryDate: vm.currentDate}
			},
			{plant:2, 
		     name: 'Jill',
		     desc: 'none', 
		     plantData: {plantType: '...can not be editted in daily view',
						 plantWater: 3,
						 plantPPM: 60,
						 plantPH: 6,
						 plantHeight: 4,
						 plantCond: 'good',
						 timeOfDay: 'morning',
						 entryTime: vm.currentTimestamp,
      					 entryDate: vm.currentDate}
			}
	    ];

	    vm.currentPlantsList = [
		    {plant:1, 
		     name: 'Auto Jack Herer',
		     desc: '(by Advanced)', 
		     plantData: {plantType: 'Sativa',
						 plantWater: 1,
						 plantPPM: 0,
						 plantPH: 0,
						 plantHeight: 0,
						 plantCond: 'good',
						 timeOfDay: 'morning',
						 plantMsg: '',
						 entryTime: vm.currentTimestamp,
      					 entryDate: vm.currentDate}
			},
			{plant:2, 
		     name: 'Critical Sensi Star',
		     desc: '(Delicious)', 
		     plantData: {plantType: 'Indica',
						 plantWater: 1,
						 plantPPM: 0,
						 plantPH: 0,
						 plantHeight: 0,
						 plantCond: 'good',
						 timeOfDay: 'morning',
						 plantMsg: null,
						 entryTime: vm.currentTimestamp,
      					 entryDate: vm.currentDate}
			},
			{plant:3, 
		     name: 'Green Crack',
		     desc: '(Cali Connection)', 
		     plantData: {plantType: 'Sativa',
						 plantWater: 1,
						 plantPPM: 0,
						 plantPH: 0,
						 plantHeight: 0,
						 plantCond: 'good',
						 timeOfDay: 'morning',
						 plantMsg: '',
						 entryTime: vm.currentTimestamp,
      					 entryDate: vm.currentDate}
			},
			{plant:4, 
		     name: 'Auto Northern Light Blue',
		     desc: '(Delicious)', 
		     plantData: {plantType: 'Indica',
						 plantWater: 1,
						 plantPPM: 0,
						 plantPH: 0,
						 plantHeight: 0,
						 plantCond: 'good',
						 timeOfDay: 'morning',
						 plantMsg: '',
						 entryTime: vm.currentTimestamp,
      					 entryDate: vm.currentDate}
			},
			{plant:5, 
		     name: 'Acapulco Gold',
		     desc: '(Barney\'s Farm)', 
		     plantData: {plantType: 'Sativa',
						 plantWater: 1,
						 plantPPM: 0,
						 plantPH: 0,
						 plantHeight: 0,
						 plantCond: 'good',
						 timeOfDay: 'morning',
						 plantMsg: '',
						 entryTime: vm.currentTimestamp,
      					 entryDate: vm.currentDate}
			}
	    ];
	}

}());