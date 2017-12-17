import {appModule} from "../app.module";
import {AppState} from "../models/app.state";

export class RootService {
    constructor(private appStore: AppState) {
    }

    getContact(contactId: any) {
        const contact = this.appStore.contacts.find(c => c.id == contactId);
        if(!contact) {
            throw new Error("Contact with id " + contactId + " was not found");
        }

        return contact;
    }
}

appModule.service("rootService", RootService);
