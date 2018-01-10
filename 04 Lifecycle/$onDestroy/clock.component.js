class ClockComponent {
    constructor() {
        console.log("Clock.ctor");
    }

    $onDestroy() {
        console.log("Clock.dtor");
    }
}

myApp.component("appClock", {
    templateUrl: "clock.component.html",
    controller: ClockComponent,
});