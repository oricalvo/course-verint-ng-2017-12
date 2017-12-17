myApp.config(function($locationProvider) {
    $locationProvider.html5Mode(true);
});

angular.bootstrap(document.querySelector("html"), [myApp.name]);
