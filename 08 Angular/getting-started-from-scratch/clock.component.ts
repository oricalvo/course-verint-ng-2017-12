import {Component, Input} from "@angular/core";
import * as template from "./clock.component.html";

@Component({
    selector: "app-clock",
    template: <any>template,
})
export class ClockComponent {
    time: Date;
    @Input() format: string = "HH:mm:ss";

    constructor() {
        this.time = new Date();

        setInterval(()=> {
            this.time = new Date();
        }, 1000);
    }
}
