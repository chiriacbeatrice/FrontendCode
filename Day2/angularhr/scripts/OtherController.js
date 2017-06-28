/**
 * Created by Beatrice.Chiriac on 6/28/2017.
 */
angular.module('hrApp').controller('OtherController',['$scope',function($scope){
    $scope.childtemplate = 'templates/childscope.html';
    $scope.setTitle = function() {
        $scope.title = 'OtherController';

    }



}]);