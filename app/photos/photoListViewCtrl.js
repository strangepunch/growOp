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
		     img: 'images/plants/week8/plant1/jh_week8_1.jpg', 
			},
			{plant:2, 
		     name: 'CSS',
		     desc: '(Delicious)',
		     img: 'images/plants/week7/plant2/cssweek7p2.jpg', 
			},
			{plant:3, 
		     name: 'Auto DM',
		     desc: '(Blackskull)',
		     img:'images/plants/week7/plant3/admweek7p3.jpg',
			},
			{plant:4, 
		     name: 'Auto GSC',
		     desc: '(Fastbuds)',
		     img:'images/plants/week7/plant4/gscweek7p1.jpg', 
			},
			{plant:5, 
		     name: 'Org Rooster',
		     desc: '(N.A.)', 
		     img:'images/plants/week7/plant5/orweek7p3b.jpg',
			},
			{plant:6, 
		     name: 'All Plants',
		     desc: '',
		     img:'images/plants/week7/plant1/jhweek7p1.jpg',
			}
	    ];

	    /**---function declarations---**/
	
	    //filter images actions

	    /**---function---**/


	    /**---initiate the function---**/
	    
	}

}());