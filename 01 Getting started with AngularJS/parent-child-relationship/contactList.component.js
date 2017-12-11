class ContactListComponent {
    constructor() {
    }

    remove(contact, index) {
        this.onDelete({
            $event: {
                contact: contact,
                index: index,
            }
        });
    }
}

myApp.component("appContactList", {
    templateUrl: "contactList.component.html",
    controller: ContactListComponent,
    bindings: {
        contacts: "<",
        onDelete: "&",
    }
});