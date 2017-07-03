hrApp.service('JobService', ['$http', 'CommonResourcesFactory', function ($http, CommonResourcesFactory) {
        return {
            findAllJobs: function () {
                return $http.get(CommonResourcesFactory.findAllJobsUrl)
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
