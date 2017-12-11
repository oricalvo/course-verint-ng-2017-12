class ContactListComponent {
    constructor($http) {
        $http.get("contacts.json").then(res => {
            this.contacts = res.data;

            console.log(this.contacts);
        });
    }
}

myApp.component("appContactList", {
    templateUrl: "contactList.component.html",
    controller: ContactListComponent,
});
