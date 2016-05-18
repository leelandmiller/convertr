// JavaScript Document


/*--------------Temperature ----------*/
function setFahrenheitToCelsius() {
	setConversion(arguments.callee);
}

function setCelsiusToFahrenheit() {
	setConversion(arguments.callee);
}

function setKelvinToCelsius() {
	setConversion(arguments.callee);
}

function setCelsiusToKelvin() {
	setConversion(arguments.callee);
}

function setKelvinToFahrenheit() {
	setConversion(arguments.callee);
}

function setFahrenheitToKelvin() {
	setConversion(arguments.callee);
}
/*--------------------------------*/

/*--------------Weights ----------*/

function setPoundsToGrams() {
	setConversion(arguments.callee);
}

function setGramsToPounds() {
	setConversion(arguments.callee);
}

function setPoundsToOunces() {
	setConversion(arguments.callee);
}

function setOuncesToPounds() {
	setConversion(arguments.callee);
}

function setOuncesToGrams() {
	setConversion(arguments.callee);
}

function setGramsToOunces() {
	setConversion(arguments.callee);
}

/*--------------------------------*/

/*-------------Distance ----------*/
function setMetersToInches() {
	setConversion(arguments.callee);
}

function setMetersToFeet() {
	setConversion(arguments.callee);
}

function setMetersToYards() {
	setConversion(arguments.callee);
}

function setMetersToMiles() {
	setConversion(arguments.callee);
}

function setMilesToMeters() {
	setConversion(arguments.callee);
}

function setYardsToMeters() {
	setConversion(arguments.callee);
}

function setFeetToMeters() {
	setConversion(arguments.callee);
}

function setInchesToMeters() {
	setConversion(arguments.callee);
}


function setInchesToFeet() {
	setConversion(arguments.callee);
}

function setFeetToYards() {
	setConversion(arguments.callee);
}

function setFeetToMiles() {
	setConversion(arguments.callee);
}

function setInchesToMiles() {
	setConversion(arguments.callee);
}

function setInchesToYards() {
	setConversion(arguments.callee);
}

function setYardsToMiles() {
	setConversion(arguments.callee);
}

function setKilometersToMiles() {
	setConversion(arguments.callee);
}

function setFeetToInches() {
	setConversion(arguments.callee);
}

function setYardsToFeet() {
	setConversion(arguments.callee);
}

function setMilesToFeet() {
	setConversion(arguments.callee);
}

function setMilesToInches() {
	setConversion(arguments.callee);
}

function setYardsToInches() {
	setConversion(arguments.callee);
}

function setMilesToYards() {
	setConversion(arguments.callee);
}

function setMilesToKilometers() {
	setConversion(arguments.callee);
}


/*--------------Time----------*/

function setSecondsToMinutes() {
	setConversion(arguments.callee);
}

function setMinutesToHours() {
	setConversion(arguments.callee);
}

function setHoursToDays() {
	setConversion(arguments.callee);
}

function setDaysToYears() {
	setConversion(arguments.callee);
}

function setSecondsToHours() {
	setConversion(arguments.callee);
}

function setSecondsToDays() {
	setConversion(arguments.callee);
}

function setSecondsToYears() {
	setConversion(arguments.callee);
}

function setMinutesToDays() {
	setConversion(arguments.callee);
}

function setMinutesToYears() {
	setConversion(arguments.callee);
}

function setHoursToYears() {
	setConversion(arguments.callee);
}

function setYearsToDays() {
	setConversion(arguments.callee);
}

function setDaysToHours() {
	setConversion(arguments.callee);
}

function setHoursToMinutes() {
	setConversion(arguments.callee);
}

function setMinutesToSeconds() {
	setConversion(arguments.callee);
}

function setYearsToHours() {
	setConversion(arguments.callee);
}

function setYearsToMinutes() {
	setConversion(arguments.callee);
}

function setYearsToSeconds() {
	setConversion(arguments.callee);
}

function setDaysToMinutes() {
	setConversion(arguments.callee);
}

function setDaysToSeconds() {
	setConversion(arguments.callee);
}

function setHoursToSeconds() {
	setConversion(arguments.callee);
}

/*-----------------------------*/

/*--------------Speed/Velocity ----------*/
function msToMph() {
  document.getElementById("title").innerHTML = "Meters Per Second to Miles Per Hour";
  document.getElementById("output").innerHTML = "";
  document.getElementById("button").onclick = metersPerSecToMph;
}

function msToKmh() {
  document.getElementById("title").innerHTML = "Meters Per Second to Kilometers Per Hour";
  document.getElementById("output").innerHTML = "";
  document.getElementById("button").onclick = metersPerSecToKmh;
}

function msToKnots() {
  document.getElementById("title").innerHTML = "Meters Per Second to Knots";
  document.getElementById("output").innerHTML = "";
  document.getElementById("button").onclick = metersPerSecToKnots;
}

function msToFtPerSec() {
  document.getElementById("title").innerHTML = "Meters Per Second to Feet Per Second";
  document.getElementById("output").innerHTML = "";
  document.getElementById("button").onclick = metersPerSecToFeetPerSec;
}
/*-----------------------------*/


/*--------------Area Formulas ----------*/
function setAreaOfSq() {
  document.getElementById("title").innerHTML = "Area of a Square";
  document.getElementById("output").innerHTML = "";
  
  document.getElementById("button").onclick = areaOfSquare;
}

function setAreaOfRect() {
  document.getElementById("title").innerHTML = "Area of a Rectangle";
  document.getElementById("output").innerHTML = "";
  
  document.getElementById("input2-div").innerHTML = '<label for="input1">Width</label><input class="center-text form-control" type="number" id="input2"/><label for="input2">Height</label>';
  document.getElementById("button").onclick = areaOfRectangle;
}

function setAreaOfPara() {
  document.getElementById("title").innerHTML = "Area of a Parallelogram";
  document.getElementById("output").innerHTML = "";
  
  document.getElementById("input2-div").innerHTML = '<label for="input1">Width</label><input class="center-text form-control" type="number" id="input2"/><label for="input2">Height</label>';
  document.getElementById("button").onclick = areaOfParallelogram;
}

function setAreaOfATrap() {
  document.getElementById("title").innerHTML = "Area of a Trapezoid";
  document.getElementById("output").innerHTML = "";
  document.getElementById("button").onclick = areaOfTrapezoid;
}

function setAreaOfCirc() {
  document.getElementById("title").innerHTML = "Area of a Circle";
  document.getElementById("output").innerHTML = "";
  document.getElementById("button").onclick = areaOfCircle;
}

function setAreaOfEllip() {
  document.getElementById("title").innerHTML = "Area of an Ellipse";
  document.getElementById("output").innerHTML = "";
  document.getElementById("button").onclick = areaOfEllipse;
}

function setAreaOfTri() {
  document.getElementById("title").innerHTML = "Area of a Triangle";
  document.getElementById("output").innerHTML = "";
  document.getElementById("button").onclick = areaOfTriangle;
}

function setAreaOfEquiTri() {
  document.getElementById("title").innerHTML = "Area of a Equilateral Triangle";
  document.getElementById("output").innerHTML = "";
  document.getElementById("button").onclick = areaOfEquilateralTriangle;
}

function setAreaOfSec() {
  document.getElementById("title").innerHTML = "Area of a Sector";
  document.getElementById("output").innerHTML = "";
  document.getElementById("button").onclick = areaOfSector;
}

function setHeroFormula() {
  document.getElementById("title").innerHTML = "Heron's Formula";
  document.getElementById("output").innerHTML = "";
  document.getElementById("button").onclick = heronsFormula;
}


function setSquareMetersToSquareFeet() {
	setConversion(arguments.callee);
}

function setSquareMetersToSquareYards() {
	setConversion(arguments.callee);
}

function setSquareFeetToSquareMeters() {
	setConversion(arguments.callee);
}

function setSquareFeetToSquareYards() {
	setConversion(arguments.callee);
}

function setSquareYardsToSquareFeet() {
	setConversion(arguments.callee);
}

function setSquareYardsToSquareMeters() {
	setConversion(arguments.callee);
}


/*-----------------------------*/

/*-------Angles------*/
function setRadiansToDegrees() {
	setConversion(arguments.callee);
}

function setDegreesToRadians() {
	setConversion(arguments.callee);
}


/*-------Volume------*/
function setCubicMetersToCubicFeet() {
	setConversion(arguments.callee);
}

function setCubicMetersToCubicYards() {
	setConversion(arguments.callee);
}

function setCubicFeetToCubicMeters() {
	setConversion(arguments.callee);
}

function setCubicFeetToCubicYards() {
	setConversion(arguments.callee);
}

function setCubicYardsToCubicFeet() {
	setConversion(arguments.callee);
}

function setCubicYardsToCubicMeters() {
	setConversion(arguments.callee);
}