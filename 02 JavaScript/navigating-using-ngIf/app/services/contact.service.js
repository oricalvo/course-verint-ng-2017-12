import { appModule } from "../app.module";
export class ContactService {
    constructor(appStore, $timeout) {
        this.appStore = appStore;
        this.$timeout = $timeout;
    }
    add(name) {
        if (!name) {
            return false;
        }
        const contact = {
            id: -1,
            name: name,
        };
        this.appStore.contacts.push(contact);
        return true;
    }
    loadContacts() {
        this.$timeout(() => {
            this.appStore.contacts = [
                { "id": 1, "name": "Ori" },
                { "id": 2, "name": "Roni" },
                { "id": 3, "name": "Udi" },
                { "id": 4, "name": "Tommy" },
            ];
        }, 2500);
    }
}
appModule.service("contactService", ContactService);
//# sourceMappingURL=contact.service.js.map