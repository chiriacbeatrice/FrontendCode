hrApp.controller('EmployeeEditController', ['$scope', '$http', '$routeParams', '$location', 'CommonResourcesFactory','ManagerService','JobService','DepartamentService','EmployeeService',
    function ($scope, $http, $routeParams, $location, CommonResourcesFactory,ManagerService,JobService,DepartamentService,EmployeeService) {
        $scope.requiredErrorMessage = "Please fill out this form!";
        $scope.patternDateNotRespectedMessage = "The date format should be yyyy-mm-dd";
        $scope.patternCommisionNotRespectedMessage = "Commission should be in the format 0.XX";

        //TODO #HR5
        $scope.managers=[];
        $scope.jobs=[];
        $scope.departaments=[];
        ManagerService.findAllManagers().then(
            function (res){
                $scope.managers=res.data;

            },
            function(err){

            }
        )

        JobService.findAllJobs().then(
            function (res){
                $scope.jobs=res.data;

            },
            function(err){

            }
        )

        DepartamentService.findAllDepartaments().then(
            function (res){
                $scope.departaments=res.data;

            },
            function(err){

            }
        )



        /**
         * Reset form
         */
        $scope.reset = function () {
            $scope.employee = {};
        };

        /**
         * Persist an employee
         * @param addEmployee - employee to be persisted
         *
         */
        EmployeeService.findById($routeParams.employeeId)
            .then(function (res) {
                $scope.employee = res.data;
            }, function (err) {
                console.log("Error at employees/findOne: " + err);
            });

        $scope.create = function () {
            $http({url: CommonResourcesFactory.editEmployeeUrl, method: 'PUT', data: $scope.employee})
                .success(function (data) {
                    $scope.employee = data;
                    $location.url('/employeeView/' + $scope.employee.employeeId);
                });
        };

        $scope.datePattern = /^\d{4}-\d{2}-\d{2}$/;
        $scope.commissionPattern =  /^[0]\.\d{1}(\d)?$/;



    }]);