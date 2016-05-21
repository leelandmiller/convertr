/**
 * Created by KarandipBasra, Chris DeSoto, Leeland Miller on 4/23/16.
 */

// Temperature Conversions

function fahrenheitToCelsius() {
    var input = document.getElementById('input1').value;
    var parsedInput = parseInt(input);

    var converted = (5/9) * (parsedInput -32);
	converted = converted.toFixed(2);
	document.getElementById("output").innerHTML = converted + "&deg;C";
}

function celsiusToFahrenheit() {
    var input = document.getElementById('input1').value;
    var parsedInput = parseInt(input);

    var converted = (parsedInput * 9/5) + 32;
	converted = converted.toFixed(2);
	document.getElementById("output").innerHTML = converted + "&deg;C";
}

function kelvinToCelsius() {
    var input = document.getElementById('input1').value;
    var parsedInput = parseInt(input);

    var converted = parsedInput - 273.15;
	converted = converted.toFixed(2);
	document.getElementById("output").innerHTML = converted + "&deg;C";
}

function celsiusToKelvin() {
    var input = document.getElementById('input1').value;
    var parsedInput = parseInt(input);

    var converted = parsedInput + 273.15;
	converted = converted.toFixed(2);
	document.getElementById("output").innerHTML = converted + "&deg;K";
	
}

function kelvinToFahrenheit() {
    var input = document.getElementById('input1').value;
    var parsedInput = parseInt(input);

    var converted = ((9/5)*(parsedInput - 273.15))+32;
	converted = converted.toFixed(2);
	document.getElementById("output").innerHTML = converted + "&deg;F";
}

function fahrenheitToKelvin() {
    var input = document.getElementById('input1').value;
    var parsedInput = parseInt(input);

    var converted = ((5/9) * (parsedInput -32)) + 273.15;
	converted = converted.toFixed(2);
	document.getElementById("output").innerHTML = converted + "&deg;K";
}

// Weight/Mass Conversions

function poundsToGrams() {
    var input = document.getElementById('input1').value;
    var parsedInput = parseInt(input);

    var converted =  parsedInput / 0.0022046;
	converted = converted.toFixed(2);
	document.getElementById("output").innerHTML = converted + " grams";
	
}

function gramsToPounds() {
    var input = document.getElementById('input1').value;
    var parsedInput = parseInt(input);

    var converted = parsedInput * 0.0022046;
	converted = converted.toFixed(2);
	document.getElementById("output").innerHTML = converted + " pounds";	
}

function poundsToOunces() {
    var input = document.getElementById('input1').value;
    var parsedInput = parseInt(input);

    var converted = parsedInput * 16;
	document.getElementById("output").innerHTML = converted + " ounces";
}

function ouncesToPounds() {
    var input = document.getElementById('input1').value;
    var parsedInput = parseInt(input);

    var converted = parsedInput / 16;
	document.getElementById("output").innerHTML = converted + " pounds";
}

function ouncesToGrams() {
    var input = document.getElementById('input1').value;
    var parsedInput = parseInt(input);

    var converted = parsedInput / 0.035274;
	converted = converted.toFixed(2);
	document.getElementById("output").innerHTML = converted + " grams";
}

function gramsToOunces() {
    var input = document.getElementById('input1').value;
    var parsedInput = parseInt(input);

    var converted = parsedInput * 0.035274;
	converted = converted.toFixed(2);
	document.getElementById("output").innerHTML = converted + " ounces";
}

// Time Conversions

/* Ascending Units */
function secondsToMinutes() {
    var input = document.getElementById('input1').value;
    var parsedInput = parseInt(input);

    var converted = parsedInput / 60;
	converted = converted.toFixed(2);
	document.getElementById("output").innerHTML = converted + " minutes";
}

function minutesToHours() {
    var input = document.getElementById('input1').value;
    var parsedInput = parseInt(input);

    var converted = parsedInput / 60;
	converted = converted.toFixed(2);
	document.getElementById("output").innerHTML = converted + " hours";
}

function hoursToDays() {
    var input = document.getElementById('input1').value;
    var parsedInput = parseInt(input);

    var converted = parsedInput / 24;
	converted = converted.toFixed(2);
	document.getElementById("output").innerHTML = converted + " days";
}

function daysToYears() {
    var input = document.getElementById('input1').value;
    var parsedInput = parseInt(input);

    var converted = parsedInput / 365;
	converted = converted.toFixed(2);
	document.getElementById("output").innerHTML = converted + " years";
}

function secondsToHours() {
    var input = document.getElementById('input1').value;
    var parsedInput = parseInt(input);

    var converted = parsedInput / 3600;
	converted = converted.toFixed(2);
	document.getElementById("output").innerHTML = converted + " hours";
}

function secondsToDays() {
    var input = document.getElementById('input1').value;
    var parsedInput = parseInt(input);

    var converted = parsedInput / 86400;
	converted = converted.toFixed(2);
	document.getElementById("output").innerHTML = converted + " days";
}

function secondsToYears() {
    var input = document.getElementById('input1').value;
    var parsedInput = parseInt(input);

    var converted = parsedInput * (3.17098 * Math.pow(10,-8));
	converted = converted.toFixed(2);
	document.getElementById("output").innerHTML = converted + " years";
}

function minutesToDays() {
    var input = document.getElementById('input1').value;
    var parsedInput = parseInt(input);

    var converted = parsedInput * 0.000694444;
	converted = converted.toFixed(2);
	document.getElementById("output").innerHTML = converted + " days";
}

function minutesToYears() {
    var input = document.getElementById('input1').value;
    var parsedInput = parseInt(input);

    var converted = parsedInput * (1.90259 * Math.pow(10,-6));
	converted = converted.toFixed(2);
	document.getElementById("output").innerHTML = converted + " years";
}

function hoursToYears() {
    var input = document.getElementById('input1').value;
    var parsedInput = parseInt(input);

    var converted = parsedInput * 0.000114155;
	converted = converted.toFixed(2);
	document.getElementById("output").innerHTML = converted + " years";
}

/* Descending Units */
function yearsToDays() {
    var input = document.getElementById('input1').value;
    var parsedInput = parseInt(input);

    var converted = parsedInput * 365;
	converted = converted.toFixed(2);
	document.getElementById("output").innerHTML = converted + " days";
}

function daysToHours() {
    var input = document.getElementById('input1').value;
    var parsedInput = parseInt(input);

    var converted = parsedInput * 24;
	converted = converted.toFixed(2);
	document.getElementById("output").innerHTML = converted + " hours";
}

function hoursToMinutes() {
    var input = document.getElementById('input1').value;
    var parsedInput = parseInt(input);

    var converted = parsedInput * 60;
	converted = converted.toFixed(2);
	document.getElementById("output").innerHTML = converted + " minutes";
}

function minutesToSeconds() {
    var input = document.getElementById('input1').value;
    var parsedInput = parseInt(input);

    var converted = parsedInput * 60;
	converted = converted.toFixed(2);
	document.getElementById("output").innerHTML = converted + " seconds";
}

function yearsToHours() {
    var input = document.getElementById('input1').value;
    var parsedInput = parseInt(input);

    var converted = parsedInput * 8760;
	converted = converted.toFixed(2);
	document.getElementById("output").innerHTML = converted + " hours";
}

function yearsToMinutes() {
    var input = document.getElementById('input1').value;
    var parsedInput = parseInt(input);

    var converted = parsedInput * 525600;
	converted = converted.toFixed(2);
	document.getElementById("output").innerHTML = converted + " minutes";
}

function yearsToSeconds() {
    var input = document.getElementById('input1').value;
    var parsedInput = parseInt(input);

    var converted = parsedInput * (3.154 * Math.pow(10,7));
	converted = converted.toFixed(2);
	document.getElementById("output").innerHTML = converted + " seconds";
}

function daysToMinutes() {
    var input = document.getElementById('input1').value;
    var parsedInput = parseInt(input);

    var converted = parsedInput * 1440;
	converted = converted.toFixed(2);
	document.getElementById("output").innerHTML = converted + " minutes";
}

function daysToSeconds() {
    var input = document.getElementById('input1').value;
    var parsedInput = parseInt(input);

    var converted = parsedInput * 86400;
	converted = converted.toFixed(2);
	document.getElementById("output").innerHTML = converted + " seconds";
}

function hoursToSeconds() {
    var input = document.getElementById('input1').value;
    var parsedInput = parseInt(input);

    var converted = parsedInput * 3600;
	converted = converted.toFixed(2);
	document.getElementById("output").innerHTML = converted + " seconds";
}

// Length/Distance Conversions

function metersToInches() {
    var input = document.getElementById('input1').value;
    var parsedInput = parseInt(input);

	var converted = parsedInput * 39.3701;
	converted = converted.toFixed(2);
    document.getElementById("output").innerHTML = converted + " inches";
}

function metersToFeet() {
    var input = document.getElementById('input1').value;
    var parsedInput = parseInt(input);

	var converted = (parsedInput * 3.28084);
	converted = converted.toFixed(2);
    document.getElementById("output").innerHTML = converted + " feet";
}

function metersToYards() {
    var input = document.getElementById('input1').value;
    var parsedInput = parseInt(input);

	var converted = (parsedInput * 1.09361);
	converted = converted.toFixed(2);
    document.getElementById("output").innerHTML = converted + " yard";
}

function metersToMiles() {
    var input = document.getElementById('input1').value;
    var parsedInput = parseInt(input);

	var converted = (parsedInput * 0.000621371);
	converted = converted.toFixed(2);
    document.getElementById("output").innerHTML = converted + " miles";
}

function milesToMeters() {
    var input = document.getElementById('input1').value;
    var parsedInput = parseInt(input);

	var converted = (parsedInput * 1609.34);
	converted = converted.toFixed(2);
    document.getElementById("output").innerHTML = converted + " meters";
}

function yardsToMeters() {
    var input = document.getElementById('input1').value;
    var parsedInput = parseInt(input);

	var converted = (parsedInput * 0.9144);
	converted = converted.toFixed(2);
    document.getElementById("output").innerHTML = converted + " meters";
}

function feetToMeters() {
    var input = document.getElementById('input1').value;
    var parsedInput = parseInt(input);

	var converted = (parsedInput * 0.3048);
	converted = converted.toFixed(2);
    document.getElementById("output").innerHTML = converted + " meters";
}

function inchesToMeters() {
    var input = document.getElementById('input1').value;
    var parsedInput = parseInt(input);

	var converted = (parsedInput * 0.0254);
	converted = converted.toFixed(2);
    document.getElementById("output").innerHTML = converted + " meters";
}

/* Ascending Units */
function inchesToFeet() {
    var input = document.getElementById('input1').value;
    var parsedInput = parseInt(input);

    var converted = parsedInput / 12;
	converted = converted.toFixed(2);
    document.getElementById("output").innerHTML = converted + " feet";
	
}

function feetToYards() {
    var input = document.getElementById('input1').value;
    var parsedInput = parseInt(input);

    var converted = parsedInput / 3;
	converted = converted.toFixed(2);
    document.getElementById("output").innerHTML = converted + " yards";
}

function feetToMiles() {
    var input = document.getElementById('input1').value;
    var parsedInput = parseInt(input);

    var converted = parsedInput / 5280;
	converted = converted.toFixed(2);
    document.getElementById("output").innerHTML = converted + " miles";
}

function inchesToMiles() {
    var input = document.getElementById('input1').value;
    var parsedInput = parseInt(input);

    var converted = parsedInput * 0.0000157828;
	converted = converted.toFixed(2);
    document.getElementById("output").innerHTML = converted + " miles";
}

function inchesToYards() {
    var input = document.getElementById('input1').value;
    var parsedInput = parseInt(input);

    var converted = parsedInput * 0.0277778;
	converted = converted.toFixed(2);
    document.getElementById("output").innerHTML = converted + " yards";
}

function yardsToMiles() {
    var input = document.getElementById('input1').value;
    var parsedInput = parseInt(input);

    var converted = parsedInput * 0.000568182;
	converted = converted.toFixed(2);
    document.getElementById("output").innerHTML = converted + " miles";
}

function kilometersToMiles() {
    var input = document.getElementById('input1').value;
    var parsedInput = parseInt(input);

    var converted = parsedInput * 0.621371;
	converted = converted.toFixed(2);
    document.getElementById("output").innerHTML = converted + " miles";
}

/* Descending Units */
function feetToInches() {
    var input = document.getElementById('input1').value;
    var parsedInput = parseInt(input);

    var converted = parsedInput * 12;
	converted = converted.toFixed(2);
    document.getElementById("output").innerHTML = converted + " inches";
}

function yardsToFeet() {
    var input = document.getElementById('input1').value;
    var parsedInput = parseInt(input);

   	var converted = parsedInput * 3;
	converted = converted.toFixed(2);
    document.getElementById("output").innerHTML = converted + " feet";
}

function milesToFeet() {
    var input = document.getElementById('input1').value;
    var parsedInput = parseInt(input);

    var converted = parsedInput * 5280;
	converted = converted.toFixed(2);
    document.getElementById("output").innerHTML = converted + " feet";
}

function milesToInches() {
    var input = document.getElementById('input1').value;
    var parsedInput = parseInt(input);

    var converted = parsedInput * 63360;
	converted = converted.toFixed(2);
    document.getElementById("output").innerHTML = converted + " inches";
}

function yardsToInches() {
    var input = document.getElementById('input1').value;
    var parsedInput = parseInt(input);

    var converted = parsedInput * 36;
	converted = converted.toFixed(2);
    document.getElementById("output").innerHTML = converted + " inches";
}

function milesToYards() {
    var input = document.getElementById('input1').value;
    var parsedInput = parseInt(input);
	
    var converted = parsedInput * 1760;
	converted = converted.toFixed(2);
    document.getElementById("output").innerHTML = converted + " yards";
}

function milesToKilometers() {
    var input = document.getElementById('input1').value;
    var parsedInput = parseInt(input);

    var converted = parsedInput * 1.609344;
	converted = converted.toFixed(2);
    document.getElementById("output").innerHTML = converted + " kilometers";
}

// Speed/Velocity Conversions

function metersPerSecToMph() {
    var input = document.getElementById('input1').value;
    var parsedInput = parseInt(input);

    var converted = parsedInput * 2.236936;
	converted = converted.toFixed(2);
	document.getElementById("output").innerHTML = converted + " MPH";
}

function metersPerSecToKmh() {
    var input = document.getElementById('input1').value;
    var parsedInput = parseInt(input);

    var converted = parsedInput * 3.6;
	converted = converted.toFixed(2);
	document.getElementById("output").innerHTML = converted + " KmPH";
}

function metersPerSecToKnots() {
    var input = document.getElementById('input1').value;
    var parsedInput = parseInt(input);

    var converted = parsedInput * 1.943844;
	converted = converted.toFixed(2);
	document.getElementById("output").innerHTML = converted + " knots";
}

function metersPerSecToFeetPerSec() {
    var input = document.getElementById('input1').value;
    var parsedInput = parseInt(input);

    var converted = parsedInput * 3.280840;
	converted = converted.toFixed(2);
	document.getElementById("output").innerHTML = converted + " feet per second";
}

// SI Prefixes > 1

function toDecameters(meters) {
    var input = document.getElementById('input1').value;
    var parsedInput = parseInt(input);

    return meters * 10;
}

function toHectometers(meters) {
    var input = document.getElementById('input1').value;
    var parsedInput = parseInt(input);

    return meters *	Math.pow(10,2);
}

function toKilometers(meters) {
    var input = document.getElementById('input1').value;
    var parsedInput = parseInt(input);

    return meters *	Math.pow(10,3);
}

function toMegameters(meters) {
    var input = document.getElementById('input1').value;
    var parsedInput = parseInt(input);

    return meters *	Math.pow(10,6);
}

function toGigameters(meters) {
    var input = document.getElementById('input1').value;
    var parsedInput = parseInt(input);

    return meters *	Math.pow(10,9);
}

function toTerameters(meters) {
    var input = document.getElementById('input1').value;
    var parsedInput = parseInt(input);

    return meters *	Math.pow(10,12);
}

function toPetameters(meters) {
    var input = document.getElementById('input1').value;
    var parsedInput = parseInt(input);

    return meters *	Math.pow(10,15);
}

function toExameters(meters) {
    var input = document.getElementById('input1').value;
    var parsedInput = parseInt(input);

    return meters *	Math.pow(10,18);
}

function toZettameters(meters) {
    var input = document.getElementById('input1').value;
    var parsedInput = parseInt(input);

    return meters *	Math.pow(10,21);
}

function toYottameters(meters) {
    var input = document.getElementById('input1').value;
    var parsedInput = parseInt(input);

    return meters *	Math.pow(10,24);
}

// SI Prefixes < 1

function toDecimeters(meters) {
    var input = document.getElementById('input1').value;
    var parsedInput = parseInt(input);

    return meters * Math.pow(10,-1);
}

function toCentimeters(meters) {
    var input = document.getElementById('input1').value;
    var parsedInput = parseInt(input);

    return meters *	Math.pow(10,-2);
}

function toMillimeters(meters) {
    var input = document.getElementById('input1').value;
    var parsedInput = parseInt(input);

    return meters *	Math.pow(10,-3);
}

function toMicrometers(meters) {
    var input = document.getElementById('input1').value;
    var parsedInput = parseInt(input);

    return meters *	Math.pow(10,-6);
}

function toNanometers(meters) {
    var input = document.getElementById('input1').value;
    var parsedInput = parseInt(input);

    return meters *	Math.pow(10,-9);
}

function toPicometers(meters) {
    var input = document.getElementById('input1').value;
    var parsedInput = parseInt(input);

    return meters *	Math.pow(10,-12);
}

function toFemtometers(meters) {
    var input = document.getElementById('input1').value;
    var parsedInput = parseInt(input);

    return meters *	Math.pow(10,-15);
}

function toAttometers(meters) {
    var input = document.getElementById('input1').value;
    var parsedInput = parseInt(input);

    return meters *	Math.pow(10,-18);
}

function toZeptometers(meters) {
    var input = document.getElementById('input1').value;
    var parsedInput = parseInt(input);

    return meters *	Math.pow(10,-21);
}

function toYoctometers(meters) {
    var input = document.getElementById('input1').value;
    var parsedInput = parseInt(input);

    return meters *	Math.pow(10,-24);
}

// Area Formulas

function areaOfSquare() {
    var input = document.getElementById('input1').value;
    var parsedInput = parseInt(input);

    var converted = Math.pow(parsedInput, 2);
	
	document.getElementById("output").innerHTML = converted + " ^2";
}

function areaOfRectangle() {
    var input = document.getElementById('input1').value;
	var input2 = document.getElementById('input2').value;
    var parsedInput = parseInt(input);
	var parsedInput2 = parseInt(input2);

    var area = parsedInput * parsedInput2;
    var converted = area;
	document.getElementById("output").innerHTML = converted;
}

function areaOfParallelogram() {
    var input = document.getElementById('input1').value;
	var input2 = document.getElementById('input2').value;
    var length = parseInt(input);
	var height = parseInt(input);

    var area = length * height;
    var converted = area;
	document.getElementById("output").innerHTML = converted;
	
}

function areaOfTrapezoid(height, base1, base2) {
    var input = document.getElementById('input1').value;
    var parsedInput = parseInt(input);

    var area = (height / 2) * (base1 + base2);
    return area;
}

function areaOfCircle(radius) {
    var input = document.getElementById('input1').value;
    var parsedInput = parseInt(input);

    var area = Math.PI * math.pow(radius, 2);
    return area;
}

function areaOfEllipse(radius1, radius2) {
    var input = document.getElementById('input1').value;
    var parsedInput = parseInt(input);

    var area = Math.PI * (radius1 + radius2);
    return area;
}

function areaOfTriangle(base, height) {
    var input = document.getElementById('input1').value;
    var parsedInput = parseInt(input);

    var area = (base * height) * 0.5;
    return area;
}

function areaOfEquilateralTriangle(length) {
    var input = document.getElementById('input1').value;
    var parsedInput = parseInt(input);

    var area = (Math.sqrt(3) / 4) * Math.pow(length, 2);
    return area;
}

function areaOfSector(radius, theta) {
    var input = document.getElementById('input1').value;
    var parsedInput = parseInt(input);

    var area = 0.5 * Math.pow(radius, 2) * theta;
    return area;
}

function heronsFormula(a, b, c) {
    var input = document.getElementById('input1').value;
    var parsedInput = parseInt(input);

    var s = (a + b +c) / 2;
    var area = Math.sqrt(s * (s-a) * (s-b) * (s-c));
    return area;
}


function squareMetersToSquareFeet() {
    var input = document.getElementById('input1').value;
    var parsedInput = parseInt(input);

    var converted = parsedInput * 10.7639;
	converted = converted.toFixed(2);
	document.getElementById('output').innerHTML = converted + " ft<sup>2</sup>";
}

function squareMetersToSquareYards() {
    var input = document.getElementById('input1').value;
    var parsedInput = parseInt(input);

    var converted = parsedInput * 1.19599;
	converted = converted.toFixed(2);
	document.getElementById('output').innerHTML = converted + " yd<sup>2</sup>";
}

function squareFeetToSquareMeters() {
    var input = document.getElementById('input1').value;
    var parsedInput = parseInt(input);

    var converted = parsedInput * 0.092903;
	converted = converted.toFixed(2);
	document.getElementById('output').innerHTML = converted + " m<sup>2</sup>";
}

function squareFeetToSquareYards() {
    var input = document.getElementById('input1').value;
    var parsedInput = parseInt(input);

    var converted = parsedInput * 0.111111;
	converted = converted.toFixed(2);
	document.getElementById('output').innerHTML = converted + " yd<sup>2</sup>";
}

function squareYardsToSquareFeet() {
    var input = document.getElementById('input1').value;
    var parsedInput = parseInt(input);

    var converted = parsedInput * 9;
	converted = converted.toFixed(2);
	document.getElementById('output').innerHTML = converted + " ft<sup>2</sup>";
}

function squareYardsToSquareMeters() {
    var input = document.getElementById('input1').value;
    var parsedInput = parseInt(input);

    var converted = parsedInput * 0.836127;
	converted = converted.toFixed(2);
	document.getElementById('output').innerHTML = converted + " m<sup>2</sup>";
}


//Angles

function radiansToDegrees() {
    var input = document.getElementById('input1').value;
    var parsedInput = parseInt(input);

    var converted = (180/Math.PI) * parsedInput;
converted = converted.toFixed(2);
	document.getElementById('output').innerHTML = converted + "&deg;";
}

function degreesToRadians() {
    var input = document.getElementById('input1').value;
    var parsedInput = parseInt(input);

    var converted = (Math.PI/180) * parsedInput;
	converted = converted.toFixed(2);
	document.getElementById('output').innerHTML = converted + " radians";
}

// Volume Formulas

function volumeOfCube() {
    var input = document.getElementById('input1').value;
    var parsedInput = parseInt(input);

    return Math.pow(volume, 3);
}

function volumeOfRectangularPrism(length, width, height) {
    var input = document.getElementById('input1').value;
    var parsedInput = parseInt(input);

    var volume = length * width * height;
    return volume;
}

function volumeOfIrregularPrism(base, height) {
    var input = document.getElementById('input1').value;
    var parsedInput = parseInt(input);

    var volume = base * height;
    return volume;
}

function volumeOfCylinder(radius, height) {
    var input = document.getElementById('input1').value;
    var parsedInput = parseInt(input);

    var volume = Math.PI * Math.pow(radius, 2) * height;
    return volume;
}

function volumeOfPyramid(base, height) {
    var input = document.getElementById('input1').value;
    var parsedInput = parseInt(input);

    var volume = (1 / 3) * base * height;
    return volume;
}

function volumeOfCone(radius, height) {
    var input = document.getElementById('input1').value;
    var parsedInput = parseInt(input);

    var volume = (1 / 3) * Math.PI * Math.pow(radius, 2) * height;
    return volume;
}

function volumeOfSphere(radius) {
    var input = document.getElementById('input1').value;
    var parsedInput = parseInt(input);

    var volume = (4 / 3) * Math.PI * Math.pow(radius, 3);
    return volume;
}

function volumeOfEllipsoid(radius1, radius2, radius3) {
    var input = document.getElementById('input1').value;
    var parsedInput = parseInt(input);

    var volume = (4 / 3) * Math.PI * radius1 * radius2 * radius3;
    return volume;
}

// Force & Pressure Formulas

function forceFormula(mass, acceleration) {
    var input = document.getElementById('input1').value;
    var parsedInput = parseInt(input);

    var force = mass * acceleration;
    return force;
}

function pressureFormula(force, area) {
    var input = document.getElementById('input1').value;
    var parsedInput = parseInt(input);

    var pressure = force / area;
    return pressure;
}


function cubicMetersToCubicFeet() {
    var input = document.getElementById('input1').value;
    var parsedInput = parseInt(input);

    var converted = parsedInput * 35.3147;
	converted = converted.toFixed(2);
	document.getElementById('output').innerHTML = converted + " ft<sup>3</sup>";
}

function cubicMetersToCubicYards() {
    var input = document.getElementById('input1').value;
    var parsedInput = parseInt(input);

    var converted = parsedInput * 1.30795;
	converted = converted.toFixed(2);
	document.getElementById('output').innerHTML = converted + " yd<sup>3</sup>";
}

function cubicFeetToCubicMeters() {
    var input = document.getElementById('input1').value;
    var parsedInput = parseInt(input);

    var converted = parsedInput * 0.0283168;
	converted = converted.toFixed(2);
	document.getElementById('output').innerHTML = converted + " m<sup>3</sup>";
}

function cubicFeetToCubicYards() {
    var input = document.getElementById('input1').value;
    var parsedInput = parseInt(input);

    var converted = parsedInput * 0.037037;
	converted = converted.toFixed(2);
	document.getElementById('output').innerHTML = converted + " yd<sup>3</sup>";
}

function cubicYardsToCubicFeet() {
    var input = document.getElementById('input1').value;
    var parsedInput = parseInt(input);

    var converted = parsedInput * 27;
	converted = converted.toFixed(2);
	document.getElementById('output').innerHTML = converted + " ft<sup>3</sup>";
}

function cubicYardsToCubicMeters() {
    var input = document.getElementById('input1').value;
    var parsedInput = parseInt(input);

    var converted = parsedInput * 0.764555;
	converted = converted.toFixed(2);
	document.getElementById('output').innerHTML = converted + " m<sup>3</sup>";
}


// v = voltage, r = resistance, i = current, p = power
// Physics Formulas

function electricPotential1(resistance, current) {
    var input = document.getElementById('input1').value;
    var parsedInput = parseInt(input);

    var voltage = resistance * current;
    return voltage;
}
