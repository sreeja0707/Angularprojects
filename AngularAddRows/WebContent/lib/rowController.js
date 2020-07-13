 var app = angular.module('myApp', []);
 app.controller('myController', function ($scope) {	 
	 $scope.movieArray=
		 [
			 {'name':'titanic','director':'james cameroon'},
		 ];
	 $scope.addRow=function(){
		 if($scope.name!=undefined && $scope.director!=undefined){
			 var movie=[];
			 movie.name=$scope.name;
			 movie.director=$scope.director;
			 $scope.movieArray.push(movie);
			 $scope.name=null;
			 $scope.director=null;
			 
		 }
		 
	 };
	 $scope.removeRow=function(){
		 var arrmovie=[];
		 angular.forEach($scope.movieArray, function(value){
			 if(!value.Remove){
				 arrMovie.push(value);
			 }
		 });
		 $scope.movieArray=arr.Movie;
		 
	 };
	 $scope.submit=function(){
		 var arrMovie=[];
		 angualr.forEach($scope.movieArray, function(value){
			 arrMovie.push('Name:' + value.name + ',Director:'+ value.director);
			 
		 });
		 $scope.display=arrMovie;
	 }
})