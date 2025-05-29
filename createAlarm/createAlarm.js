function createAlarm(name, delay) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (delay < 2) {
                reject(new Error("Delay is not sufficient!"));
            }
            resolve(`Wake up ${name}`);
        }, delay);
    })
}

createAlarm("Matabaro", 1)
    .then(message => {
        console.log(message);
    })
    .catch(err => {
        console.log(err.message);
    })