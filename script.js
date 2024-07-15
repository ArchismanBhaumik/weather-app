const apiKey = "3fe0e4664838824576f22a7448e026a5";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";

const searchBox = document.querySelector('.search input');
const btn = document.querySelector('.search button');
const weatherIcon = document.querySelector('.weather-icon')
let weatherDesc = document.querySelector('.weather-desc')

async function checkWeather(city) {
    if(city){
        const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
        var data = await response.json();

        console.log(data);
    
        document.querySelector(".city").textContent = data.name;
        document.querySelector(".temp").textContent = Math.round(data.main.temp) + " °C";
        document.querySelector(".humidity").textContent = data.main.humidity + " %";
        document.querySelector(".wind").textContent = data.wind.speed + " km/hr";

        if(data.weather[0].main === 'Clouds'){
            weatherIcon.src = 'images/clouds.png' ;
            document.querySelector(".weather-desc").innerHTML = data.weather[0].main;
        }
        else if(data.weather[0].main === 'Clear'){
            weatherIcon.src = 'images/clear.png' ;
            document.querySelector(".weather-desc").innerHTML = data.weather[0].main;
        }
        else if(data.weather[0].main === 'Drizzle'){
            weatherIcon.src = 'images/drizzle.png' ;
            document.querySelector(".weather-desc").innerHTML = data.weather[0].main;
        }
        else if(data.weather[0].main === 'Mist'){
            weatherIcon.src = 'images/mist.png' ;
            document.querySelector(".weather-desc").innerHTML = data.weather[0].main;
        }
        else if(data.weather[0].main === 'Rain'){
            weatherIcon.src = 'images/rain.png' ;
            document.querySelector(".weather-desc").innerHTML = data.weather[0].main;
        }
        else if(data.weather[0].main === 'Snow'){
            weatherIcon.src = 'images/snow.png' ;
            document.querySelector(".weather-desc").innerHTML = data.weather[0].main;
        }
        else if(data.weather[0].main === 'Haze'){
            weatherIcon.src = 'images/clouds.png' ;
            document.querySelector(".weather-desc").innerHTML = data.weather[0].main;
        }
    }
    
}

btn.addEventListener("click", (e) =>{
    checkWeather(searchBox.value)
    e.preventDefault();
});

