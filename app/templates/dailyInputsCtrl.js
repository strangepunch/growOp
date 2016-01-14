(function () {
	angular
			.module("growOpApp")
			.controller("DailyInputsCtrl",
						["$scope",
						 "localStorageService",
							DailyInputsCtrl]);
	
	function DailyInputsCtrl($scope, localStorageService){
		var vm = this;
    	
  	//----Bindable Members Up Top----//
  	//time variables
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

    //scope variables
    $scope.btnSuccess = 'default';

    //data input variables
    vm.isSaved = true;
    vm.errorMessage = 'need to save before email';

    vm.emailMessageDATAinJSON = "";

  	vm.placeholders = {
  		roomTemp: 'room temp...',
  		roomHumidity: 'room humidity...',
  		roomLight: 'room light info...',
  		totalWater: 'total water used...',
  		totalPPM: 'PPM before use...',
  		totalPH: 'PH before use...'
  	};

  	vm.inputData = {
  		roomTemp: null,
  		roomHumidity: null,
  		roomLight: null,
  		totalWater: null,
  		totalPPM: null,
  		totalPH: null,
      timeOfDay: null,
      entryTime: vm.currentTimestamp,
      entryDate: vm.currentDate
  	};

  	vm.storedData = {
  		roomTemp: 70,
  		roomHumidity: 45,
  		roomLight: 80,
  		totalWater: 5,
  		totalPPM: 0,
  		totalPH: 0,
      timeOfDay: 'evening',
      entryTime: vm.currentTimestamp,
      entryDate: vm.currentDate
  	};

    vm.outputData_storedData = '';

  	//function declarations
    vm.getData = getData;
  	vm.storeData = storeData;
    vm.makeJSON = makeJSON;
    vm.emailData = sendMail;
    vm.clearData = clearData;

  	//---- Bindable Members---END----//

    //---- Functions---START----//
    function getData(){
        if($scope.dataList != undefined){
          vm.inputData = $scope.dataList;
        } else{
          vm.inputData = vm.storedData;
        }
    }
  	
  	function storeData(){
      //!$scope.dailyForm.$pristine &&
      if(!$scope.dailyForm.$invalid) {
        //console.log("vm.inputData", vm.inputData);
          vm.storedData = vm.inputData;
          vm.storedData.entryTime = vm.currentTimestamp;
          vm.storedData.entryDate = vm.currentDate;
          $scope.btnSuccess = 'success';
          vm.errorMessage = 'now you can email';
          vm.isSaved = false;
          vm.makeJSON();
      }else{
          console.log("No entry!");
          $scope.btnSuccess = 'fail';
          vm.isSaved = true;
      }
      var myJsonString = JSON.stringify(vm.storedData);
      console.log("JSON: " + myJsonString);
  	}

    function clearData(){
        vm.inputData = {
            roomTemp: null,
            roomHumidity: null,
            roomLight: null,
            totalWater: null,
            totalPPM: null,
            totalPH: null,
            timeOfDay: null,
            entryTime: vm.currentTimestamp,
            entryDate: vm.currentDate
        };

        $scope.btnSuccess = 'default';
        vm.isSaved = true;
        vm.errorMessage = 'need to save before email';
        console.log("Cleared ROOM input DATA!");
    }

    function makeJSON(){
      
      var tempFormatData = {
            roomTemp: vm.storedData.roomTemp,
            roomHumidity: vm.storedData.roomHumidity,
            roomLight: vm.storedData.roomLight,
            totalWater: vm.storedData.totalWater,
            totalPPM: vm.storedData.totalPPM,
            totalPH: vm.storedData.totalPH,
            timeOfDay: vm.storedData.timeOfDay,
            entryTime: vm.currentTimestamp,
            entryDate: vm.currentDate
          };

      vm.emailMessageDATAinJSON = JSON.stringify(tempFormatData);
      console.log("ROOM vm.emailMessageDATAinJSON --> JSON: " + vm.emailMessageDATAinJSON);
    }

    function sendMail() {
        $.ajax({
          type: 'POST',
          url: 'https://mandrillapp.com/api/1.0/messages/send.json',
          data: {
            'key': 'o2qOjIGJdPAbn7CuXXWmRQ',
            'message': {
              'from_email': 'jessica@2geeseflying.com',
              'to': [
                  {
                    'email': 'measurements@2geeseflying.com',
                    'name': 'Tester',
                    'type': 'to'
                  },
                  {
                    'email': 'jessicazh09@gmail.com',
                    'name': 'Tester',
                    'type': 'to'
                  }
                ],
              'autotext': 'true',
              'subject': 'growOp Data in JSON format',
              'html': vm.emailMessageDATAinJSON
            }
          }
         }).done(function(response) {
           console.log(response); // if you're into that sorta thing
         });
    }
    //---- Functions---END----//
	}

}());