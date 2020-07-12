var app = angular.module('mynumber', []);

app.controller('MainCtrl', function($scope) {
	$scope.add=function(num1,num2)
	{
	  $scope.Result=num1+num2;

	}
});