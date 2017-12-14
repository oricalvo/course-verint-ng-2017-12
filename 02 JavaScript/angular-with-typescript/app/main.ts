import * as angular from "angular";
import {appModule} from "./app.module";
import {AppComponent} from "./components/app.component";

const components = [
  AppComponent,
];

angular.bootstrap(document.querySelector("html"), [appModule.name]);
