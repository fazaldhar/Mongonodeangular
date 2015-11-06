
profileController.controller('enterProfileController',function($scope,$http) {
	
	$scope.addPlayer = function() {
		console.log('$scope.player',$scope.player);

		$http.post('/playerlist',$scope.player).success(function(response) {
			console.log(response);
			$scope.player = '';
			alert('Player added successfully');
		});

	}

});