import { appModule } from "../app.module";
export class NavigationService {
    constructor(appStore) {
        this.appStore = appStore;
    }
    goto(view) {
        this.appStore.view = view;
    }
}
appModule.service("navigationService", NavigationService);
//# sourceMappingURL=navigation.service.js.map