class ContactDetailsComponent {
    constructor($location, $stateParams) {
        console.log("ContactDetails.ctor", $stateParams);
    }
}

myApp.component("appContactDetails", {
    templateUrl: "contactDetails.component.html",
    controller: ContactDetailsComponent,
});