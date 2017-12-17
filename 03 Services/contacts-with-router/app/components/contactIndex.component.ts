import {appModule} from "../app.module";
import template from "./contactIndex.component.html";
import {AppState} from "../models/app.state";

export class ContactIndexComponent {
    constructor(private appStore: AppState) {
    }

    get contacts() {
        return this.appStore.contacts;
    }
}

appModule.component("appContactIndex", {
    controller: ContactIndexComponent,
    template: template,
});
