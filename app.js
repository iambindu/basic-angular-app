
var app = angular.module("myApp",['ui.router']);

app.config(["$locationProvider", function($locationProvider){
	$locationProvider.hashPrefix('')
}])

app.config(["$stateProvider", function($routeProvider){
	
	$stateProvider
		.state("home",{
            url:'/',
			templateUrl: "pages/home.html",
			controller: "myHomeController",
            caseInsensitiveMatch:true
		})
		.state("register",{
            url:'/register',
			templateUrl : "pages/register.html",
			controller: "myRegisterController",
            caseInsensitiveMatch:true
		})
		.state("login", {
             url:'/login',
			templateUrl: "pages/login.html",
			controller:"myLoginController"
		})
}])
app.controller("myHomeController", ["$scope", function($scope){
	$scope.message = "This is my home controller";
}])

app.controller("myRegisterController", ["$scope", function($scope){
	$scope.message= "This is my register controller";
}])

app.controller("myLoginController", ["$scope", function($scope){
	$scope.message = "This is my login controller";
}])

