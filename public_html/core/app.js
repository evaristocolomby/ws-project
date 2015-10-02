(function() {
    "use strict";
    angular.module("app", [ "ngRoute" ]).config([ "$logProvider", function($logProvider) {
        $logProvider.debugEnabled(true);
    } ]);
})();