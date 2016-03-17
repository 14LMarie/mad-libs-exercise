var app = angular.module('myApp', ['ngAnimate']);

var app = angular.module('myApp', ['ngMessages'])
    .controller('wordController', ['$scope', function ($scope) {
        //hide and show sections
        $scope.hideForm = false;
        $scope.submit = function () {
            if ($scope.myForm.$valid) {
                $scope.hideForm = true;
            }
        }


        // Allows you to set default form values on fields.
        var defaultForm = {
            yourName: "",
            dirtyTask: "",
            obnoxiousCelebrity: "",
            jobTitle: "",
            celebrity: "",
            hugeNumber: "",
            tediousTask: "",
            uselessSkill: "",
            adjective: ""
        };
        $scope.resetForm = function () {
            $scope.user = defaultForm;
            $scope.hideForm = false;
            $scope.myForm.$setPristine();
            $scope.myForm.$setValidity();
            $scope.myForm.$setUntouched();
        };
    }]);
