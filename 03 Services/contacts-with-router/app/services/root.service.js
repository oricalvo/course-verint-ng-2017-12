import { appModule } from "../app.module";
export class RootService {
    constructor(appStore) {
        this.appStore = appStore;
    }
    getContact(contactId) {
        const contact = this.appStore.contacts.find(c => c.id == contactId);
        if (!contact) {
            throw new Error("Contact with id " + contactId + " was not found");
        }
        return contact;
    }
}
appModule.service("rootService", RootService);
//# sourceMappingURL=root.service.js.map