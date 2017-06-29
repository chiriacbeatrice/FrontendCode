/**
 * Created by Beatrice.Chiriac on 6/29/2017.
 */
hrApp.controller('Users', ['$scope','$location', 'UserService', function($scope,$location, UserService){

    $scope.user = {};
    $scope.view=false;
    $scope.userlist = UserService.users;
    $scope.back = function() {

        $location.url('/main.html');
    }
    $scope.reset=function(){
        $scope.user = undefined;
    }
    $scope.save = function() {
        alert($scope.user);
        UserService.save(angular.copy($scope.user));
    }
    $scope.show = function() {
        if($scope.view==false) {
            $scope.view = !$scope.view;
            console.log($scope.userlist);
        } else {
            $scope.view = !$scope.view;
        }
    }
}]);