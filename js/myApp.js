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
        }


        // Set the following in your controller for the form/page.
        // Allows you to set default form values on fields.
        $scope.defaultFormData = {
                yourName: "",
                dirtyTask: "",
                obnoxiousCelebrity: "",
                jobTitle: "",
                celebrity: "",
                hugeNumber: "",
                tediousTask: "",
                uselessSkill: "",
                adjective: ""
            }
            // Save a copy of the defaultFormData
        $scope.resetCopy = angular.copy($scope.defaultFormData);
        // Create a method to reset the form back to it's original state.
        $scope.resetForm = function () {
            // Set the field values back to the original default values
            $scope.defaultFormData = angular.copy($scope.resetCopy);
            $scope.myForm.$setPristine();
            $scope.myForm.$setValidity();
            $scope.myForm.$setUntouched();
        }
    }]);
