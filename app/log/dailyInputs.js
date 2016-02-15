(function(){
	"use strict";

	angular
		.module("growOpApp")
		.directive('dailyInputs', function () {
			return {
		      restrict: 'AE',
		      scope: {
		    	  dataList: '=arryList',
		          listName: '@',
		          action: '&'
		        },
		      controller: 'DailyInputsCtrl',
			  controllerAs: 'vm',
		      templateUrl: 'app/log/dailyInputs.html',
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

			        scope.$watch('btnSuccessEmail', function(newValue) {
			      		if(scope.btnSuccessEmail == 'success'){
		    				scope.emailButtonStyle = 'btn-success';
			            }else if(scope.btnSuccessEmail == 'fail'){
			            	scope.emailButtonStyle = 'btn-danger';
			            }else{
			            	scope.emailButtonStyle = 'btn-default';
			            }
			        });

			        scope.$watch('submitSuccess', function(newValue) {
			      		if(scope.submitSuccess == 'success'){
		    				scope.submitButtonStyle = 'btn-success';
			            }else if(scope.submitSuccess == 'fail'){
			            	scope.submitButtonStyle = 'btn-danger';
			            }else{
			            	scope.submitButtonStyle = 'btn-default';
			            }
			        });

		    	  	/*elem.css('border-color', 'red');*/
		    	  
		    	  	/*elem.bind('mouseover', function() {
	    	        	elem.css('cursor', 'pointer');
	    	      	});*/
		    	}
			};
		});
	
}());

