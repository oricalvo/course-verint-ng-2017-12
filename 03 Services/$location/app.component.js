class AppComponent {
    constructor($location) {
        this.$location = $location;
    }

    changeURL() {
        this.$location.url("new");

        // setTimeout(function() {
        //     window.history.pushState({}, null, "/index");
        // }, 100);
    }
}

myApp.component("appRoot", {
    templateUrl: "app.component.html",
    controller: AppComponent,
});