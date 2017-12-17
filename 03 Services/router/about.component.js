class AboutComponent {
    constructor($location) {
        console.log("About.ctor");
    }
}

myApp.component("appAbout", {
    template: "<h1>About</h1>",
    controller: AboutComponent,
});