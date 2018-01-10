class AppComponent {
    constructor($q, $http) {
        this.$q = $q;
        this.$http = $http;
        this.counter = 0;

        $http.get("/api/contact").then(res => {
            this.contacts = res.data;
        });

        // this.contacts = [
        //     {id:1, name: "Ori"},
        //     {id:2, name: "Roni"},
        //     {id:3, name: "Udi"},
        // ];

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

    send() {
        //this.$http.post("/api/data",
    }
}

myApp.component("appRoot", {
    controller: AppComponent,
    templateUrl: "app.component.html",
});
