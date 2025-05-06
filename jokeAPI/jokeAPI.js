async function jokeAPI() {
    try {
        const response = await fetch('https://official-joke-api.appspot.com/jokes/random/');
        // const data = await response.json();
        const data = await response.json();
        console.log(data);
    } catch (err) {
        throw err;
    }

}

jokeAPI();
