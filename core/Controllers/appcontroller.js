(function() {
    "use strict";
    function appcontroller($scope, dataservice) {
        var vm = this;
        vm.result = [];
        
        vm.search = function() {
            var input = document.getElementById("input").value;
            console.log("input: " + input)
            dataservice.Query(input).then(function(data) {
                console.log("asdfasdf")
                console.log(data.result)
                vm.result = data.result;
            });
        };
        
    }
    angular.module("app").controller("appcontroller", appcontroller);
    appcontroller.$inject = [ "$scope", "dataservice" ];
})();