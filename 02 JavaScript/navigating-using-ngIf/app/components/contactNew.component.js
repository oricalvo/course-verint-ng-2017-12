import { appModule } from "../app.module";
import template from "./contactNew.component.html";
export class ContactNewComponent {
    constructor(rootService) {
        this.rootService = rootService;
    }
    add() {
        this.rootService.add(this.name);
    }
}
appModule.component("appContactNew", {
    controller: ContactNewComponent,
    template: template,
});
//# sourceMappingURL=contactNew.component.js.map