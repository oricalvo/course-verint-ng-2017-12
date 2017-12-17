import { appModule } from "../app.module";
import template from "./app.component.html";
export class AppComponent {
    constructor(rootService, appStore) {
        this.rootService = rootService;
        this.appStore = appStore;
    }
}
appModule.component("appRoot", {
    controller: AppComponent,
    template: template,
});
//# sourceMappingURL=app.component.js.map