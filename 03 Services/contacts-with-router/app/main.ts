import * as angular from "angular";
import {appModule} from "./app.module";
import {AppComponent} from "./components/app.component";
import {RootService} from "./services/root.service";
import "./app.store";
import {ContactIndexComponent} from "./components/contactIndex.component";
import "./routes";
import {ContactDetailsComponent} from "./components/contactDetails.component";

const components = [
    AppComponent,
    ContactIndexComponent,
    ContactDetailsComponent,
];

const services = [
    RootService,
];

appModule.run(function(rootService: RootService) {
});

angular.bootstrap(document.querySelector("html"), [appModule.name]);
