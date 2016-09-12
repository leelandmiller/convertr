app.service('materializeInput', function($timeout) {
	//Enable the second select element 
  this.enableSelect = function () {
  	$timeout(function() {      		
	  	$('#unitsTo, .select-wrapper .select-dropdown').removeAttr('disabled');
	  	$('.select-wrapper span').removeClass('disabled');
	  	$('select').material_select();  		
  	}, 0);	  	  	
  }; 
  //Clear the empty option element(s) from the second select element  
  this.clearDropdown = function () {
  	$timeout(function() {    
	  	var dropdown = document.getElementsByClassName("dropdown-content select-dropdown")[1];	  	
	  	while (dropdown.firstChild.firstChild.innerHTML == "") {	  		
	  		dropdown.removeChild(dropdown.firstChild);
	  	}
  	}, 0);	
  };
  //Enable the input element  
  this.enableInput = function () {
		$timeout(function() {      
	  	$('.main-input').removeAttr('disabled'); 
    }, 0);   
  };
});
