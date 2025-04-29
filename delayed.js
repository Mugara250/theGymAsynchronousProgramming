function delayed(callback, time) {
    setTimeout(() => {
        console.log(`Start time: ${performance.now()}`);
        callback(time);
        console.log(`End time: ${performance.now()}`);
    }, time);

}

function execute(time) {
    console.log(`Executed in ${time} millisenconds`);
}

delayed(execute, 5000);

