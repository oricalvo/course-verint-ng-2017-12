class AppComponent {
    constructor($q) {
        this.$q = $q;
        this.counter = 0;
        this.contacts = [
            {id:1, name: "Ori"},
            {id:2, name: "Roni"},
            {id:3, name: "Udi"},
        ];
        this.selectedContact = null;
    }

    inc() {
        ++this.counter;
    }

    dec() {
        --this.counter;
    }

    querySearch(text) {
        const defer = this.$q.defer();

        console.log("Search: " + text);


        setTimeout(()=> {
            const res = this.contacts.filter(c => c.name.toLowerCase().indexOf(text.toLowerCase()) != -1);
            defer.resolve(res);
        }, 500);

        return defer.promise;
    }
}

myApp.component("appRoot", {
    controller: AppComponent,
    templateUrl: "app.component.html",
});
