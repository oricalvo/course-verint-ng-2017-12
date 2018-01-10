class AppComponent {
    constructor() {
        this.showClock = true;
    }

    toggle() {
        this.showClock = !this.showClock;
    }
}

myApp.component("appRoot", {
    templateUrl: "app.component.html",
    controller: AppComponent,
});