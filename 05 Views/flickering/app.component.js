class AppComponent {
    constructor($rootScope) {
        $rootScope.counter = 123;
    }
}

myApp.component("appRoot", {
    templateUrl: "app.component.html",
    controller: AppComponent,
});