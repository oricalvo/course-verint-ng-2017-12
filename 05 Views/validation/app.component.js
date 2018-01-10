class AppComponent {
    constructor() {
    }

    save() {
        console.log("form", this.form.$valid);
        console.log("name", this.form.name.$valid);
        console.log("email", this.form.email.$valid, this.form.email.$error);
    }
}

myApp.component("appRoot", {
    templateUrl: "app.component.html",
    controller: AppComponent,
});