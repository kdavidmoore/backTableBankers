# Interactive Map App
Interactive map using HTML, CSS, JavaScript, AngularJS, and [DataMaps](http://datamaps.github.io/)

## Summary
Single page Angular app that allows user to filter search based on language, population, and GDP data, with each specific map having its own URL. 

## Team members and contributions

### Jonathan Melin
+ Initiated idea and vision
+ Designed layout
+ Implemented and customized DataMaps features (coloring, popups, etc.)
+ Structured initial AngularJS components

### Keith Moore
+ Designed constructors and JSON objects to incorporate data on country names, country codes, languages, population, and GDP
+ Used query builder to gather JSON data from World Bank API
+ Added comments to JS scripts
+ Collaborated with team members to write and debug JS scripts

### Patrick Murphy
+ Helped create Language Data
+ Created function to preserve dropdown slection when the location is changed
+ Helped modify function to update scope with button changes
+ Identified a few bugs and helped find solutions

### Tristan Lobaugh
+ Helped create the Language Data and created function to sort the object
+ Created function to combine the data objects based on what data the user wants to see
+ Added function to see if the user has selected a query that return an empty object
+ Helped fix bugs and find solutions to problem in the routing and AngularJS components

## Demo
[Live Demo](http://students.digitalcrafts.com/backTableBankers)

## Screenshots
### Home page:
![alt text](https://raw.githubusercontent.com/rbunch-dc/backTableBankers/master/images/home.png)

### Language search:
![alt text](https://raw.githubusercontent.com/rbunch-dc/backTableBankers/master/images/lang.png)

### Language and population search:
![alt text](https://raw.githubusercontent.com/rbunch-dc/backTableBankers/master/images/lang-pop.png)

### Language, population, and GDP search:
![alt text](https://raw.githubusercontent.com/rbunch-dc/backTableBankers/master/images/lang-pop-gdp.png)

### Custom popup data:
![alt text](https://raw.githubusercontent.com/rbunch-dc/backTableBankers/master/images/popup1.png)
![alt text](https://raw.githubusercontent.com/rbunch-dc/backTableBankers/master/images/popup2.png)

### Responsive design:
![alt text](https://raw.githubusercontent.com/rbunch-dc/backTableBankers/master/images/responsive1.png)
![alt text](https://raw.githubusercontent.com/rbunch-dc/backTableBankers/master/images/responsive2.png)

##Code Samples
### HTML for search box:
```html
<div id="search-panel" ng-controller="filterController">
    <select id="language-option" ng-change="doFilter('one')" ng-model="newOption" ng-options="language for language in languages">
        <option value="">Choose a language</option>
    </select>
    <select id="population-option" ng-change="doFilter('two')" ng-model="newOption" ng-options="myPop.label for myPop in popRanges">
        <option value="">Choose a population size</option>
    </select>
    <select id="gdp-option" ng-change="doFilter('three')" ng-model="newOption" ng-options="gdp.label for gdp in gdpRanges">
        <option value="">Choose a GDP amount</option>
    </select>
    <div id="reset-map-div">
        <button ng-click="resetMap()">Reset Map</button>
    </div> 
</div>
```

### Native JavaScript used to sort data objects:
```javascript
function combine3(primaryObj, secondaryOneObj, secondaryTwoObj){
    for(var key in primaryObj){
        if(secondaryOneObj.hasOwnProperty(key) && secondaryTwoObj.hasOwnProperty(key)){
        }else{
            delete primaryObj[key];
        };   
    };
    return primaryObj;
};
```

### Native JavaScript used to assign color shades to countries based on native speaker percentages:
```javascript
function drawLanguage(){    
    langData = {};  
        // Lists countries with selected language
    for(var i = 0; i < countries.length;i++){
        var langProp = Object.getOwnPropertyNames(countries[i].languages);
        if(langProp.indexOf(language) > -1){
            // Gets Value of selected language in countries that have it
            var langPerc = countries[i].languages[language];
            if(langPerc < 20){
                langData[countries[i].countryCode] = {fillKey: "LOW"};
            }else if(langPerc<40){
                langData[countries[i].countryCode] = {fillKey: "MEDIUM-LOW"};
            }else if(langPerc<60){
                langData[countries[i].countryCode] = {fillKey: "MEDIUM"};
            }else if(langPerc<80){
                langData[countries[i].countryCode] = {fillKey: "MEDIUM-HIGH"};
            }else if(langPerc>=80){
                langData[countries[i].countryCode] = {fillKey: "HIGH"};
            };
        };
    };
};
```

## TODO
+ Add remaining countries
+ Add languages
+ Add additional filters