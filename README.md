<p>Using the API from www.carqueryapi.com, I created a single page application which takes a search query of a year, make, model or trim for a vehicle and returns vehicle details based on that query.</p>
<h4>Issues</h4>
<p>1. $http.get error</p> <p>I chose to use angularJS for this project but the API documentation focuses on jQuery. Therefore, the API's documentation was not helpful in constructing a GET request in AngularJS, which caused the following error: XMLHttpRequest cannot load.
I solved this by Googling the error, which led me to this solution: http://stackoverflow.com/questions/26079927/access-control-allow-origin-issue-and-angular-http-service
Changing my GET from $http.get to $http.jsonp and adding JSON_CALLBACK to the URL solved this issue.</p>
<p>2. Handling variations in year format</p>
<p>Due to the time constraints of the exercise, I was unable to solve this problem. This is something I haven't dealt with before and through some Googling and trying to think through it logically, here's what I think might work:</p>
