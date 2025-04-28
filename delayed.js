function delayed(callback, time) {
    setTimeout(() => {
        callback(time);
    }, time);
}

function execute(time) {
    console.log(`Executed in ${time} millisenconds`);
}

delayed(execute, 5000);

