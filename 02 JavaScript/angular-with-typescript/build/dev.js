const child_process = require("child_process");
const open = require("open");
const port = 4200;

main();

async function main() {
    await build(false);

    openWebServer();

    await delay(500);

    openBrowser();

    await delay(500);

    build(true);

    process.exit();
}

function openWebServer() {
    child_process.spawn(`npx http-server -p ${port}`, {
        stdio: "inherit",
        shell: true,
        detached: true,
    });
}

function openBrowser() {
    open(`http://localhost:${port}/index.html`);
}

function build(watch) {
    return new Promise(function(resolve, reject) {
        const command = watch ? "npx webpack -w" : "npx webpack";
        child_process.spawn(command, {
            stdio: "inherit",
            shell: true,
            detached: watch,
        }).on("close", function() {
            resolve();
        });
    });
}

function delay(ms) {
    return new Promise(function(resolve, reject) {
        setTimeout(resolve, ms);
    });
}
