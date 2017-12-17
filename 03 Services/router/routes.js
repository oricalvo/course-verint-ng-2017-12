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
    },

    {
        name: "contactDetails",
        url: "/contact/:id",
        component: "appContactDetails",
    }
];

myApp.config(function($stateProvider, $urlRouterProvider) {
    for(const route of routes) {
        $stateProvider.state(route);
        $urlRouterProvider.otherwise("/");
    }
});
