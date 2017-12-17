import * as angular from "angular";
import {appModule} from "./app.module";
import {AppComponent} from "./components/app.component";
import {RootService} from "./services/root.service";
import "./app.store";

const components = [
    AppComponent,
];

const services = [
    RootService,
];

appModule.run(function(rootService: RootService) {
});

angular.bootstrap(document.querySelector("html"), [appModule.name]);
