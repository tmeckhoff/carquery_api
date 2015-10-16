<h3>Car Query API Exercise</h3>
<p>Using the API from www.carqueryapi.com, I created a single page application which takes a search query of a year, make, model or trim for a vehicle and returns vehicle details based on that query.</p>

<h4>Instructions</h4>
<p>This application was built using Node.js. To run the application, download the repository and type "npm install" in terminal to download the external dependencies, which are saved in the package.json file. To open the application, type "npm start" and go to http://localhost:5000/.</p>

<h4>Issues</h4>
<p>1. $http.get error</p> <p>I chose to use AngularJS for this project but the API documentation focuses on jQuery. Therefore, the API's documentation was not helpful in constructing a GET request in AngularJS, which caused the following error: XMLHttpRequest cannot load.
I solved this by Googling the error, which led me to this solution: http://stackoverflow.com/questions/26079927/access-control-allow-origin-issue-and-angular-http-service
Changing the GET from $http.get to $http.jsonp and adding JSON_CALLBACK to the URL solved this issue.</p>
<p>2. Handling variations in year format</p>
<p>I originally had difficulty solving this problem because early on I had tested different year formats, testing 11 and 2011 and thought they had brought up different results. Turns out that the original testing was incorrect in some way because they do both bring up the same results. To make sure all different year formats work is to remove apostrophes from the queries to ensure that '11 also brings up 2011 results:</p>
<p>$scope.search = $scope.search.replace(/'/g, "");</p>

