const url = 'https://jsonplaceholder.typicode.com/users';

function XHR(url) {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.addEventListener('load', () => {
            resolve(xhr.responseText);
        });
        xhr.addEventListener('error', () => {
            reject(new Error("Invalid URL!"));
        });
        xhr.open('GET', url);
        xhr.send();
    })
}

XHR(url)
    .then(response => {
        return JSON.parse(response);
    })
    .then(dataObj => {
        console.log(dataObj);
        document.querySelector(".user1").innerHTML = `User${dataObj[0].id}`;
        document.querySelector("#name").innerHTML = dataObj[0].name;
        document.querySelector("#username").innerHTML = dataObj[0].username;
        document.querySelector("#email").innerHTML = dataObj[0].email;
    })
    .catch(err => {
        document.querySelector(".response").innerHTML = err.message;
    })

