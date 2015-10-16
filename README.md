<p>Using the API from www.carqueryapi.com, I created a single page application which takes a search query of a year, make, model or trim for a vehicle and returns vehicle details based on that query.</p>
<h4>Issues</h4>
<p>1. $http.get error</p> <p>I chose to use AngularJS for this project but the API documentation focuses on jQuery. Therefore, the API's documentation was not helpful in constructing a GET request in AngularJS, which caused the following error: XMLHttpRequest cannot load.
I solved this by Googling the error, which led me to this solution: http://stackoverflow.com/questions/26079927/access-control-allow-origin-issue-and-angular-http-service
Changing my GET from $http.get to $http.jsonp and adding JSON_CALLBACK to the URL solved this issue.</p>
<p>2. Handling variations in year format</p>
<p>Due to the time constraints of the exercise, I was unable to solve this problem. This is something I haven't dealt with before and through some Googling and trying to think through it logically, here's what I think might work:</p>
<p>This is a problem for regular expressions! Once a query is submitted, you would need to check whether it contains a 2 digit number. If it does, then you would need to add a "19" or "20" to the front of it based on what the number is, i.e. if it's equal or greater than 60, add "19"; less than or equal to 20, add  "20". Then, proceed to send the query to the API like normal. The following function is my initial attempt at the first part of this solution:

    $scope.hasNumbers = function(search) {
       var regex = /^\d{2}$/;
       if(regex.test(search) === true) {
           return search;
          }
        };
        
  Obviously this solution isn't ideal because year numbers aren't the only numbers involved in the vehicle details, like engine_cc for example, but I think it could work for the small scope of this exercise.</p>
