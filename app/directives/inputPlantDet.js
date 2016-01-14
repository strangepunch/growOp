(function(){
	"use strict";

	angular
		.module("growOpApp")
		.directive('inputPlantDet', function () {
			return {
		      restrict: 'AE',
		      scope: {
		    	  dataList: '=arryList',
		          listName: '@',
		          listDesc: '@',
		          counter: '@',
		          action: '&'
		        },
		      controller: 'InputPlantDetCtrl',
			  controllerAs: 'vm',
		      templateUrl: 'app/templates/inputPlantDet.html',
		      link: function (scope, elem, attrs) {
		      		if(scope.dailyForm.$pristine) {
		                scope.buttonStyle = 'btn-default';
		            }
		      		
		      		scope.$watch('btnSuccess', function(newValue) {
			      		if(scope.btnSuccess == 'success'){
		    				scope.buttonStyle = 'btn-success';
			            }else if(scope.btnSuccess == 'fail'){
			            	scope.buttonStyle = 'btn-danger';
			            }else{
			            	scope.buttonStyle = 'btn-default';
			            }
			        });

		      		/*scope.$watch('dataList', function(newValue) {
					    if (newValue !== undefined) {
					        console.log(scope.dataList);
					    }
					})*/

		      		/*scope.collapseID = attrs.listName ;
		      		scope.$watch('checkedSuccess', function(newValue) {
			      		if(scope.checkedSuccess == true){
		    				scope.panelStyle = 'panel-success';
			            }else{
			            	scope.panelStyle = 'panel-default';
			            }
			        });*/
		    	}
			};
		});
	
}());

