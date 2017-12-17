const routes = [
    {
        name: "home",
        url: "/",
        component: "appHome",
    },

    {
        name: "about",
        url: "/about",
        component: "appAbout",
    }
];

myApp.config(function($stateProvider, $urlRouterProvider) {
    for(const route of routes) {
        $stateProvider.state(route);
        $urlRouterProvider.otherwise("/");
    }
});
