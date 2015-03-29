'use strict';

var gitApp = angular.module('gitApp',[]);

gitApp.controller('rootController', ['$window', '$scope', '$http', function($window, $scope, $http) {

	$scope.submit = function() {
		$scope.apiUrl = "https://api.github.com/repos/" + $scope.owner + "/" + $scope.repo + "/commits?page=1&per_page=10";

        $http.get($scope.apiUrl).success(function(data) {
        	$scope.commits = data;
        });
    };
	
}]);