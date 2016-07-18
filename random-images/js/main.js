var myFirstApp = angular.module('myFirstApp',[]);
myFirstApp.controller('firstController',function($scope,$interval){
	$scope.index = Math.floor(Math.random() * 1060) + 1;
	
	$scope.grey = false;
	$scope.greyparam = ($scope.grey)?'/g':'';
	
	$scope.blur = false;
	$scope.blur_effect = ($scope.blur)?'&blur':'';
	
	
	$scope.greyScale = function(){
		$scope.grey = !$scope.grey;
		$scope.greyparam = ($scope.grey)?'/g':'';
	}
	
	$scope.blurScale = function(){
		$scope.blur = !$scope.blur;
		$scope.blur_effect = ($scope.blur)?'&blur':'';
	}
	
	$scope.slider = null;
	$scope.sliderSwitch = false;
	$scope.startAutoplay = function () {
		$scope.sliderSwitch = true;
		$scope.index = $scope.index+1;
		$scope.slider = $interval(function () {
			if($scope.index >= 1060){ //End of image list
				$scope.index = 2; // Start from second image
				return false;
			}
			$scope.index = $scope.index+1;
		}, 3000);
	};
	
	$scope.stopAutoplay = function () {
        if (angular.isDefined($scope.slider)) {
			$interval.cancel($scope.slider);
			$scope.sliderSwitch = false;
        }
    };
});
