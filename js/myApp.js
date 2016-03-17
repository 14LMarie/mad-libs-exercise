angular.module('myApp', ['ngMessages', 'ngAnimate'])
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
            $scope.inputForm = true;
            $scope.results = false;
            $scope.myForm.$setPristine();
            $scope.myForm.$setValidity();
            $scope.myForm.$setUntouched();
        };
    }]);
