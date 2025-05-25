/*
There are two asynchronous functions:
1. The main functions is fetchFirstUserPostsWithRetries(). 
2. The second function is fetchWithRetry(url, retries).
*/

let url = 'https://jsonplaceholder.typicode.com/users';

async function fetchWithRetry(url, retries = 3) {
    for (let attempt = 1; attempt <= retries; attempt++) {
        try {
            let request = await fetch(url);
            let response = await request.json();
            return response;
        } catch (err) {
            console.log(err);
            if (attempt === retries) throw new Error("Failed to fetch completely");
        }
    }
}

async function fetchFirstUserPostsWithRetries() {
    try {
        let users = await fetchWithRetry(url);
        let userID = users[0].id;
        let url2 = `https://jsonplaceholder.typicode.com/posts?userId=${userID}`;
        let posts = await fetchWithRetry(url2);
        return {
            user: users[0],
            posts: posts
        }

    } catch (err) {
        console.log(err);
    }
}

fetchFirstUserPostsWithRetries()
    .then(result => {
        console.log(result);
    })
    .catch(err => {
        console.log(err);
    })