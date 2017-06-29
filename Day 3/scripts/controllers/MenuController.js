hrApp.controller('MenuController', ['$scope', 'employeeActionsService', function($scope, employeeActionsService){
    $scope.employeeActionList = [{
            url:'#/employeeslist',
            label:'Employee List'
        },
        {
            url: employeeActionsService[0].url,
            label: employeeActionsService[0].label
        },
        {
            url: employeeActionsService[1].url,
            label: employeeActionsService[1].label
        }
    ];

    // TODO #12 - load menu items from Value



    $scope.currentDate = new Date();

}]);
