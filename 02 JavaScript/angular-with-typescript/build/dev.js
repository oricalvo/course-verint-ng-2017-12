const child_process = require("child_process");
const open = require("open");
const port = 4200;

main();

async function main() {
    await build();

    httpServer();

    await delay(1000);

    openBrowser();
}

function httpServer() {
    child_process.spawn(`npx http-server -p ${port}`, {
        stdio: "inherit",
        shell: true,
    });
}

function openBrowser() {
    open(`http://localhost:${port}/index.html`);
}

function delay(ms) {
    return new Promise(function(resolve, reject) {
        setTimeout(resolve, ms);
    });
}

function build() {
    return new Promise(function(resolve, reject) {
        child_process.spawn("npx webpack", {
            stdio: "inherit",
            shell: true,
        }).on("close", function() {
            resolve();
        });
    });
}
