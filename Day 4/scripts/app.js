var hrApp = angular.module("hrApp", ['ngRoute']);
hrApp.config(['$routeProvider', function ($routeProvider) {
    $routeProvider
    . when('/colors', {
        templateUrl: '../view/colors.html',
        controller: 'ColorsController'
})
        .when('/forms', {
            templateUrl: '../views /form.html',
            controller: 'FormsController'
})

    .otherwise({
        redirectTo:"/"
    });

}]);