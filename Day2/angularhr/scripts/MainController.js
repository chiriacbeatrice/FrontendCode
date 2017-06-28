/**
 * Created by Beatrice.Chiriac on 6/28/2017.
 */
angular.module('hrApp').controller('MainController',['$rootScope','$scope',function($rootScope,$scope){
    $scope.name= "name";
    console.log($scope.name);
}]);
