import {appModule} from "../app.module";
import template from "./app.component.html";

export class AppComponent {
    contacts: Contact[];

    constructor(private $http) {
        this.init();
    }

    init() {
        this.$http.get("data/contacts.json").then(res => {
            this.contacts = res.data;
        });
    }
}

interface Contact {
    id: number;
    name: string;
}

appModule.component("appRoot", {
    controller: AppComponent,
    template: template,
});
