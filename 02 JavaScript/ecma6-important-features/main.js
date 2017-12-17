import {run} from "./common.js";

class Timer {
    constructor(interval) {
        this.id = 1234;
        this.interval = interval;
    }

    async start() {
        try {
            console.log("x");

            const res = await delay(1500);

            console.log(res);
        }
        catch(err) {
            console.log("Error: " + err.message);
        }

        // delay(1500).then(function() {
        //     console.log("y");
        // });
        //
        // setTimeout(()=> {
        //     console.log("y");
        // }, 1500);

        // setInterval(() => {
        //     console.log("tick", this.id);
        // }, this.interval);
    }
}

function delay(ms) {
    return new Promise(function(resolve, reject) {
        setTimeout(()=> {
            //resolve(42);
            reject(new Error("Ooops"));
        }, ms);
    });
}

const timer = new Timer(500);
timer.start();

