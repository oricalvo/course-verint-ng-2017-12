const myApp = angular.module("myApp", []);

myApp.run(function($rootScope) {
    const originalApply = $rootScope.constructor.prototype.$apply;

    $rootScope.constructor.prototype.$apply = function() {
        const before = performance.now();

        originalApply.apply(this, arguments);

        const after = performance.now();

        console.log("Change detection", after-before, $rootScope.$$watchersCount);
    }

    console.log(originalApply);
});
