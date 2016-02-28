(function(){
	"use strict";

	angular
		.module("growOpApp")

		.service('plantGetDataSvc', function($http, $q, masterPlantLogResource) {
			/**---time variables--**/
			var d = new Date();
			//time
    		var _hr = d.getHours();
    		var _min = d.getMinutes();
    		var _sec = d.getSeconds();
    		var _mSec = d.getMilliseconds();
    		//date
    		var _MM = d.getMonth() + 1;
    		var _DD = d.getDate();
    		var _YYYY = d.getFullYear();
    		//combination
    		var _currentTimestamp = _hr + ":" + _min + ":" + _sec + ":" + _mSec;
    		//var _currentDate = YYYY + "/" + MM + "/" + DD;
    		var _currentDate = {year: _YYYY, month: _MM, day: _DD};

      		/**---local variables---**/
      		var vm = this;

      		/**---Get Data FROM: masterPlantLogResource---**/
      		//local variables
      		var _FULLDATA_ = [];
      		var _WEEKDATA_ = []; 
      		var _DAYDATA_ = [];       	

      		/**---function declarations---**/
      
      		//build and return the whole array
      		vm.buildFullArray = buildFullArray;
      		//build and return a week's array
      		vm.getWeekArray = getWeekArray;

			/**---function---**/
			//build and return the whole array
			function buildFullArray(){
				return new Promise(function(resolve,reject){
					masterPlantLogResource.query(function(data){
						if(data != null){
							_FULLDATA_ = data;
							console.log("build_FULLDATA_: ", _FULLDATA_);
							resolve(_FULLDATA_);
						}else{
							reject("empty array...");
						}
						
					});
				});
			}
      		//build and return a week's array
      		function getWeekArray(weekNum){
      			return new Promise(function(resolve,reject){
      				weekNum = 'week0';
					masterPlantLogResource.query(function(data){
						if(data != null){
							if(Object.keys(data[0]) == 'week0'){
								console.log("true");
							}
							_WEEKDATA_ = data[0];
							console.log("build_WEEKDATA_: ", _WEEKDATA_);
							resolve(_WEEKDATA_);
						}else{
							reject("empty array...");
						}
					});
				});
      		}
			
		})
}());