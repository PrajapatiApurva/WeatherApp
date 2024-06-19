// script.js
document.getElementById('getWeatherBtn').addEventListener('click', function() {
    const city = document.getElementById('cityInput').value;
    const apiKey = '3b48bd23ae18a21ce8d9382b3ccc13e3'; // Replace with your OpenWeatherMap API key
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data.cod === 200) {
                const weather = data.weather[0].description;
                const temp = data.main.temp;
                const feels_like = data.main.feels_like;
                console.log(data,'/n',weather,'/n',temp);
                document.getElementById('weatherResult').innerHTML = `
                    <h3>${data.name}</h3>
                    <p>Country: ${data.sys.country}</p>
                    <p>Weather: ${weather}</p>
                    <p>Current Temperature: ${temp} °C</p>
                    <p>Temperature Feels Like: ${feels_like} °C</p>
                `;
            } else {
                document.getElementById('weatherResult').innerHTML = `<p>${data.message}</p>`;
            }
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
            document.getElementById('weatherResult').innerHTML = '<p>Failed to retrieve data</p>';
        });
});
