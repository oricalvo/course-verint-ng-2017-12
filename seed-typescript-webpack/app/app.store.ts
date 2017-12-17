import {AppState} from "./models/app.state";
import {appModule} from "./app.module";

const appStore: AppState = {
    view: "index",
    contacts: null,
}

appModule.value("appStore", appStore);
