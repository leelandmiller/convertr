app.config(['$routeProvider', function ($routeProvider) {
	$routeProvider
	.when('/temp', {
		templateUrl: 'partials/tempConversion.html',
		controller: 'InitSelect'
	})
	.when('/weight-mass', {
		templateUrl: 'partials/weightMassConversion.html',
	  controller: 'InitSelect'
	})
	.when('/time', {
		templateUrl: 'partials/timeConversion.html',
	  controller: 'InitSelect'
	})
	.when('/distance', {
		templateUrl: 'partials/distanceConversion.html',
	  controller: 'InitSelect'
	})
	.when('/speed-velocity', {
		templateUrl: 'partials/speedVelocityConversion.html',
	  controller: 'InitSelect'
	})
	.when('/area', {
		templateUrl: 'partials/areaConversion.html',
	  controller: 'InitSelect'
	})				
	.when('/volume', {
		templateUrl: 'partials/volumeConversion.html',
	  controller: 'InitSelect'
	})					
	.otherwise({
		redirectTo: '/temp'
	});
}]);