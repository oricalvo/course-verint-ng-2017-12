class AppComponent {
    constructor($q) {
        this.counter = 0;
        this.$q = $q;
    }

    run() {
        this.delay(1500).then(()=> {
            this.counter++;
        });
    }

    delay(ms) {
        const deferred = this.$q.defer();

        setTimeout(function() {
            deferred.resolve();
        }, ms);

        return deferred.promise;
    }
}

myApp.component("appRoot", {
    templateUrl: "app.component.html",
    controller: AppComponent,
});