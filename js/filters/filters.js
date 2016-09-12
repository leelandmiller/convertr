//Formats and rounds the coefficient decimal value
app.filter('decimalFormat', function() {
  return function(results, decimalPlaces) {
  	if(results == null) 
  		return ''; 
  	var newResult = results.split(' ')[0];
  	if (newResult.includes('e')) {
  		var coefficientResult = newResult.split('e')[0];
  		var roundedCoefficientResult = math.round(coefficientResult, decimalPlaces); 
			newResult = roundedCoefficientResult + 'e' + newResult.split('e')[1];
		}
		else {
			newResult = math.round(newResult, decimalPlaces);
		}
  	for (var i = 1; i < results.split(' ').length; i++) {
  		newResult += ' ' + results.split(' ')[i];
  	}
    return newResult;
  };
});
//Appends the degree symbol onto the result string
app.filter('temp', function() {
  return function(results) { 
  	var results = results.toString();
  	return results.split(' ')[0] + String.fromCharCode(176) + ' ' + (results.split(' ')[1]);       
  };
});
//Filter the weight/mass units to human readable strings
app.filter('weightMassUnitsFilter', function() {
  return function(results) {
  	var results = results.toString();
  	var weightMassUnit = results.split(' ')[1];
  	switch(weightMassUnit) { 
  		case 'g': 
  			return results.split(' ')[0] + ' ' + 'grams';  
  		case 'kg': 
  			return results.split(' ')[0] + ' ' + 'kilograms';       
  		case 'oz': 
  			return results.split(' ')[0] + ' ' + 'ounces';       
  		case 'lbs': 
  			return results.split(' ')[0] + ' ' + 'pounds';       
  		case 'ton': 
  			return results.split(' ')[0] + ' ' + 'tons';     			     
  		default:
  			return '';    			    			    			    			    			    			     
  	}
  };
});
//Filter the area units to human readable strings
app.filter('areaUnitsFilter', function() {
  return function(results) {
  	var results = results.toString();
  	var areaUnit = results.split(' ')[1];
  	switch(areaUnit) { 
  		case 'm2': 
  			return results.split(' ')[0] + ' ' + 'square meters';  
  		case 'km2': 
  			return results.split(' ')[0] + ' ' + 'square kilometers';       
  		case 'sqin': 
  			return results.split(' ')[0] + ' ' + 'square inches';       
  		case 'sqft': 
  			return results.split(' ')[0] + ' ' + 'square feet';       
  		case 'sqyd': 
  			return results.split(' ')[0] + ' ' + 'square yards';       
  		case 'sqmi': 
  			return results.split(' ')[0] + ' ' + 'square miles';       
  		case 'acres': 
  			return results.split(' ')[0] + ' ' + 'acres';  
  		case 'hectares': 
  			return results.split(' ')[0] + ' ' + 'hectares';      			     
  		default:
  			return '';    			    			    			    			    			    			     
  	}
  };
});
//Filter the volume units to human readable strings
app.filter('volumeUnitsFilter', function() {
  return function(results) {
  	var results = results.toString();    	
  	var volumeUnit = results.split(' ')[1];
  	switch(volumeUnit) { 
  		case 'm3': 
  			return results.split(' ')[0] + ' ' + 'cubic meters';  
  		case 'liter': 
  			return results.split(' ')[0] + ' ' + 'liters';       
  		case 'cc': 
  			return results.split(' ')[0] + ' ' + 'cubic centimeters';       
  		case 'cuin': 
  			return results.split(' ')[0] + ' ' + 'cubic inches';       
  		case 'cuft': 
  			return results.split(' ')[0] + ' ' + 'cubic feet';       
  		case 'cuyd': 
  			return results.split(' ')[0] + ' ' + 'cubic yards';       
  		case 'teaspoon': 
  			return results.split(' ')[0] + ' ' + 'teaspoons';  
  		case 'tablespoon': 
  			return results.split(' ')[0] + ' ' + 'tablespoons';      			     
  		default:
  			return '';    			    			    			    			    			    			     
  	}
  };
});