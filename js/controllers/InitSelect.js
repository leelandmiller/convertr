app.controller('InitSelect', ['$timeout', function($timeout) { 
	//Use the timeout function to delay the execution    
  $timeout(function () {
  	//Initializing the select boxes once the routing has been completed
  	$('select').material_select();  	
  }, 0); 
}]);