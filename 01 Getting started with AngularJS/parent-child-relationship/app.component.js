class AppComponent {
    constructor() {
        this.contacts = [
            {id: 1, name: "Ori"},
            {id: 2, name: "Roni"}
        ];
    }

    add() {
        this.contacts.push({
            id: -1,
            name: "XXX"
        });
    }

    onContactDelete($event) {
        const contact = $event.contact;

        if(confirm("Are you sure you want to delete contact " + contact.name + " ?")) {
            this.contacts.splice($event.index, 1);
        }
    }
}

myApp.component("appRoot", {
    templateUrl: "app.component.html",
    controller: AppComponent,
});