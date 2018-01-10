class ContactItemComponent {
    constructor() {
        console.log("ContactItem.ctor");
    }

    // $onInit() {
    // }

    $onChanges() {
        this.signature = this.contact.name.substring(0,2);
    }

    $onDestroy() {
        console.log("ContactItem.$onDestroy");
    }
}

myApp.component("appContactItem", {
    templateUrl: "contactItem.component.html",
    controller: ContactItemComponent,
    bindings: {
        "contact": "<",
    }
});