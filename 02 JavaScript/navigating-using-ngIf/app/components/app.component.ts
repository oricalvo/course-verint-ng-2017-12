import {appModule} from "../app.module";
import template from "./app.component.html";
import {NavigationService} from "../services/navigation.service";
import {RootService} from "../services/root.service";
import {AppState} from "../models/app.state";

export class AppComponent {
    constructor(private rootService: RootService,
                private appStore: AppState) {
    }

    goto(view: string) {
        this.rootService.goto(view);
    }

    get view() {
        return this.appStore.view;
    }
}

appModule.component("appRoot", {
    controller: AppComponent,
    template: template,
});
