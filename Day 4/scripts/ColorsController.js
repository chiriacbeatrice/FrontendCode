/**
 * Created by Beatrice.Chiriac on 6/30/2017.
 */
hrApp.controller('ColorsController', ['$scope', function ($scope) {
    $scope.colors = [
        {
            "text": "muted",
            "class": "text-muted",
            "type": "strong"
        },
        {
            "text": "primary",
            "class": "text-primary",
            "type": "strong"
        },
        {
            "text": "success",
            "class": "text-success",
            "type": "strong"
        },
        {
            "text": "info",
            "class": "text-info",
            "type": "boring"
        },
        {
            "text": "danger",
            "class": "text-danger",
            "type": "boring"
        }
    ];
    $scope.col;
    $scope.changeColor = function() {
      $scope.col=$scope.myColor1;
      $scope.col1=$scope.myColor1.class;
      console.log($scope.col);
    };

}]);