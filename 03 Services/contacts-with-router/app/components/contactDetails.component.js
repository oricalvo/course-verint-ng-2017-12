import { appModule } from "../app.module";
import template from "./contactDetails.component.html";
export class ContactDetailsComponent {
    constructor(appStore, rootService, $stateParams) {
        this.appStore = appStore;
        this.rootService = rootService;
        const contactId = $stateParams.id;
        if (!contactId) {
            throw new Error("id parameter is missing");
        }
        console.log(contactId);
        this.contact = this.rootService.getContact(contactId);
        console.log(this.contact);
    }
}
appModule.component("appContactDetails", {
    controller: ContactDetailsComponent,
    template: template,
});
//# sourceMappingURL=contactDetails.component.js.map