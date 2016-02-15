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
    $scope.btnSuccessEmai = 'default';
    $scope.submitSuccess = 'default';

    //data input variables
    vm.isSaved = true;
    vm.errorMessage = '';

    vm.emailMessageDATAinJSON = "";

  	vm.placeholders = {
  		roomTemp: 'room temp...',
  		roomHumidity: 'room humidity...',
  		roomLightHr: 'room light hour on...',
      roomLightHt: 'room light height...',
  		totalWater: 'total water used...',
  		//totalPPM: 'PPM before use...',
  		//totalPH: 'PH before use...',
      roomMsg: 'general notes...'
  	};

    vm.Nutrients = [{
      "name": "Grow B.",
      "amt": 0,
      "checked": false
    }, {
      "name": "Big Bl.",
      "amt": 0,
      "checked": false
    }, {
      "name": "Tiger Bl.",
      "amt": 0,
      "checked": false
    }, {
      "name": "Sea 90",
      "amt": 0,
      "checked": false
    }, {
      "name": "Protein",
      "amt": 0,
      "checked": false
    }];

  	vm.inputData = {
  		roomTemp: null,
  		roomHumidity: null,
  		roomLightHr: null,
      roomLightHt: null,
  		totalWater: null,
  		nutrients: null,
  		//totalPH: null,
      //timeOfDay: null,
      roomMsg: null,
      entryTime: vm.currentTimestamp,
      entryDate: vm.currentDate
  	};

  	vm.storedData = {
  		roomTemp: 70,
  		roomHumidity: 45,
  		roomLightHr: 20,
      roomLightHt: 35,
  		totalWater: 5,
      nutrients: vm.Nutrients,
  		//totalPPM: 0,
  		//totalPH: 0,
      //timeOfDay: 'evening',
      roomMsg: 'nothing is going on around here.',
      entryTime: vm.currentTimestamp,
      entryDate: vm.currentDate
  	};

    vm.outputData_storedData = '';

  	//function declarations
    vm.getData = getData;
  	vm.storeData = storeData;
    vm.makeJSON = makeJSON;
    vm.emailData = sendMail;
    vm.submitData = submitData;
    vm.clearData = clearData;

  	//---- Bindable Members---END----//

    //---- Functions---START----//
    function getData(){
        if($scope.dataList != undefined){
          vm.inputData = $scope.dataList;
        } else{
          vm.inputData = vm.storedData;
        }
        //vm.errorMessage = 'need to save before email';
    }
  	
  	function storeData(){
      //!$scope.dailyForm.$pristine &&
      if(!$scope.dailyForm.$invalid) {
        //console.log("vm.inputData", vm.inputData);
          vm.storedData = vm.inputData;
          vm.storedData.entryTime = vm.currentTimestamp;
          vm.storedData.entryDate = vm.currentDate;

          $scope.btnSuccess = 'success';
          //vm.errorMessage = 'now you can email';
          vm.isSaved = false;

          vm.makeJSON();
      }else{
          console.log("No entry!");
          $scope.btnSuccess = 'fail';
          vm.errorMessage = 'missing entries';
          vm.isSaved = true;
      }
      var myJsonString = JSON.stringify(vm.storedData);
      console.log("JSON: " + myJsonString);
  	}

    function clearData(){
        vm.inputData = {
            roomTemp: null,
            roomHumidity: null,
            roomLightHr: null,
            roomLightHt: null,
            totalWater: null,
            nutrients: null,
            //totalPPM: null,
            //totalPH: null,
            //timeOfDay: null,
            roomMsg: null,
            entryTime: vm.currentTimestamp,
            entryDate: vm.currentDate
        };

        $scope.btnSuccess = 'default';
        vm.isSaved = true;
        $scope.btnSuccessEmail = 'default';
        vm.errorMessage = '';
        console.log("Cleared ROOM input DATA!");

        for(var obj in vm.Nutrients){
            vm.Nutrients[obj].amt = 0;
        }
    }

    function makeJSON(){
      
      var tempFormatData = {
            roomTemp: vm.storedData.roomTemp,
            roomHumidity: vm.storedData.roomHumidity,
            roomLightHr: vm.storedData.roomLightHr,
            roomLightHt: vm.storedData.roomLightHt,
            totalWater: vm.storedData.totalWater,
            nutrients: vm.Nutrients,
            //totalPPM: vm.storedData.totalPPM,
            //totalPH: vm.storedData.totalPH,
            //timeOfDay: vm.storedData.timeOfDay,
            roomMsg: vm.storedData.roomMsg,
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
                  }
                ],
              'autotext': 'true',
              'subject': 'Room Data in JSON format',
              'html': vm.emailMessageDATAinJSON
            }
          }
         }).done(function(response) {
           console.log(response); // if you're into that sorta thing
           for(i=0; i<response.length; i++){
            if(response[i].status == "sent"){
              $scope.btnSuccessEmail = 'success';
              vm.errorMessage = 'email success!';
            }else if (response[i].status == "queued"){
              $scope.btnSuccessEmail = 'success';
              vm.errorMessage = 'email queued!';
            }else{
              $scope.btnSuccessEmail = 'fail';
              vm.errorMessage = 'email fail. contact help deak or try again!';
            }
           }
           $scope.$apply();
         });
    }

    function submitData(){
      vm.storeData();
      if( $scope.btnSuccess == 'success'){
          vm.emailData();
          if($scope.btnSuccessEmail = 'success'){
             console.log("Room Mailed")
            $scope.submitSuccess = 'success';
          }else{
           $scope.submitSuccess = 'fail';
          }
      }else{
        $scope.submitSuccess = 'fail';
      }
    }
    //---- Functions---END----//
	}

}());