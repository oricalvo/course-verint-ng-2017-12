function run() {
    var data = "123";
    console.log("common.run", data);
}

function doSomething() {
    run();
}

exports.doSomething = doSomething;

