profileDirectives.directive('viewProfile',function(){
	return {
		restrict : 'E',
		scope : {
			rawData : '=data'
		},
		templateUrl : 'partials/viewProfileTemplate.html',
		controller : function($scope) {

			$scope.viewProfile = function(value) {
			    console.log('value' , value);
			    $scope.$parent.blackScreen = true;
			    $scope.$parent.viewDetPopup = true;
			    console.log($scope.$parent)
			    $scope.$parent.player = value;
			}

		}
	};
});