hrApp.controller('EmployeeAddController', ['$scope', '$http', '$location', 'CommonResourcesFactory','ManagerService','JobService','DepartamentService','EmployeeService',
    function($scope, $http, $location, CommonResourcesFactory,ManagerService,JobService,DepartamentService,EmployeeService) {
        $scope.employee = {};
        $scope.requiredErrorMessage = "Please fill out this form!";
        $scope.patternDateNotRespectedMessage = "The date format should be yyyy-mm-dd";
        $scope.patternCommisionNotRespectedMessage = "Commission should be in the format 0.XX";

        //TODO #HR1

        $scope.managers=[];
        $scope.jobs=[];
        $scope.departaments={};
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

        $http({url: CommonResourcesFactory.findAllDepartmentsUrl, method: 'GET'})
            .success(function (data) {
                $scope.employee.departmentId= data;

            });
        $http({url: CommonResourcesFactory.findAllEmployeesUrl, method: 'GET'})
            .success(function (data) {
                $scope.employee.managerId = data;

            });
        $http({url: CommonResourcesFactory.findAllJobsUrl, method: 'GET'})
            .success(function (data) {
                $scope.employee.jobId = data;

            });

        /**
         * Reset form
         */
        $scope.reset = function () {
            this.employee = {};
        };

        /**
         * Persist an employee
         * @param addEmployee - employee to be persisted
         */
        $scope.create = function () {
            $http({url: CommonResourcesFactory.addEmployeeUrl, method: 'POST', data:$scope.employee})
                .success(function (data) {
                    $scope.employee = data;
                    $location.url('/employeeView/' + $scope.employee.employeeId);
                });
        };

        $scope.datePattern = /^\d{4}-\d{2}-\d{2}$/;
        $scope.commissionPattern = /^[0]\.\d{1}(\d)?$/;
}]);