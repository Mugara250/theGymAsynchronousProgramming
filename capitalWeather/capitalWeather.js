async function capitalWeather(country) {
    try {
        // fetching data about the country
        const url1 = `https://restcountries.com/v3.1/name/${country}`;
        let response1 = await fetch(url1);
        if (!response1.ok) throw new Error("Fetch failed!");
        let countryObj = await response1.json();
        let capital = countryObj[0].capital[0];
        let lat = countryObj[0].capitalInfo.latlng[0];
        let lon = countryObj[0].capitalInfo.latlng[1];

        // fetching data about the weather of the capital city
        const url2 = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true`;
        let response2 = await fetch(url2);
        if (!response2.ok) throw new Error("Fetch failed!");
        let weatherObj = await response2.json();
        let currentTemperature = weatherObj.current_weather.temperature;

        return `Country: ${country}\nCapital: ${capital}\nTemperature: ${currentTemperature}`;
    } catch (error) {
        console.log(error);
    }
}

capitalWeather('Rwanda')
    .then(result => {
        console.log(result);
    })
    .catch(err => {
        console.log(err);
    })































