myApp.config(function($httpProvider) {
    console.log("config %O", $httpProvider);
});

myApp.run(function($http) {
    console.log("run", $http);
});

angular.bootstrap(document.querySelector("html"), [myApp.name]);
