(function () {
	angular
			.module("growOpApp")
			.controller("PhotoViewCtrl",
						["$scope",
						 "localStorageService",
							PhotoViewCtrl]);
	
	function PhotoViewCtrl($scope, localStorageService){
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

    	vm.somePhotoItems = [
		     {item:1, discription: 'Plant 1', measurement: 'N.A.', checked: false},
		     {item:2, discription: 'Plant 2', measurement: 'N.A.', checked: false},
		     {item:3, discription: 'Plant 3', measurement: 'N.A.', checked: false},
		     {item:4, discription: 'Plant 4', measurement: 'N.A.', checked: false},
		     {item:5, discription: 'Plant 5', measurement: 'N.A.', checked: false},
		     {item:6, discription: 'Misc', measurement: 'N.A.', checked: false}
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
						 //timeOfDay: 'evening',
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
						 //timeOfDay: 'morning',
						 entryTime: vm.currentTimestamp,
      					 entryDate: vm.currentDate}
			}
	    ];

	    vm.Pruning =[{
		    "name": "FIM",
		    "tier": 0,
		    "times": 0,
		    "checked": false
	    }, 
	    {	"name": "Top",
	      	"tier": 0,
	      	"times": 0,
	      	"checked": false
	    }, 
	    {	"name": "sCrop",
	      	"tier": 0,
	      	"times": 0,
	      	"checked": false
	    }, 
	    {	"name": "LST",
	      	"tier": 0,
	      	"times": 0,
	      	"checked": false
	    }];
	

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
						 entryTime: vm.currentTimestamp,
      					 entryDate: vm.currentDate},
			 photos: {
		 		photo1: 'images/plants/week0/plant1/or_week0_3.jpg',
		 		photo2: 'images/plants/week0/plant1/week0_1.jpg',
		 		photo3: 'images/plants/week0B/plant1/week0B_3.jpg',
		 		photo4: 'images/plants/week0B/plant1/week0_1.jpg'
			 	}
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
						 entryTime: vm.currentTimestamp,
						 entryDate: vm.currentDate},
			 photos: {
			 	plant2photo1: 'images/strains/jack-herer_100x100.jpg',
			 	plant2photo2: 'images/strains/jack-herer_100x100.jpg',
			 	plant2photo3: 'images/strains/jack-herer_100x100.jpg'
			 }
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
						 entryTime: vm.currentTimestamp,
      					 entryDate: vm.currentDate}
			}
	    ];

	}

}());