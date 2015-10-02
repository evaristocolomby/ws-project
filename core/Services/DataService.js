(function() {
    "use strict";
    var baseUrl = "/~arbj/ws-project/GetData.php";
    function dataservice($http, $q) {
        var service = this;
        service.Query = function(query) {
            console.log("query:" + query)
            var deferred = $q.defer();
            $http({
                method: "GET",
                url: baseUrl,
                params: {
                    query: query
                }
            }).success(function(data) {
                console.log(data)
                deferred.resolve(data);
            }).error(function(data, status, headers, config) {
                deferred.reject({
                    data: data,
                    status: status
                });
            });
            return deferred.promise;
        };
    }
    angular.module("app").service("dataservice", dataservice);
    dataservice.$inject = [ "$http", "$q" ];
})();
