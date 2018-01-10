import {appModule} from "../app.module";
import template from "./app.component.html";
import {RootService} from "../services/root.service";
import {AppState} from "../models/app.state";

export class AppComponent {
    //static $inject = ["rootService", "appStore"];

    constructor(private a: RootService,
                private b: AppState) {
    }
}

appModule.component("appRoot", {
    //controller: ["rootService", "appStore", AppComponent],
    controller: AppComponent,
    template: template,
});
