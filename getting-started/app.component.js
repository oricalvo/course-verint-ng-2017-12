class AppComponent {
    constructor() {
        this.counter = 0;
        this.input = "";
    }

    inc() {
        ++this.counter;
    }

    dec() {
        --this.counter;
    }

    set() {
        console.log(this.input);

        const num = parseInt(this.input);
        if(isNaN(num)) {
            return;
        }

        this.counter = num;
    }
}

myApp.component("appRoot", {
    templateUrl: "app.component.html",
    controller: AppComponent,
});