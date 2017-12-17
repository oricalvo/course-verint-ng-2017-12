import {appModule} from "../app.module";
import template from "./app.component.html";
import {RootService} from "../services/root.service";
import {AppState} from "../models/app.state";

export class AppComponent {
    constructor(private rootService: RootService,
                private appStore: AppState) {
    }
}

appModule.component("appRoot", {
    controller: AppComponent,
    template: template,
});
