app.controller("ctrl", function($scope){
	$scope.un="";
	$scope.pw="";
	$scope.msg="";
	$scope.msg1="";
	$scope.fun=function(e){
		if($scope.un.length==0){
			$scope.msg="enter your name";
			e.preventDefault();
		}
		else{
			$scope.msg="";
		}
		if($scope.pw.length==0){
			$scope.msg1="enter your password"
				e.preventDefault();	
		}
		else{
			$scope.msg1="";
		}		
	}
})