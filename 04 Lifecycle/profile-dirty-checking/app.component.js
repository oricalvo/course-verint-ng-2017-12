class AppComponent {
    constructor($scope, $rootScope) {
        this.data = "YYY";
        this.$scope = $scope;
        this.$rootScope = $rootScope;
    }

    run() {
        setTimeout(()=> {
            this.data = "XXX";
            this.$rootScope.title = "Title";

            console.log("CHANGED");

            this.$scope.$apply();
        }, 1000);
    }
}

myApp.component("appRoot", {
    templateUrl: "app.component.html",
    controller: AppComponent,
});