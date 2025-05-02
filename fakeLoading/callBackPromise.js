function delayed(callback, time) {
    let executed = false;
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            callback(time);
            executed = true;
            executed === true ? resolve("Successful execution!") : reject("Failed execution!"); 
        }, time);

    })
}

function execute(time) {
    console.log(`Executed in ${time} millisenconds`);
}

delayed(execute, 5000)
.then(response => {
    console.log(response);
}, (err) => {
    console.log(err);
})

