(function () {
	angular
			.module("growOpApp")
			.controller("OverViewCtrl",
						["$scope",
						 "localStorageService",
							OverViewCtrl]);
	
	function OverViewCtrl($scope, localStorageService){
		var vm = this;
    	
		var d = new Date();
		var hr = d.getHours();
		var min = d.getMinutes();
		var sec = d.getSeconds();
		var mSec = d.getMilliseconds();

    	vm.titleName = hr + ":" + min + ":" + sec + ":" + mSec;
	}

}());