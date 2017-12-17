import {appModule} from "../app.module";
import {AppState} from "../models/app.state";

export class NavigationService {
    constructor(private appStore: AppState) {
    }

    goto(view: string) {
        this.appStore.view = view;
    }
}

appModule.service("navigationService", NavigationService);
