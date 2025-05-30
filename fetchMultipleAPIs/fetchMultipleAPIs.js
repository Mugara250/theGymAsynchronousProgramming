function fetchMultipleAPIs(urls) {
    return Promise.all(urls);
}

const URLs = [
    fetch('https://jsonplaceholder.typicode.com/posts/4'),
    fetch('https://jsonplaceholder.typicode.com/posts/5'),
    fetch('https://jsonplaceholder.typicode.com/posts/6')
]

fetchMultipleAPIs(URLs)
    .then(response => {
        response.forEach(res => {
            if (!res.ok) throw new Error("Invalid URL!");
        });
        return Promise.all(response.map(res => res.json()));
    })
    .then(dataObj => {
        dataObj.forEach(data => {
            console.log(data);
        })
    })
    .catch(err => {
        console.log(err.message);
    })