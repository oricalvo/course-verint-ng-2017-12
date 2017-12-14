import { appModule } from "../app.module";
import template from "./app.component.html";
export class AppComponent {
    constructor($http) {
        this.$http = $http;
        this.init();
    }
    init() {
        this.$http.get("data/contacts.json").then(res => {
            this.contacts = res.data;
        });
    }
}
appModule.component("appRoot", {
    controller: AppComponent,
    template: template,
});
//# sourceMappingURL=app.component.js.map