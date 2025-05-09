let countdown = document.querySelector(".countdown");
let intervalID;



window.addEventListener('load', start);
function countDown() {
    return new Promise(resolve => {
        let count = Number(countdown.textContent);

        intervalID = setInterval(() => {
            count--;
            countdown.textContent = count;
            if (count === 0) {
                clearInterval(intervalID)
                resolve("Countdown has ended!");
            }
        }, 1000);
    });
}

async function start() {
    const result = await countDown();
    const message = document.createElement('p')
    message.className = "message";
    message.textContent = result;
    message.style.fontSize = "5rem";
    document.body.appendChild(message);
}
