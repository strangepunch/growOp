(function(){
	"use strict";

	angular
		.module("growOpApp")
		.directive('betterButton', function () {
			return {
		      restrict: 'AE',
		      scope: {
		    	  ngModel: '@',
		          onFilled: '@',
		          action: '&'
		        },
		      template: '<div class="betterbutton"><div class="outterBorder" style="border-color: {{btnColor}}" ng-click="action()"><div class="innerName" style="color: {{btnColor}}"><span class={{DisplayShape}} aria-hidden="true"></span></div></div>',
		      link: function (scope, elem, attrs) {
		    	  
		    	  scope.DisplayShape = 'glyphicon glyphicon-plus';
		    	  scope.checkButton = 'glyphicon glyphicon-ok';
		    	  scope.addButton = 'glyphicon glyphicon-plus';
		    	  scope.backButton = 'glyphicon glyphicon-chevron-left';
		    	  scope.resetButtonA = 'glyphicon glyphicon-remove';
		    	  scope.resetButtonB = 'glyphicon glyphicon-remove-sign';
		    	  scope.dashButton = 'glyphicon glyphicon-dashboard';
		    	  scope.btnColor = 'orange';
		    	  
		    	  elem.css('border-color', 'red');
		    	  
		    	  if(attrs.ngModel == 'add'){
		    		  scope.DisplayShape = scope.addButton;
	    		  }
		    	  
		    	  if(attrs.ngModel == 'back'){
    				  scope.DisplayShape = scope.backButton;
	    		  }
		    	  
		    	  if(attrs.ngModel == 'remove'){
    				  scope.DisplayShape = scope.resetButtonA;
	    		  }
		    	  		    	  
		    	  elem.bind('click', function() {
		    		  
		    		  if(attrs.onFilled == 'false'){
		    			  scope.$apply(function() {
		    				  scope.btnColor = 'red';
		    		      });
		    		  }
		    		  
		    		  if(attrs.onFilled == 'true'){
		    			  setToCheck();
		    			  setTimeout(setToAdd, 1000);
		    		  }
		    		  
		    		  if(attrs.onFilled == 'removed'){
		    			  scope.$apply(function() {
		    				  scope.DisplayShape = scope.resetButtonB;
			    			  setTimeout(function() {
			    				  scope.DisplayShape = scope.resetButtonA;
				    		  }, 1000);
			    		  });  
		    		  }
		    		
	    	      });
		    	  
		    	  elem.bind('mouseover', function() {
	    	        elem.css('cursor', 'pointer');
	    	      });
		    	  
		    	  function setToCheck(){
		    		  scope.$apply(function() {
		 				 scope.btnColor = 'green';
		 				 scope.DisplayShape = scope.checkButton;
		    		  });
		    	  }
		 		
		    	  function setToAdd(){
		    		  scope.$apply(function() {
		    			  scope.btnColor = 'orange';
		    			  scope.DisplayShape = scope.addButton;
		    		  });
		    	  }
		    	  
		      }
			};
		});
	
}());

