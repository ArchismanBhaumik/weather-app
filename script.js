const apiKey = "3fe0e4664838824576f22a7448e026a5";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";

const searchBox = document.querySelector('.search input');
const btn = document.querySelector('.search button');
const weatherIcon = document.querySelector('.weather-icon');
let weatherDesc = document.querySelector('.weather-desc');

async function checkWeather(city) {
    if (city) {
        try {
            const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
            if (response.status === 404) {
                document.querySelector(".city").textContent = "No city found";
                document.querySelector(".temp").textContent = "";
                document.querySelector(".humidity").textContent = "";
                document.querySelector(".wind").textContent = "";
                weatherIcon.src = 'images/default.png';
                document.querySelector(".weather-desc").textContent = "";
            } else {
                const data = await response.json();
                console.log(data);

                document.querySelector(".city").textContent = data.name;
                document.querySelector(".temp").textContent = Math.round(data.main.temp) + " °C";
                document.querySelector(".humidity").textContent = data.main.humidity + " %";
                document.querySelector(".wind").textContent = data.wind.speed + " km/hr";

                switch (data.weather[0].main) {
                    case 'Clouds':
                        weatherIcon.src = 'images/clouds.png';
                        break;
                    case 'Clear':
                        weatherIcon.src = 'images/clear.png';
                        break;
                    case 'Drizzle':
                        weatherIcon.src = 'images/drizzle.png';
                        break;
                    case 'Mist':
                        weatherIcon.src = 'images/mist.png';
                        break;
                    case 'Rain':
                        weatherIcon.src = 'images/rain.png';
                        break;
                    case 'Snow':
                        weatherIcon.src = 'images/snow.png';
                        break;
                    case 'Haze':
                        weatherIcon.src = 'images/clouds.png';
                        break;
                    default:
                        weatherIcon.src = 'images/default.png';
                        break;
                }
                document.querySelector(".weather-desc").textContent = data.weather[0].main;
            }
        } catch (error) {
            console.error("Error fetching weather data: ", error);
        }
    }
}

btn.addEventListener("click", (e) => {
    checkWeather(searchBox.value);
    e.preventDefault();
});

// Fetch user's location
async function fetchLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(async (position) => {
            const lat = position.coords.latitude;
            const lon = position.coords.longitude;
            const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`);
            const data = await response.json();

            console.log(data);

            document.querySelector(".city").textContent = data.name;
            document.querySelector(".temp").textContent = Math.round(data.main.temp) + " °C";
            document.querySelector(".humidity").textContent = data.main.humidity + " %";
            document.querySelector(".wind").textContent = data.wind.speed + " km/hr";

            switch (data.weather[0].main) {
                case 'Clouds':
                    weatherIcon.src = 'images/clouds.png';
                    break;
                case 'Clear':
                    weatherIcon.src = 'images/clear.png';
                    break;
                case 'Drizzle':
                    weatherIcon.src = 'images/drizzle.png';
                    break;
                case 'Mist':
                    weatherIcon.src = 'images/mist.png';
                    break;
                case 'Rain':
                    weatherIcon.src = 'images/rain.png';
                    break;
                case 'Snow':
                    weatherIcon.src = 'images/snow.png';
                    break;
                case 'Haze':
                    weatherIcon.src = 'images/clouds.png';
                    break;
                default:
                    weatherIcon.src = 'images/default.png';
                    break;
            }
            document.querySelector(".weather-desc").textContent = data.weather[0].main;
        });
    } else {
        console.error("Geolocation is not supported by this browser.");
    }
}

// Call fetchLocation when the page loads
window.onload = fetchLocation;
