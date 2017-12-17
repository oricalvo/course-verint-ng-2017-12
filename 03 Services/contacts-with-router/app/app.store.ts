import {AppState} from "./models/app.state";
import {appModule} from "./app.module";

const appStore: AppState = {
    contacts: [
        {"id": 1, "name": "Ori", "email": "doidjioj"},
        {"id": 2, "name": "Roni", "email": "doidjioj"},
        {"id": 3, "name": "Udi", "email": "doidjioj"},
        {"id": 4, "name": "Tommy", "email": "doidjioj"},
    ],
}

appModule.value("appStore", appStore);
