import { appModule } from "../app.module";
import template from "./app.component.html";
export class AppComponent {
    //static $inject = ["rootService", "appStore"];
    constructor(a, b) {
        this.a = a;
        this.b = b;
    }
}
appModule.component("appRoot", {
    //controller: ["rootService", "appStore", AppComponent],
    controller: AppComponent,
    template: template,
});
//# sourceMappingURL=app.component.js.map