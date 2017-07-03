hrApp.service('DepartamentService', ['$http', 'CommonResourcesFactory', function ($http, CommonResourcesFactory) {
        return {
            findAllDepartaments: function () {
                return $http.get(CommonResourcesFactory.findAllDepartmentsUrl)
                    .success(function (data) {
                        return data;
                    })
                    .error(function (err) {
                        return err;
                    });
            }
        }
    }]);/**
 * Created by Beatrice.Chiriac on 7/3/2017.
 */
