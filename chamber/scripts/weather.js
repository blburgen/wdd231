const currentweather = document.querySelector('#current-weather');
const forecast = document.querySelector('#forecast');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');

const url_weather = 'https://api.openweathermap.org/data/2.5/weather?lat=43.49&lon=-112.04&units=imperial&cnt=3&appid=3f934dedeb541daa6e92bcc8e4a9d3f4';
const url_day = 'https://api.openweathermap.org/data/2.5/forecast?lat=43.49&lon=-112.04&units=imperial&cnt=18&appid=3f934dedeb541daa6e92bcc8e4a9d3f4';
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
            displaySecondResults(datatwo);
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
    const weatherIconImage = document.createElement('img');
    const iconsrc = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    let desc = data.weather[0].description;
    weatherIconImage.setAttribute('src', iconsrc);
    weatherIconImage.setAttribute('alt', desc);
    weatherIcon.appendChild(weatherIconImage);

    temp.textContent = `${data.main.temp}°F`;
    imagedesc.textContent = data.weather[0].description;
    high.textContent = `High: ${data.main.temp_max}°`;
    low.textContent = `Low: ${data.main.temp_min}`;
    humidity.textContent = `Humidity: ${data.main.humidity}%`

    const suntime = new Date(data.sys.sunrise * 1000);
    const localSunTime = suntime.toLocaleTimeString(undefined, {hour: 'numeric',minute:'numeric',hour12: true})
    sunrise.textContent = `Sunrise: ${localSunTime}`;
    
    const downtime = new Date(data.sys.sunset * 1000);
    const localDownTime = downtime.toLocaleTimeString(undefined, {hour: 'numeric',minute:'numeric',hour12: true})
    sunset.textContent = `Sunset: ${localDownTime}`;

    currentweather.appendChild(temp);
    currentweather.appendChild(imagedesc);
    currentweather.appendChild(high);
    currentweather.appendChild(low);
    currentweather.appendChild(humidity);
    currentweather.appendChild(sunrise);
    currentweather.appendChild(sunset);
}

function displaySecondResults(datatwo) {

    const temp_one = document.createElement('p');
    const temp_two = document.createElement('p');
    const temp_three = document.createElement('p');

    temp_one.textContent = `Today: ${datatwo.list[0].main.temp}°F`;
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate()+1);
    let dayOfWeek = tomorrow.toLocaleDateString('en-Us', {weekday: 'long'});
    temp_two.textContent = `${dayOfWeek}: ${datatwo.list[8].main.temp}°F`;
    tomorrow.setDate(tomorrow.getDate()+1);
    dayOfWeek = tomorrow.toLocaleDateString('en-Us', {weekday: 'long'});
    temp_three.textContent = `${dayOfWeek}: ${datatwo.list[16].main.temp}°F`;

    forecast.appendChild(temp_one);
    forecast.appendChild(temp_two);
    forecast.appendChild(temp_three);
}

apiFetch();

// todays's data
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

// hourly data
// {
//     "cod": "200",
//     "message": 0,
//     "cnt": 18,
//     "list": [
//         {
//             "dt": 1769223600,
//             "main": {
//                 "temp": 23.9,
//                 "feels_like": 11.64,
//                 "temp_min": 19.2,
//                 "temp_max": 23.9,
//                 "pressure": 1026,
//                 "sea_level": 1026,
//                 "grnd_level": 853,
//                 "humidity": 80,
//                 "temp_kf": 2.61
//             },
//             "weather": [
//                 {
//                     "id": 800,
//                     "main": "Clear",
//                     "description": "clear sky",
//                     "icon": "01n"
//                 }
//             ],
//             "clouds": {
//                 "all": 0
//             },
//             "wind": {
//                 "speed": 14.03,
//                 "deg": 20,
//                 "gust": 26.37
//             },
//             "visibility": 10000,
//             "pop": 0,
//             "sys": {
//                 "pod": "n"
//             },
//             "dt_txt": "2026-01-24 03:00:00"
//         },
//         {
//             "dt": 1769234400,
//             "main": {
//                 "temp": 21.45,
//                 "feels_like": 9.46,
//                 "temp_min": 16.56,
//                 "temp_max": 21.45,
//                 "pressure": 1027,
//                 "sea_level": 1027,
//                 "grnd_level": 853,
//                 "humidity": 68,
//                 "temp_kf": 2.72
//             },
//             "weather": [
//                 {
//                     "id": 800,
//                     "main": "Clear",
//                     "description": "clear sky",
//                     "icon": "01n"
//                 }
//             ],
//             "clouds": {
//                 "all": 0
//             },
//             "wind": {
//                 "speed": 12.1,
//                 "deg": 25,
//                 "gust": 25.19
//             },
//             "visibility": 10000,
//             "pop": 0,
//             "sys": {
//                 "pod": "n"
//             },
//             "dt_txt": "2026-01-24 06:00:00"
//         },
//         {
//             "dt": 1769245200,
//             "main": {
//                 "temp": 10.89,
//                 "feels_like": -1.71,
//                 "temp_min": 4.37,
//                 "temp_max": 10.89,
//                 "pressure": 1029,
//                 "sea_level": 1029,
//                 "grnd_level": 853,
//                 "humidity": 56,
//                 "temp_kf": 3.62
//             },
//             "weather": [
//                 {
//                     "id": 800,
//                     "main": "Clear",
//                     "description": "clear sky",
//                     "icon": "01n"
//                 }
//             ],
//             "clouds": {
//                 "all": 0
//             },
//             "wind": {
//                 "speed": 9.24,
//                 "deg": 24,
//                 "gust": 19.82
//             },
//             "visibility": 10000,
//             "pop": 0,
//             "sys": {
//                 "pod": "n"
//             },
//             "dt_txt": "2026-01-24 09:00:00"
//         },
//         {
//             "dt": 1769256000,
//             "main": {
//                 "temp": 4.37,
//                 "feels_like": -6.77,
//                 "temp_min": 4.37,
//                 "temp_max": 4.37,
//                 "pressure": 1030,
//                 "sea_level": 1030,
//                 "grnd_level": 853,
//                 "humidity": 45,
//                 "temp_kf": 0
//             },
//             "weather": [
//                 {
//                     "id": 800,
//                     "main": "Clear",
//                     "description": "clear sky",
//                     "icon": "01n"
//                 }
//             ],
//             "clouds": {
//                 "all": 0
//             },
//             "wind": {
//                 "speed": 6.08,
//                 "deg": 16,
//                 "gust": 10.16
//             },
//             "visibility": 10000,
//             "pop": 0,
//             "sys": {
//                 "pod": "n"
//             },
//             "dt_txt": "2026-01-24 12:00:00"
//         },
//         {
//             "dt": 1769266800,
//             "main": {
//                 "temp": 3.78,
//                 "feels_like": -3.89,
//                 "temp_min": 3.78,
//                 "temp_max": 3.78,
//                 "pressure": 1031,
//                 "sea_level": 1031,
//                 "grnd_level": 853,
//                 "humidity": 46,
//                 "temp_kf": 0
//             },
//             "weather": [
//                 {
//                     "id": 800,
//                     "main": "Clear",
//                     "description": "clear sky",
//                     "icon": "01d"
//                 }
//             ],
//             "clouds": {
//                 "all": 4
//             },
//             "wind": {
//                 "speed": 3.65,
//                 "deg": 13,
//                 "gust": 4.16
//             },
//             "visibility": 10000,
//             "pop": 0,
//             "sys": {
//                 "pod": "d"
//             },
//             "dt_txt": "2026-01-24 15:00:00"
//         },
//         {
//             "dt": 1769277600,
//             "main": {
//                 "temp": 15.8,
//                 "feels_like": 15.8,
//                 "temp_min": 15.8,
//                 "temp_max": 15.8,
//                 "pressure": 1030,
//                 "sea_level": 1030,
//                 "grnd_level": 854,
//                 "humidity": 27,
//                 "temp_kf": 0
//             },
//             "weather": [
//                 {
//                     "id": 800,
//                     "main": "Clear",
//                     "description": "clear sky",
//                     "icon": "01d"
//                 }
//             ],
//             "clouds": {
//                 "all": 2
//             },
//             "wind": {
//                 "speed": 2.8,
//                 "deg": 233,
//                 "gust": 2.53
//             },
//             "visibility": 10000,
//             "pop": 0,
//             "sys": {
//                 "pod": "d"
//             },
//             "dt_txt": "2026-01-24 18:00:00"
//         },
//         {
//             "dt": 1769288400,
//             "main": {
//                 "temp": 24.82,
//                 "feels_like": 16.9,
//                 "temp_min": 24.82,
//                 "temp_max": 24.82,
//                 "pressure": 1026,
//                 "sea_level": 1026,
//                 "grnd_level": 853,
//                 "humidity": 27,
//                 "temp_kf": 0
//             },
//             "weather": [
//                 {
//                     "id": 800,
//                     "main": "Clear",
//                     "description": "clear sky",
//                     "icon": "01d"
//                 }
//             ],
//             "clouds": {
//                 "all": 5
//             },
//             "wind": {
//                 "speed": 6.93,
//                 "deg": 218,
//                 "gust": 8.28
//             },
//             "visibility": 10000,
//             "pop": 0,
//             "sys": {
//                 "pod": "d"
//             },
//             "dt_txt": "2026-01-24 21:00:00"
//         },
//         {
//             "dt": 1769299200,
//             "main": {
//                 "temp": 24.24,
//                 "feels_like": 14.5,
//                 "temp_min": 24.24,
//                 "temp_max": 24.24,
//                 "pressure": 1025,
//                 "sea_level": 1025,
//                 "grnd_level": 852,
//                 "humidity": 41,
//                 "temp_kf": 0
//             },
//             "weather": [
//                 {
//                     "id": 800,
//                     "main": "Clear",
//                     "description": "clear sky",
//                     "icon": "01d"
//                 }
//             ],
//             "clouds": {
//                 "all": 5
//             },
//             "wind": {
//                 "speed": 9.35,
//                 "deg": 203,
//                 "gust": 16.73
//             },
//             "visibility": 10000,
//             "pop": 0,
//             "sys": {
//                 "pod": "d"
//             },
//             "dt_txt": "2026-01-25 00:00:00"
//         },
//         {
//             "dt": 1769310000,
//             "main": {
//                 "temp": 21.58,
//                 "feels_like": 12.02,
//                 "temp_min": 21.58,
//                 "temp_max": 21.58,
//                 "pressure": 1025,
//                 "sea_level": 1025,
//                 "grnd_level": 852,
//                 "humidity": 48,
//                 "temp_kf": 0
//             },
//             "weather": [
//                 {
//                     "id": 801,
//                     "main": "Clouds",
//                     "description": "few clouds",
//                     "icon": "02n"
//                 }
//             ],
//             "clouds": {
//                 "all": 11
//             },
//             "wind": {
//                 "speed": 8.19,
//                 "deg": 177,
//                 "gust": 17.98
//             },
//             "visibility": 10000,
//             "pop": 0,
//             "sys": {
//                 "pod": "n"
//             },
//             "dt_txt": "2026-01-25 03:00:00"
//         },
//         {
//             "dt": 1769320800,
//             "main": {
//                 "temp": 20.73,
//                 "feels_like": 8.98,
//                 "temp_min": 20.73,
//                 "temp_max": 20.73,
//                 "pressure": 1025,
//                 "sea_level": 1025,
//                 "grnd_level": 851,
//                 "humidity": 64,
//                 "temp_kf": 0
//             },
//             "weather": [
//                 {
//                     "id": 801,
//                     "main": "Clouds",
//                     "description": "few clouds",
//                     "icon": "02n"
//                 }
//             ],
//             "clouds": {
//                 "all": 11
//             },
//             "wind": {
//                 "speed": 11.34,
//                 "deg": 194,
//                 "gust": 23.94
//             },
//             "visibility": 10000,
//             "pop": 0,
//             "sys": {
//                 "pod": "n"
//             },
//             "dt_txt": "2026-01-25 06:00:00"
//         },
//         {
//             "dt": 1769331600,
//             "main": {
//                 "temp": 18.39,
//                 "feels_like": 8.85,
//                 "temp_min": 18.39,
//                 "temp_max": 18.39,
//                 "pressure": 1026,
//                 "sea_level": 1026,
//                 "grnd_level": 851,
//                 "humidity": 63,
//                 "temp_kf": 0
//             },
//             "weather": [
//                 {
//                     "id": 802,
//                     "main": "Clouds",
//                     "description": "scattered clouds",
//                     "icon": "03n"
//                 }
//             ],
//             "clouds": {
//                 "all": 33
//             },
//             "wind": {
//                 "speed": 7.29,
//                 "deg": 182,
//                 "gust": 15.5
//             },
//             "visibility": 10000,
//             "pop": 0,
//             "sys": {
//                 "pod": "n"
//             },
//             "dt_txt": "2026-01-25 09:00:00"
//         },
//         {
//             "dt": 1769342400,
//             "main": {
//                 "temp": 16.77,
//                 "feels_like": 9.75,
//                 "temp_min": 16.77,
//                 "temp_max": 16.77,
//                 "pressure": 1027,
//                 "sea_level": 1027,
//                 "grnd_level": 851,
//                 "humidity": 64,
//                 "temp_kf": 0
//             },
//             "weather": [
//                 {
//                     "id": 801,
//                     "main": "Clouds",
//                     "description": "few clouds",
//                     "icon": "02n"
//                 }
//             ],
//             "clouds": {
//                 "all": 20
//             },
//             "wind": {
//                 "speed": 4.54,
//                 "deg": 164,
//                 "gust": 4.54
//             },
//             "visibility": 10000,
//             "pop": 0,
//             "sys": {
//                 "pod": "n"
//             },
//             "dt_txt": "2026-01-25 12:00:00"
//         },
//         {
//             "dt": 1769353200,
//             "main": {
//                 "temp": 16.65,
//                 "feels_like": 9.84,
//                 "temp_min": 16.65,
//                 "temp_max": 16.65,
//                 "pressure": 1028,
//                 "sea_level": 1028,
//                 "grnd_level": 853,
//                 "humidity": 66,
//                 "temp_kf": 0
//             },
//             "weather": [
//                 {
//                     "id": 802,
//                     "main": "Clouds",
//                     "description": "scattered clouds",
//                     "icon": "03d"
//                 }
//             ],
//             "clouds": {
//                 "all": 34
//             },
//             "wind": {
//                 "speed": 4.36,
//                 "deg": 155,
//                 "gust": 4.09
//             },
//             "visibility": 10000,
//             "pop": 0,
//             "sys": {
//                 "pod": "d"
//             },
//             "dt_txt": "2026-01-25 15:00:00"
//         },
//         {
//             "dt": 1769364000,
//             "main": {
//                 "temp": 23.07,
//                 "feels_like": 19,
//                 "temp_min": 23.07,
//                 "temp_max": 23.07,
//                 "pressure": 1029,
//                 "sea_level": 1029,
//                 "grnd_level": 855,
//                 "humidity": 54,
//                 "temp_kf": 0
//             },
//             "weather": [
//                 {
//                     "id": 802,
//                     "main": "Clouds",
//                     "description": "scattered clouds",
//                     "icon": "03d"
//                 }
//             ],
//             "clouds": {
//                 "all": 39
//             },
//             "wind": {
//                 "speed": 3.13,
//                 "deg": 231,
//                 "gust": 3.2
//             },
//             "visibility": 10000,
//             "pop": 0,
//             "sys": {
//                 "pod": "d"
//             },
//             "dt_txt": "2026-01-25 18:00:00"
//         },
//         {
//             "dt": 1769374800,
//             "main": {
//                 "temp": 27.79,
//                 "feels_like": 27.79,
//                 "temp_min": 27.79,
//                 "temp_max": 27.79,
//                 "pressure": 1028,
//                 "sea_level": 1028,
//                 "grnd_level": 855,
//                 "humidity": 43,
//                 "temp_kf": 0
//             },
//             "weather": [
//                 {
//                     "id": 800,
//                     "main": "Clear",
//                     "description": "clear sky",
//                     "icon": "01d"
//                 }
//             ],
//             "clouds": {
//                 "all": 0
//             },
//             "wind": {
//                 "speed": 0.98,
//                 "deg": 301,
//                 "gust": 3.09
//             },
//             "visibility": 10000,
//             "pop": 0,
//             "sys": {
//                 "pod": "d"
//             },
//             "dt_txt": "2026-01-25 21:00:00"
//         },
//         {
//             "dt": 1769385600,
//             "main": {
//                 "temp": 26.91,
//                 "feels_like": 26.91,
//                 "temp_min": 26.91,
//                 "temp_max": 26.91,
//                 "pressure": 1028,
//                 "sea_level": 1028,
//                 "grnd_level": 856,
//                 "humidity": 44,
//                 "temp_kf": 0
//             },
//             "weather": [
//                 {
//                     "id": 800,
//                     "main": "Clear",
//                     "description": "clear sky",
//                     "icon": "01d"
//                 }
//             ],
//             "clouds": {
//                 "all": 0
//             },
//             "wind": {
//                 "speed": 2.13,
//                 "deg": 115,
//                 "gust": 2.19
//             },
//             "visibility": 10000,
//             "pop": 0,
//             "sys": {
//                 "pod": "d"
//             },
//             "dt_txt": "2026-01-26 00:00:00"
//         },
//         {
//             "dt": 1769396400,
//             "main": {
//                 "temp": 22.93,
//                 "feels_like": 17.65,
//                 "temp_min": 22.93,
//                 "temp_max": 22.93,
//                 "pressure": 1031,
//                 "sea_level": 1031,
//                 "grnd_level": 857,
//                 "humidity": 54,
//                 "temp_kf": 0
//             },
//             "weather": [
//                 {
//                     "id": 800,
//                     "main": "Clear",
//                     "description": "clear sky",
//                     "icon": "01n"
//                 }
//             ],
//             "clouds": {
//                 "all": 0
//             },
//             "wind": {
//                 "speed": 3.96,
//                 "deg": 115,
//                 "gust": 3.56
//             },
//             "visibility": 10000,
//             "pop": 0,
//             "sys": {
//                 "pod": "n"
//             },
//             "dt_txt": "2026-01-26 03:00:00"
//         },
//         {
//             "dt": 1769407200,
//             "main": {
//                 "temp": 20.57,
//                 "feels_like": 14.52,
//                 "temp_min": 20.57,
//                 "temp_max": 20.57,
//                 "pressure": 1033,
//                 "sea_level": 1033,
//                 "grnd_level": 858,
//                 "humidity": 53,
//                 "temp_kf": 0
//             },
//             "weather": [
//                 {
//                     "id": 800,
//                     "main": "Clear",
//                     "description": "clear sky",
//                     "icon": "01n"
//                 }
//             ],
//             "clouds": {
//                 "all": 4
//             },
//             "wind": {
//                 "speed": 4.27,
//                 "deg": 121,
//                 "gust": 3.83
//             },
//             "visibility": 10000,
//             "pop": 0,
//             "sys": {
//                 "pod": "n"
//             },
//             "dt_txt": "2026-01-26 06:00:00"
//         }
//     ],
//     "city": {
//         "id": 5596475,
//         "name": "Idaho Falls",
//         "coord": {
//             "lat": 43.49,
//             "lon": -112.04
//         },
//         "country": "US",
//         "population": 56813,
//         "timezone": -25200,
//         "sunrise": 1769179965,
//         "sunset": 1769214420
//     }
// }