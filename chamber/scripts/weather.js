const currentweather = document.querySelector('#current-weather');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');

// const url_weather = 'https://api.openweathermap.org/data/2.5/weather?lat=43.49&lon=-112.04&units=imperial&cnt=3&appid=3f934dedeb541daa6e92bcc8e4a9d3f4';
// const url_day = 'https://api.openweathermap.org/data/2.5/forecast/daily?lat=43.49&lon=-112.04&units=imperial&cnt=3&appid=3f934dedeb541daa6e92bcc8e4a9d3f4';
//43.49402662366704, -112.04130127560713

async function apiFetch(){
    try {
        const response = await fetch(url_weather);
        const responsetwo = await fetch(url_day)
        if (response.ok){
            let data = await response.json();
            console.log(data);
            displayResults(data);
        }
        else {
            throw Error(await response.text());
        }
        if (responsetwo.ok){
            let datatwo = await responsetwo.json();
            console.log(datatwo);
            // displayResults(data);
        }
        else {
            throw Error(await response.text());
        }
        
    } catch (error) {
        console.log(error);
    }
}

function displayResults(data) {

    const temp = document.createElement('p');
    const imagedesc = document.createElement('p');
    const high = document.createElement('p');
    const low = document.createElement('p');
    const humidity = document.createElement('p');
    const sunrise = document.createElement('p');
    const sunset = document.createElement('p');
    const iconsrc = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    let desc = data.weather[0].description;
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);

    temp.textContent = `${data.main.temp}°F`;
    imagedesc.textContent = data.weather[0].description;
    high.textContent = `High: ${data.main.temp_max}°`;
    low.textContent = `Low: ${data.main.temp_min}`;
    humidity.textContent = `Humidity: ${data.main.humidity}%`
    sunrise.textContent = `Sunrise: am`;
    sunset.textContent = `Sunset: pm`;

    currentweather.appendChild(temp);
    currentweather.appendChild(imagedesc);
    currentweather.appendChild(high);
    currentweather.appendChild(low);
    currentweather.appendChild(humidity);
    currentweather.appendChild(sunrise);
    currentweather.appendChild(sunset);
}

apiFetch();

// {
//     "coord": {
//         "lon": -112.04,
//         "lat": 43.49
//     },
//     "weather": [
//         {
//             "id": 800,
//             "main": "Clear",
//             "description": "clear sky",
//             "icon": "01d"
//         }
//     ],
//     "base": "stations",
//     "main": {
//         "temp": 25.99,
//         "feels_like": 20.43,
//         "temp_min": 24.85,
//         "temp_max": 26.69,
//         "pressure": 1022,
//         "humidity": 78,
//         "sea_level": 1022,
//         "grnd_level": 851
//     },
//     "visibility": 10000,
//     "wind": {
//         "speed": 4.61,
//         "deg": 240
//     },
//     "clouds": {
//         "all": 0
//     },
//     "dt": 1769214348,
//     "sys": {
//         "type": 2,
//         "id": 2001801,
//         "country": "US",
//         "sunrise": 1769179965,
//         "sunset": 1769214420
//     },
//     "timezone": -25200,
//     "id": 5596475,
//     "name": "Idaho Falls",
//     "cod": 200
// }