import {appModule} from "../app.module";
import template from "./contactNew.component.html";
import {Contact} from "../models/contact";
import {ContactService} from "../services/contact.service";
import {NavigationService} from "../services/navigation.service";
import {RootService} from "../services/root.service";

export class ContactNewComponent {
    name: string;

    constructor(private rootService: RootService) {
    }

    add() {
        this.rootService.add(this.name);
    }
}

appModule.component("appContactNew", {
    controller: ContactNewComponent,
    template: template,
});
