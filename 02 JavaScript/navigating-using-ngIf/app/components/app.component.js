import { appModule } from "../app.module";
import template from "./app.component.html";
export class AppComponent {
    constructor(rootService, appStore) {
        this.rootService = rootService;
        this.appStore = appStore;
    }
    goto(view) {
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
//# sourceMappingURL=app.component.js.map