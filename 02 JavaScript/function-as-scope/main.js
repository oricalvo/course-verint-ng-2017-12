function doSomething() {
    var data = 123;

    (function() {
        var num = 10;

        data = "XXX";
    })();

    console.log(data);
}

doSomething();