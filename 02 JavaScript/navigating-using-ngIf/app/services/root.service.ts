import {appModule} from "../app.module";
import {ContactService} from "./contact.service";
import {NavigationService} from "./navigation.service";

export class RootService {
    constructor(private contactService: ContactService,
                private navigationService: NavigationService) {
    }

    add(name: string) {
        if(!this.contactService.add(name)) {
            return;
        }

        this.navigationService.goto("index");
    }

    goto(view: string) {
        this.navigationService.goto(view);
    }

    loadContacts() {
        this.contactService.loadContacts();
    }
}

appModule.service("rootService", RootService);
