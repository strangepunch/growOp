(function () {
	angular
			.module("growOpApp")
			.controller("PlantViewCtrl",
						["$scope",
						 "localStorageService",
							PlantViewCtrl]);
	
	function PlantViewCtrl($scope, localStorageService){
		var vm = this;
    	
		var d = new Date();
		var hr = d.getHours();
		var min = d.getMinutes();
		var sec = d.getSeconds();
		var mSec = d.getMilliseconds();

    	vm.titleName = hr + ":" + min + ":" + sec + ":" + mSec;
	}

}());