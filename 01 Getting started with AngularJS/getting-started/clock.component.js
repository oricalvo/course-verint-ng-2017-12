class ClockComponent {
    constructor($interval) {
        this.format = "HH:mm:ss";

        this.time = new Date();

        $interval(() => {
            this.time = new Date();

            this.onTick({
                $event: {
                    time: this.time,
                    name: "Ori",
                }
            });
        }, 1000);
    }
}

myApp.component("appClock", {
    templateUrl: "clock.component.html",
    controller: ClockComponent,
    bindings: {
        "format": "<?",
        "onTick": "&",
    }
});
