import {appModule} from "./app.module";

const routes = [
    {
        name: "home",
        url: "/",
        component: "appContactIndex",
    },
    {
        name: "details",
        url: "/contact/:id",
        component: "appContactDetails",
    },
];

appModule.config(function($stateProvider, $urlRouterProvider) {
    for(const route of routes) {
        $stateProvider.state(route);
    }

    $urlRouterProvider.otherwise("/");
});
