// get a list of unique languages from languages.js
var languages = [];
function getLanguageList(){
	for (i=0; i<countryLangs.length; i++){
		for (var key in countryLangs[i].languages){
	 		// console.log(key);
	 		if (languages.indexOf(key) > -1){
				// it's already in there, so don't add the language
			} else {
				languages.push(key);
			}
	 	}
	}
	languages.sort();
}
getLanguageList();

// this array will become the master array that stores data on all the countries
var countries = [];
// this constructor defines the properties of the country object
var Country = function(name, totalPop, gdp, languages, countrycode){
	this.name = name;
	this.totalPop = totalPop;
	this.gdp = gdp;
	this.languages = languages;
	this.countryCode = countrycode;
}

// this function adds countries to the master array
function addCountries(popdata, gdpdata){
	var popData = popdata[1];
	var gdpData = gdpdata[1];
	for (i=0;i<popData.length;i++){
		var myCountry = popData[i].country.value;
		var myPop = popData[i].value;
		var myGDP = gdpData[i].value;
		var myLanguages = {};
		var myCountryCode = '';
		// get languages data from countries_languages.js
		// for each country, add the language object if data are available
		for (j=0;j<countryLangs.length;j++){
			if (myCountry == countryLangs[j].name) {
				// the country names match, so add the languages object
				myLanguages = countryLangs[j].languages;
				myCountryCode = countryLangs[j].countryCode;
			}
		}
		countries.push(new Country(myCountry, myPop, myGDP, myLanguages, myCountryCode));
	}
}

// call the addCountries function, passing data from the myGDPqueryN.js and myPOPqueryN.js files
addCountries(myPOPdata1, myGDPdata1);
addCountries(myPOPdata2, myGDPdata2);
addCountries(myPOPdata3, myGDPdata3);
addCountries(myPOPdata4, myGDPdata4);
addCountries(myPOPdata5, myGDPdata5);

// this function validates route parameters
// pass a route paramter as option to this function and you determine whether it's a language/pop/gdp parameter
// the function returns empty string if the parameter has not been set
function returnOptionType(option){
	var typeOfOption = '';

	for (i=0; i < languages.length; i++){
        if (option == languages[i]){
            typeOfOption = 'language';
        }
    }
    for (j=0; j < popRanges.length; j++){
        if (option == popRanges[j].id){
            typeOfOption = 'population';
        }
    }
    for (g=0; g < gdpRanges.length; g++){
        if (option == gdpRanges[g].id){
            typeOfOption = 'gdp';
        }
    }
	return typeOfOption;
}
