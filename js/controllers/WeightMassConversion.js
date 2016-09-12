conversionControllers.controller('WeightMassConversion', function($scope, materializeInput) {

	//The available units to convert from and to
	$scope.weightMassUnits = [{name:"Grams", mathjsLabel: 'g'}, {name: "Kilograms", mathjsLabel: 'kg'}, {name: "Ounces", mathjsLabel: 'oz'}, {name: "Pounds", mathjsLabel: 'lbs'}, {name: "Tons", mathjsLabel: 'ton'}];
  
  //Initialize the coefficient and exponent inputs to null
  $scope.coefficientInput = $scope.exponentInput = null;
  
  //Sets the exponent input to zero if it is null
  $scope.setExponentInput = function () {
  	if ($scope.exponentInput == null) 
  		$scope.exponentInput = 0;
  };  
  
  //Initialize the decimal range to 2
  $scope.decimalRange = 2;    
  
  //Determine the proper conversion equation based on the select elements
	$scope.output = function() {
		if ($scope.coefficientInput != null){
			return math.unit($scope.coefficientInput + 'E' + $scope.exponentInput + ' ' + $scope.unitsFrom.toLowerCase()).to($scope.unitsTo.toLowerCase()).toString();
		}
		else {
			return '';	
		}
	}; 
	
	//Check if the input is below zero. If it is reset it to zero.
	$scope.checkInput = function () {
		if ($scope.coefficientInput == null || $scope.exponentInput == null) {}
		else if ($scope.coefficientInput < 0) {
			$scope.coefficientInput = 0;
			$scope.exponentInput = 0;
		}
		else if ($scope.exponentInput > 100) {
			$scope.exponentInput = 100;
		}		
  };
	
	//Add the materializeInput service to the current scope for use with angular directives
	$scope.enableInput = function() {
		materializeInput.enableInput();
	};
	
	//Add the materializeInput service to the current scope for use with angular directives
	$scope.resetSelect = function() {
		materializeInput.enableSelect();
		materializeInput.clearDropdown();
	};
});