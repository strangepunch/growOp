(function () {
	angular
			.module("growOpApp")
			.controller("ToDoListCtrl",
						["$scope",
						 "localStorageService",
							ToDoListCtrl]);
	
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

    //---- Functions---END----//

    vm.getData();
	}

}());