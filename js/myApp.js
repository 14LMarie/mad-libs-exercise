angular.module('myApp', ['ngMessages']);
angular.module('myApp', [])
    .controller('wordController', ['$scope', function ($scope) {
        //hide and show sections
        $scope.inputForm = true;
        $scope.submit = function () {
            if ($scope.myForm.$valid) {
                $scope.inputForm = false;
                $scope.results = true;
            } else {
                $scope.inputForm = true;
                $scope.results = false;
            }
            console.log("working");
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
