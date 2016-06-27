app.controller('homeController', function($scope, $http, $routeParams, $location){

	$scope.map = new Datamap({
		element: document.getElementById('map'),
		fills: {
			defaultFill: '#ddd'
		},
		responsive: true,
		geographyConfig: {
			borderColor: '#999',
			popupTemplate: function(geo) {				
				// Get country name from datamaps
				var countryName = geo.properties.name;
				for(i=0;i<countries.length;i++){
					// Get list of languages for each country
					var languageObject = countries[i].languages;
					var languageText = '';
					for (property in languageObject){
						languageText += property + '(' + languageObject[property] + '%)' + '; ';
					};
					// Get population and gdp for each country
					// Credit for adding commas to numbers: http://cwestblog.com/2011/06/23/javascript-add-commas-to-numbers/
					var population = (countries[i].totalPop + '').replace(/(\d)(?=(\d{3})+$)/g, '$1,');
					var gdp = '$' + (Math.round(countries[i].gdp) + '').replace(/(\d)(?=(\d{3})+$)/g, '$1,');
					// Write info to html to display in popups
					if (countryName === countries[i].name){
						return '<div class="hoverinfo"><h3><strong>' + countryName + '</strong></h3>' +
						'<p>Languages: ' + languageText + '</p>' +
						'<p>Population: ' + population + '</p>' +
						'<p>GDP: ' + gdp + '</p></div>';
					};
				};			
			}
		}
	});

	window.addEventListener('resize', function() {
        $scope.map.resize();
    });
});