import {Contact} from "../models/contact";
import {appModule} from "../app.module";
import {AppState} from "../models/app.state";

export class ContactService {
    constructor(private appStore: AppState,
                private $timeout) {
    }

    add(name: string): boolean {
        if(!name) {
            return false;
        }

        const contact: Contact = {
            id: -1,
            name: name,
        };

        this.appStore.contacts.push(contact);

        return true;
    }

    loadContacts() {
        this.$timeout(()=> {
            this.appStore.contacts = [
                {"id": 1, "name": "Ori"},
                {"id": 2, "name": "Roni"},
                {"id": 3, "name": "Udi"},
                {"id": 4, "name": "Tommy"},
            ]
        }, 2500);
    }
}

appModule.service("contactService", ContactService);
