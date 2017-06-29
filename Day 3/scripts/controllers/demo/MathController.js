hrApp.controller('MathController', ['$scope','MathService', function($scope,MathService){

    $scope.numberA= 0;
    console.log($scope.numberA);
    $scope.numberB= 0;
    console.log($scope.numberB);

    // $scope.calculate=function(){
    //     $scope.op1= parseFloat($scope.numberA) + parseFloat($scope.numberB);
    //     $scope.op2= parseFloat($scope.numberA) - parseFloat($scope.numberB);
    //     $scope.op3= parseFloat($scope.numberA) * parseFloat($scope.numberB);
    //     $scope.op4= parseFloat($scope.numberA) / parseFloat($scope.numberB);
    // }
    $scope.calculate=function() {
        $scope.op1 = MathService.add($scope.numberA, $scope.numberB);
        $scope.op2 = MathService.substract($scope.numberA, $scope.numberB);
        $scope.op3 = MathService.multiply($scope.numberA, $scope.numberB);
        $scope.op4 = MathService.divide($scope.numberA, $scope.numberB);
    }

//        TODO #8 calculate op1, op2, op3, op4

//        TODO #13 refactor your calculations using MathService
}]);
