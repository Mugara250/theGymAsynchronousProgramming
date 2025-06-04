/* 
1. We'll need a for loop
2. The function must be an async function
3. We'll fetch data inside the loop in the try block using the fetch() method
4. If the response status is 200, we will return the response object
5. If the response is not 200, we will console.log the error message and the http status code
6. We will also console.log the error message and status code in the catch block (this is in case the fetch fails altogether)
7. We shall then await before we make another fetch() request by await a promise that will always resolve. Here we shall use setTimeout() inside the promise that will resolve after the specified exponential time
8. In case all the attempts have failed, we shall throw a new error that will be caught by the catch in the .then() chain during the function call.
*/
const url = 'https://jsonplaceholder.typicode.com/postskjafkjdaskljaf';

async function retryFetchWithBackoff(url, retries = 4, baseDelay = 500) {
    for (let attempt = 1; attempt <= retries; attempt++) {
        try {
            let response = await fetch(url);
            if (response.ok) return response;
            console.log(`Attempt${attempt} failed with HTTP status code ${response.status}`);

        } catch {
            console.log(`Attempt${attempt} completely failed with HTTP status code ${response.status}`);
        }

        await new Promise(resolve => {
            setTimeout(resolve, baseDelay * Math.pow(2, attempt));
        })
    }
    throw new Error("Fetch completely failed!");
}

retryFetchWithBackoff(url)
    .then(response => {
        return response.json();
    })
    .then(dataObj => {
        console.log(dataObj);
    })
    .catch(err => {
        console.log(err.message);
    })