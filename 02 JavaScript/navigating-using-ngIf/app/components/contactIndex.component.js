import { appModule } from "../app.module";
import template from "./contactIndex.component.html";
export class ContactIndexComponent {
    constructor(appStore) {
        this.appStore = appStore;
    }
    get contacts() {
        return this.appStore.contacts;
    }
}
appModule.component("appContactIndex", {
    controller: ContactIndexComponent,
    template: template,
});
//# sourceMappingURL=contactIndex.component.js.map