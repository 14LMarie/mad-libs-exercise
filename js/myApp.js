angular.module('myApp', [])
    .controller('wordController', ['$scope', function ($scope) {
        $scope.femaleName = "female name";
        $scope.dirtyTask = "dirty task";
        $scope.obnoxiousCelebrity = "obnoxious celebrity";
        $scope.jobTitle = "job title";
        $scope.celebrity = "celebrity";
        $scope.hugeNumber = "huge number'";
        $scope.tediousTask = "tedious task";
        $scope.uselessSkill = "useless skill";
        $scope.adjective = "adjective";
    }]);
