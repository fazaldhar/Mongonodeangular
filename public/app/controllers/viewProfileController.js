'use strict';

profileController.controller('viewProfileController', function($http, $scope, profileAPIService,$resource) {
    
    // profileAPIService.getProfile().get(null,function(data){console.log(data)});

    $scope.init = function() {
        $scope.blackScreen = false;
        $scope.viewDetPopup = false;
        $scope.player = '';
        $scope.getPlayerProfile();
    }

    /*$scope.getPlayerProfile = function() {
        profileAPIService.getProfile()
         .then(function(data){
            $scope.playerProfile = data.data.MRData.StandingsTable.StandingsLists[0].DriverStandings;
            console.log('$scope.playerProfile',$scope.playerProfile)
         },function(err){
            console.log('err',err)
         });
    }*/

    /*$scope.gridOptions = {
        data: 'responseData.details',
        multiSelect: false,
        selectedItems: $scope.reportSelected,
        columnDefs: [{
            field: 'name',
            displayName: 'Name'
        }, {
            field: 'age',
            displayName: 'Age'
        }, {
            field: 'sex',
            displayName: 'Sex'
        }, {
            field: 'email',
            displayName: 'E-mail'
        }, {
            field: 'nationality',
            displayName: 'Nationality'
        }, {
            field: 'nationality',
            displayName: 'Nationality2'
        }, {
            field: 'nationality',
            displayName: 'Nationality3'
        }]
    }*/

    $scope.getPlayerProfile = function() {
        $http.get('/playerlist').success(function(response) {
            console.log('I received data i requested');
            $scope.players = response;
        });
    }

    $scope.closePopUp = function() {
        $scope.blackScreen = false;
        $scope.viewDetPopup = false;
        $scope.player = '';
        console.log($scope.player)
    }

    $scope.removePlayer = function () {
        var id = $scope.player._id;
        $http.delete('/playerlist/'+id).success(function() {
            $scope.getPlayerProfile();
            $scope.closePopUp();
        });
    }

    $scope.updatePlayer = function() {
        var id = $scope.player._id;
        $http.put('/playerlist/'+id , $scope.player).success(function() {
            $scope.getPlayerProfile();
            $scope.closePopUp();
        })
    }

    $scope.init();
});