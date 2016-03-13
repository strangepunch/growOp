(function () {
	angular
			.module("growOpApp")
			.controller("MainViewCtrl",
						["$scope",
						 "$location",
						 "localStorageService",
							MainViewCtrl]);
	
	function MainViewCtrl($scope, $location, localStorageService){
		var vm = this;
    	
		var d = new Date();
		var hr = d.getHours();
		var min = d.getMinutes();
		var sec = d.getSeconds();
		var mSec = d.getMilliseconds();

    	vm.titleName = hr + ":" + min + ":" + sec + ":" + mSec;
    	vm.isActive = function (viewLocation) { 
	        return viewLocation === $location.path();
	    };
	}

}());