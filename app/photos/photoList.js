(function(){
	"use strict";

	angular
		.module("growOpApp")
		.directive('photoList', function () {
			return {
		      restrict: 'AE',
		      scope: {
		    	  dataList: '=arryList',
		          listName: '@',
		          action: '&'
		        },
		      controller: 'PhotoListCtrl',
			  controllerAs: 'vm',
		      templateUrl: 'app/photos/photoList.html',
		      link: function (scope, elem, attrs) {
		      		//console.log('listName', attrs.listName);

		      		/*scope.$watch('dataList', function(newValue) {
					    if (newValue !== undefined) {
					        console.log(scope.dataList);
					    }
					})*/

		      		scope.collapseID = attrs.listName ;
		      		scope.$watch('checkedSuccess', function(newValue) {
			      		if(scope.checkedSuccess == true){
		    				scope.panelStyle = 'panel-success';
			            }else{
			            	scope.panelStyle = 'panel-default';
			            }
			        });
		    	}
			};
		});
	
}());

