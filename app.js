var app=angular.module("myApp",[])
app.controller("myController",["$scope",function($scope){
$scope.message="Hello Bindu";

$scope.employeeList=[
		{name:'sunder',age:33,city:'mysore',mobile:'888546921'}
		{name:'sri',age:45,city:'Hyderabad',mobile:'889756254'}
		{name:'kanth',age:99,city:'techera',mobile:'954763015'}
		{name:'reddy',age:100,city:'mysore',mobile:'948630126'}
]
}])