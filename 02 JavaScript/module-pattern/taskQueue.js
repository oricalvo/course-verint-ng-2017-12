var taskQueue = (function() {
    var tasks = [];

    process();

    function enqueue(task) {
        tasks.push(task);
    }

    function dequeue() {
        if(!tasks.length) {
            return null;
        }

        var task = tasks.pop();
        return task;
    }

    function run(task) {
        console.log("Run task: ", task);
    }

    function process() {
        setInterval(function() {
            var task = dequeue();
            if(task) {
                run(task);
            }
            else {
                console.log("No pending tasks");
            }
        }, 1000);
    }

    return {
        enqueue: enqueue,
        dequeue: dequeue,
    }
})();
