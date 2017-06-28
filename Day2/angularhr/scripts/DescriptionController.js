/**
 * Created by Beatrice.Chiriac on 6/28/2017.
 */
angular.module('hrApp').controller('DescriptionController',['$scope',function($scope){
    $scope.title = 'DescriptionController';
    $scope.childtemplate = 'templates/childscope.html';
    $scope.resetFirstVariable = function() {
        $scope.firstVariable = undefined;
    };
    $scope.setFirstVariable = function(val) {
        $scope.firstVariable = val;
    };
    $scope.toggleDescriptionShow =function(){
        $scope.descriptionShow=!$scope.descriptionShow;
    }


}]);

