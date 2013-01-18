'use strict'

/**
* Defines a menu item.
*/

Application.Directives
	.directive('menuItem', function() {
	  return {
	  	restrict : 'E',
	  	replace : true,
	  	templateUrl : 'js/directives/templates/template.menu-item.html',
	  	scope: {
	  		id : '=id',
	  		name : '=name'
	  	},
	  	//TODO: define directive controller.
	  	link : function(scope, element, attrs) {
	    },
	  }
  });