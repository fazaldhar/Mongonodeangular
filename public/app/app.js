'use strict';

var profileApp = angular.module('profileApp', ['profileApp.controllers','profileApp.services','profileApp.directives','ngRoute','ngResource']);
var profileController = angular.module('profileApp.controllers',[]);
var profileServices = angular.module('profileApp.services',[]);
var profileDirectives = angular.module('profileApp.directives',[]);


profileApp.config(['$routeProvider', '$locationProvider',
    function($routeProvider, $locationProvider) {
        $routeProvider
            .when('/',{
                templateUrl: 'partials/home.html'
            })
            .when('/enterDetails', {
                templateUrl: 'partials/enterDetails.html',
                controller: 'enterProfileController'
            })
            .when('/viewDetails', {
                templateUrl: 'partials/viewDetails.html',
                controller: 'viewProfileController',
            })
            .otherwise({
                template: '<h2>No Page found here</h2>'
            });
    }
])

profileController.controller('profileHomeController', ['$http', '$scope','$location',
    function($http, $scope,$location) {

        $scope.data = {
            labels: {
                label_nav1: 'Enter Details',
                label_nav2: 'View/Edit Details',
                label_nav3: 'Edit Details',
                label_nav4: 'Delete Details',
                label_nav5: 'Print Details',
            }
        }
        
    }
]);


