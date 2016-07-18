var myFirstApp = angular.module('myFirstApp',[]);
myFirstApp.controller('firstController',function($scope){
	$scope.todo_lists = ['Fruits','Vegetables','Milk','Coffee','Water bottle','White Board','Black Marker'];
	$scope.new_item = ""; $scope.form_error = "";
	
	$scope.addItem = function () {
		if($scope.new_item.length == 0){
			$scope.form_error = true;
		}
		else{
			$scope.form_error = false;
			$scope.todo_lists.unshift($scope.new_item);	
			$scope.new_item = '';
		}
    }

    $scope.deleteItem = function(i){
    	if(confirm("Are  you sure?")){
    		$scope.todo_lists.splice(i, 1);
    	}
    }
});

myFirstApp.filter('capitalize', function() {
    return function(input) {
      return (!!input) ? input.charAt(0).toUpperCase() + input.substr(1).toLowerCase() : '';
    }
});