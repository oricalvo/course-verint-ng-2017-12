import {appModule} from "../app.module";
import template from "./contactDetails.component.html";
import {AppState, Contact} from "../models/app.state";
import {RootService} from "../services/root.service";

export class ContactDetailsComponent {
    contact: Contact;

    constructor(private appStore: AppState,
                private rootService: RootService,
                $stateParams) {
        const contactId = $stateParams.id;
        if(!contactId) {
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
