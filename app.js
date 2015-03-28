'use strict';

var gitApp = angular.module('gitApp',[]);

gitApp.controller('rootController', ['$window', '$scope', '$http', function($window, $scope, $http) {

	$scope.submit = function() {
		$scope.apiUrl = "https://api.github.com/repos/" + $scope.owner + "/" + $scope.repo + "/commits";
        $window.alert($scope.apiUrl);

        $http.get($scope.apiUrl).success(function(data) {
        	$scope.query = data;
        });

        console.log($scope.query);
    };
	
}]);