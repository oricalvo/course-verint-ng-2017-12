function run() {
    console.log("common.run");
}

function doSomething() {
    run();
}

exports.doSomething = doSomething;

