const appModule = angular.module("myApp", []);

appModule.controller("HomeCtrl", function($scope, $rootScope) {
    console.log("xxx");

    $scope.counter = 123;
    $scope.nums = [1,2,3];

    console.log($rootScope);

    setTimeout(function() {
        walk($rootScope);
    }, 10);

});

function walk(scope) {
    console.log(scope.$id);

    for(let child=scope.$$childHead; child!=null; child=child.$$nextSibling) {
        walk(child);
    }
}

angular.bootstrap(document.querySelector("html"), ["myApp"]);
