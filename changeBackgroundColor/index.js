const url = 'https://www.thecolorapi.com/random';

function fetchData(url) {
    return fetch(url);
}

function changeBackgroundColor(ms) {
    setInterval(() => {
        fetchData(url)
            .then(response => {
                if (!response.ok) throw new Error("Invalid URL");
                return response.json();
            })
            .then(dataObj => {
                document.body.style.backgroundColor = dataObj.hex.value;
            })
            .catch(err => {
                console.warn(err.message);
            })
    }, ms)
}

changeBackgroundColor(3000);