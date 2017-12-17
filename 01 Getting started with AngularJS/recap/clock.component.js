class ClockComponent {
    constructor() {
        this.format = "HH:mm:ss";
        this.time = new Date();
    }
}

appModule.component("appClock", {
    controller: ClockComponent,
    templateUrl: "clock.component.html",
    bindings: {
        format: "<?",
    }
});
