/**
 * Created by Beatrice.Chiriac on 6/28/2017.
 */
angular.module('hrApp').controller('ShowPrice',['$scope',function($scope){
    $scope.title = 'ShowPrice';

    $scope.toggleDescriptionShow =function(){
        $scope.price=!$scope.price;
    }


}]);