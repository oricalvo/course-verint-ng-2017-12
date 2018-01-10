class AppComponent {
    constructor() {
        this.contacts = [
            {id:1, name: "Ori"},
            {id:2, name: "Roni"}
        ];
    }

    refresh() {
        // this.contacts = [
        //     {id:1, name: "Udi"},
        //     {id:2, name: "Carmit"}
        // ];

        //this.contacts[0].name = "XXX";

        const contacts = this.contacts.concat([]);

        contacts[0] = {
            ... this.contacts[0],
            name: "XXX",
        };

        this.contacts = contacts;
    }
}

myApp.component("appRoot", {
    templateUrl: "app.component.html",
    controller: AppComponent,
});