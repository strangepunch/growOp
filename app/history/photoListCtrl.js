(function () {
	angular
			.module("growOpApp")
			.controller("PhotoListCtrl",
						["$scope",
						 "localStorageService",
							PhotoListCtrl]);
	
	function ToDoListCtrl($scope, localStorageService){
		var vm = this;
    	
  	//----Bindable Members Up Top----//
  	//time variables
		var d = new Date();
		var hr = d.getHours();
		var min = d.getMinutes();
		var sec = d.getSeconds();
		var mSec = d.getMilliseconds();

  	vm.currentTimestamp = hr + ":" + min + ":" + sec + ":" + mSec;

    var MM = d.getMonth() + 1;
    var DD = d.getDate();
    var YYYY = d.getFullYear();

    vm.currentDate = MM + "/" + DD + "/" + YYYY;

    var thisDay = d.getDay();
    vm.theDayofWeek = "Monday";
    vm.theMonthName = "Jan";
    vm.theDate = vm.theMonthName + " " + DD;

    //scope variables
    $scope.checkedSuccess = false;

    //data input variables
    vm.toDoListItems = [];

    vm.tempToDoListItems = [
      {item:1, discription: 'RO Water', measurement: '0/g', checked: false},
      {item:2, discription: 'Grow Big', measurement: '5 tsp/g', checked: false},
      {item:3, discription: 'Big Bloom', measurement: '5 tsp/g', checked: false},
      {item:4, discription: 'Tiger BloomS', measurement: '5 tsp/g', checked: false},
      {item:5, discription: 'Compost tea (brew)', measurement: 'x consentration per plant', checked: false},
      {item:6, discription: 'Clean up', measurement: 'N.A.', checked: false}
    ];
    
    //function declarations
    vm.checkedItem = checkedItem;
    vm.checkItemsDone = checkItemsDone;
    vm.getData = getData;
  	vm.storeData = storeData;
    vm.clearData = clearData;
    vm.getDayOfWeek = getDayOfWeek;
    vm.getMonthName = getMonthName;
 
  	//---- Bindable Members---END----//

    //---- Functions---START----//
    function checkedItem(id){
      var getIndexNum = vm.toDoListItems.indexOf(id);
      //console.log(vm.toDoListItems.indexOf(id));
      vm.toDoListItems[getIndexNum].checked = true;
      //console.log(vm.toDoListItems[getIndexNum].checked);
      vm.checkItemsDone();
    }

    function checkItemsDone(){
      var temp = false;
      for(i=0; i<vm.toDoListItems.length;i++){
        if(vm.toDoListItems[i].checked == true){
          temp = true;
        }else{
          temp = false;
          break;
        }
      }
      $scope.checkedSuccess = temp;
      //console.log('final success ', $scope.checkedSuccess);
    }

    function getData(){
      if($scope.dataList != undefined){
        vm.toDoListItems = $scope.dataList;
      } else{
        vm.toDoListItems = vm.tempToDoListItems;
      }
      
      //console.log("in controler: " + $scope.dataList);
    }
    
  	function storeData(){
     
  	}

    function clearData(){
      for(i=0; i<vm.toDoListItems.length;i++){
        vm.toDoListItems[i].checked = false;    
      } 
      $scope.checkedSuccess = false;
    }

    function getDayOfWeek(){
      switch(thisDay) {
        case 1:
          vm.theDayofWeek = 'Monday';
          break;
        case 2:
          vm.theDayofWeek = 'Tuesday';
          break;
        case 3:
          vm.theDayofWeek = 'Wednesday';
          break;
        case 4:
          vm.theDayofWeek = 'Thursday';
          break;
        case 5:
          vm.theDayofWeek = 'Friday';
          break;
        case 6:
          vm.theDayofWeek = 'Monday';
          break;
        case 0:
          vm.theDayofWeek = 'Sunday';
          break;
        default:
          vm.theDayofWeek = 'Sunday';
      }

    }

    function getMonthName(){
      switch(MM) {
        case 1:
          vm.theMonthName = 'Jan';
          break;
        case 2:
          vm.theMonthName = 'Feb';
          break;
        case 3:
          vm.theMonthName = 'Mar';
          break;
        case 4:
          vm.theMonthName = 'Apr';
          break;
        case 5:
          vm.theMonthName = 'May';
          break;
        case 6:
          vm.theMonthName = 'June';
          break;
        case 7:
          vm.theMonthName = 'July';
          break;
        case 8:
          vm.theMonthName = 'Aug';
          break;
        case 9:
          vm.theMonthName = 'Sept';
          break;
        case 10:
          vm.theMonthName = 'Oct';
          break;
        case 11:
          vm.theMonthName = 'Nov';
          break;
        case 12:
          vm.theMonthName = 'Dec';
          break;
        default:
          vm.theMonthName = 'Jan';
      }

      vm.theDate = vm.theMonthName + " " + DD;
    }

    //---- Functions---END----//

    vm.getData();
    vm.getDayOfWeek();
    vm.getMonthName();
	}

}());