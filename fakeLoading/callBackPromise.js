const message = document.querySelector(".message");
const resolveMessage = document.querySelector(".resolve");
function delayed(callback, time) {
    let executed = false;
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            callback(time);
            executed = true;
            executed === true ? resolve("Message successfully loaded!") : reject("Message loading failure!");
        }, time);

    })
}

function execute(time) {
    message.textContent = `Message loaded after ${time} milliseconds!`;
}

delayed(execute, 5000)
.then(response => {
    resolveMessage.textContent = response;
})
.catch(err => {
    resolveMessage.textContent = err;
})

