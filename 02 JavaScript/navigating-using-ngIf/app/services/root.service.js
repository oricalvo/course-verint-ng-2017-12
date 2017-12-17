import { appModule } from "../app.module";
export class RootService {
    constructor(contactService, navigationService) {
        this.contactService = contactService;
        this.navigationService = navigationService;
    }
    add(name) {
        if (!this.contactService.add(name)) {
            return;
        }
        this.navigationService.goto("index");
    }
    goto(view) {
        this.navigationService.goto(view);
    }
    loadContacts() {
        this.contactService.loadContacts();
    }
}
appModule.service("rootService", RootService);
//# sourceMappingURL=root.service.js.map