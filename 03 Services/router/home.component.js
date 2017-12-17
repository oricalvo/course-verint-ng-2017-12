class HomeComponent {
    constructor($location) {
        console.log("Home.ctor");
    }
}

myApp.component("appHome", {
    templateUrl: "home.component.html",
    controller: HomeComponent,
});