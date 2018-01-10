import {Component} from "@angular/core";
import * as template from "./app.component.html";

@Component({
    selector: "app-root",
    template: <any>template,
})
export class AppComponent {
    counter: number = 0;

    constructor() {
    }

    dec() {
        --this.counter;
    }

    inc() {
        ++this.counter;
    }
}
