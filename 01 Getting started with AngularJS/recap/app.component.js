class AppComponent {
    constructor() {
        this.counter = 0;

        this.contacts = [
            {id:1, name: "Ori"},
            {id:2, name: "Roni"},
        ];

        this.clockFormat = "ss";
    }

    inc() {
        ++this.counter;
    }

    dec() {
        --this.counter;
    }
}

appModule.component("appRoot", {
    controller: AppComponent,
    templateUrl: "app.component.html",
});
