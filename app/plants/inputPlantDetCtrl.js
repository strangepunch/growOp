(function () {
  angular
      .module("growOpApp")
      .controller("InputPlantDetCtrl",
            ["$scope",
             "localStorageService",
              InputPlantDetCtrl]);
  
  function InputPlantDetCtrl($scope, localStorageService){
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
    $scope.btnSuccessEmail = 'default';
    $scope.submitSuccess = 'default';

    //data input variables
    vm.isSaved = true;
    vm.todayEntryStatus = 'new';
    vm.errorMessage = '';
    vm.isShow = false;
    vm.tempHold = true;

    vm.PlantName = $scope.listName;
    vm.PlantDesc = $scope.listDesc;
    vm.PlantImg = $scope.listImg;
    vm.PlantCount = $scope.counter;
    
    vm.inPlantProgressView = true;

    vm.emailMessageDATAinJSON = "";

    vm.placeholders = {
      plantType: 'plant type',
      plantWater: 'enter water used...',
      plantPPM: 'enter plant PPM...',
      plantPH: 'enter plant PH...',
      plantHeight: 'enter plant Height...',
      //lightHt: 'enter light Height...',
      plantMsg: 'extra notes on this plant...',
      budNum: 'enter number of buds...',
      budLength: 'enter length of the largest bud...'
    };

    vm.Pruning =[{
      "name": "FIM",
      "tier": 0,
      "times": 0,
      "checked": false,
    }, {"name": "Top",
      "tier": 0,
      "times": 0,
      "checked": false
    }, {"name": "sCrop",
      "tier": 0,
      "times": 0,
      "checked": false
    }, {"name": "LST",
      "tier": 0,
      "times": 0,
      "checked": false
    }, {"name": "Fan",
      "tier": 0,
      "times": 0,
      "checked": false
    }];

    vm.inputData = {
      plantType: null,
      plantWater: null,
      plantPPM: null,
      plantPH: null,
      plantHeight: null,
      plantCond: null,
      //timeOfDay: null,
      lightType: null,
      //lightHt: null,
      pruning: null,
      plantMsg: null,
      budNum: null,
      budLength: null,
      entryTime: vm.currentTimestamp,
      entryDate: vm.currentDate
    };

    vm.storedData = {
      plantType: 'unknown',
      plantWater: 0,
      plantPPM: 0,
      plantPH: 0,
      plantHeight: 0,
      plantCond: 'good',
      //timeOfDay: 'morning',
      lightType: 'CFL',
      //lightHt: 0,
      pruning: vm.Pruning,
      plantMsg: 'this plant feels good.',
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
    vm.togglePanel = togglePanel;
    //---- Bindable Members---END----//

    //---- Functions---START----//
    function getData(){

        if($scope.dataList != undefined){
          vm.inputData = $scope.dataList;
        }else{
          vm.inputData = vm.storedData;
        }
    }
    
    function storeData(){
      //!$scope.dailyForm.$pristine && 
      if(!$scope.dailyForm.$invalid) {
          //console.log("vm.inputData", vm.inputData);
          vm.storedData = vm.inputData;
          //console.log("vm.storedData", vm.storedData);
          //console.log("vm.Pruning", vm.Pruning);
          vm.storedData.pruning = vm.Pruning
          vm.storedData.entryTime = vm.currentTimestamp;
          vm.storedData.entryDate = vm.currentDate;

          $scope.btnSuccess = 'success';
          vm.isSaved = false;
          vm.todayEntryStatus = 'saved';

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
          plantType: null,
          plantWater: null,
          plantPPM: null,
          plantPH: null,
          plantHeight: null,
          plantCond: null,
          //timeOfDay: null,
          lightType: null,
          //lightHt: null,
          pruning: null,
          plantMsg: null,
          budNum: null,
          budLength: null,
          entryTime: vm.currentTimestamp,
          entryDate: vm.currentDate
        };

        if($scope.dataList != undefined){
          vm.inputData.plantType = $scope.dataList.plantType;
        } else{
          vm.inputData.plantType = vm.storedData.plantType;
        }

        $scope.btnSuccess = 'default';
        vm.isSaved = true;
        vm.todayEntryStatus = 'new';
        $scope.btnSuccessEmail = 'default';
        vm.errorMessage = '';
        console.log("Cleared PLANT input DATA!");

        for(var obj in vm.Pruning){
            vm.Pruning[obj].tier = 0;
            vm.Pruning[obj].times = 0;
        }
    }

    function makeJSON(){
      
      var tempFormatData = {
            PlantName: vm.PlantName,
            PlantDesc: vm.PlantDesc,
            plantType: vm.storedData.plantType,
            plantWater: vm.storedData.plantWater,
            plantPPM: vm.storedData.plantPPM,
            plantPH: vm.storedData.plantPH,
            plantHeight: vm.storedData.plantHeight,
            plantCond: vm.storedData.plantCond,
            lightType: vm.storedData.lightType,
            //lightHt: vm.storedData.lightHt,
            pruning: vm.storedData.pruning,
            plantMsg: vm.storedData.plantMsg,
            entryTime: vm.currentTimestamp,
            entryDate: vm.currentDate
          };

      vm.emailMessageDATAinJSON = JSON.stringify(tempFormatData);
      console.log("vm.emailMessageDATAinJSON --> JSON: " + vm.emailMessageDATAinJSON);
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
              'subject': vm.PlantName + ' growOp Data',
              'html': vm.emailMessageDATAinJSON
            }
          }
         }).done(function(response) {
            console.log(response); // if you're into that sorta thing
            for(i=0; i<response.length; i++){
            if(response[i].status == "sent"){
              $scope.btnSuccessEmail = 'success';
              vm.errorMessage = 'email success!';
              vm.todayEntryStatus = 'done';
            }else if (response[i].status == "queued"){
              $scope.btnSuccessEmail = 'success';
              vm.errorMessage = 'email queued!';
              vm.todayEntryStatus = 'done';
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
             console.log("Plant Mailed")
            $scope.submitSuccess = 'success';
          }else{
           $scope.submitSuccess = 'fail';
          }
      }else{
        $scope.submitSuccess = 'fail';
      }
      clearErrorMessage();
    }

    function togglePanel() {
      console.log($(window).width());

      if($(window).width() <1200){
        vm.isShow = !vm.isShow;
        vm.tempHold = vm.isShow;
      }else{
        vm.isShow = true;
      }
    }
    //---- Functions---END----//
    
    //---- Other Functions----//
    function clearErrorMessage(){
       setTimeout(function(){ vm.errorMessage = ''; $scope.$apply();}, 3000);
    }

    $(window).resize(function() {
      width = $(this).width();
      if(width >= 1200){
        vm.isShow = true;
      }else{
        vm.isShow = vm.tempHold;
      }
      $scope.$apply();
    });
    //---- Other Functions---END----// 

    vm.getData();
  }

}());