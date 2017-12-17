import * as angular from "angular";
import {appModule} from "./app.module";
import {AppComponent} from "./components/app.component";
import {ContactIndexComponent} from "./components/contactIndex.component";
import {ContactNewComponent} from "./components/contactNew.component";
import {ContactService} from "./services/contact.service";
import {NavigationService} from "./services/navigation.service";
import {RootService} from "./services/root.service";
import "./app.store";

const components = [
    AppComponent,
    ContactIndexComponent,
    ContactNewComponent,
];

const services = [
    ContactService,
    NavigationService,
    RootService,
];

appModule.run(function(rootService: RootService) {
    rootService.loadContacts();
});

angular.bootstrap(document.querySelector("html"), [appModule.name]);
