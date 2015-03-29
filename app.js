'use strict';

var gitApp = angular.module('gitApp',[]);

gitApp.controller('rootController', ['$window', '$scope', '$log', '$http', function($window, $scope, $log, $http) {

	$scope.commits = {};
	$scope.showEx = true;

	$scope.submit = function() {
		$scope.apiUrl = "https://api.github.com/repos/" + $scope.owner + "/" + $scope.repo + "/commits?page=1&per_page=10";

        $http.get($scope.apiUrl).success(function(data) {
        	$scope.showEx = false;
        	$scope.commits = data;

        	var arrayLength = $scope.commits.length;
        	var authors = {};
        	var max = 0;
        	$scope.most = '';

        	for (var i = 0; i < arrayLength; i++) {
        		var name = $scope.commits[i].commit.author.name;

        	    if(name in authors) {
        	    	authors[name] = authors[name] + 1;
        	    	if(authors[name] > max) {
        	    		max = authors[name];
        	    		$scope.most = name;
        	    	}
        	    } else {
        	    	authors[name] = 0;
        	    }
        	}
        }).
        error(function(data, status) {
            $window.alert("Invalid owner or repository name.")
        });
    };
	
}]);