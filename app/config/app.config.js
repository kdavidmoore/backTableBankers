app.config(function($routeProvider) {
	$routeProvider
		.when('/', {
			templateUrl: 'app/components/home/home.html',
			controller: 'homeController'
		})
		.when('/:option1', {
			templateUrl: 'app/components/map/map.html',
			controller: 'mapController'
		})
		.when('/:option1/:option2', {
			templateUrl: 'app/components/map/map.html',
			controller: 'mapController'
		})
		.when('/:option1/:option2/:option3', {
			templateUrl: 'app/components/map/map.html',
			controller: 'mapController'
		})
		.otherwise({
			redirecTo: '/'
		});
});