/**
 * Created by Beatrice.Chiriac on 6/28/2017.
 */
angular.module('hrApp').controller('Math',['$rootScope','$scope',function($rootScope,$scope){
    $scope.numberA= 0;
    console.log($scope.numberA);
    $scope.numberB= 0;
    console.log($scope.numberB);

    $scope.calc=function(){
        $scope.addition= parseFloat($scope.numberA) + parseFloat($scope.numberB);
        $scope.sub= parseFloat($scope.numberA) - parseFloat($scope.numberB);
        $scope.mul= parseFloat($scope.numberA) * parseFloat($scope.numberB);
        $scope.div= parseFloat($scope.numberA) / parseFloat($scope.numberB);
    }
}]);