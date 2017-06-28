/**
 * Created by Beatrice.Chiriac on 6/28/2017.
 */

hrApp.controller('ListEmployees', ['$scope', function ($scope) {
    $scope.employeesList = [


        {
            firstName: 'John',
            lastName: 'King',
            phone: '0123456789',
            salary: 4500,
            euroValue: 0
        },
        {
            firstName: 'Steven',
            lastName: 'Gerard',
            phone: '0123456789',
            salary: 4500,
            euroValue: 0

        },
        {
            firstName: 'Diana',
            lastName: 'Ross',
            phone: '0123456789',
            salary: 4500,
            euroValue: 0
        },
        {
            firstName: 'Mike',
            lastName: 'Bob',
            phone: '0123456789',
            salary: 4500,
            euroValue: 0
        },
        {
            firstName: 'Mike',
            lastName: 'Bob',
            phone: '0123456789',
            salary: 4500,
            euroValue: 0
        },
        {
            firstName: 'Emily',
            lastName: 'Hudson',
            phone: '0123456789',
            salary: 4500,
            euroValue: 0
        }
    ]

console.log($scope.employeesList);
}]);



