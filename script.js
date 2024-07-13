const apiKey = "3fe0e4664838824576f22a7448e026a5";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";

const searchBox = document.querySelector('.search input');
const btn = document.querySelector('.search button');

async function checkWeather(city) {
    if(city){
        const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
        var data = await response.json();
    
        document.querySelector(".city").textContent = data.name;
        document.querySelector(".temp").textContent = Math.round(data.main.temp) + " °C";
        document.querySelector(".humidity").textContent = data.main.humidity + " %";
        document.querySelector(".wind").textContent = data.wind.speed + " km/hr";
    }
    
}

btn.addEventListener("click",() =>{
    checkWeather(searchBox.value)
});

