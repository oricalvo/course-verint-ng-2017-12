main();

function log(message) {
    console.log(performance.now() + ": " + message);
}

function main() {
    log("Do something");

    run();
}

