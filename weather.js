// localStorage.clear();



const apiKey = "5d314acc8bf1dde2b2064d28881302ea";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";

const searchBox = document.getElementById("search");
const searchBtn = document.getElementById("btn");


async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    var data = await response.json();

    console.log(data);

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";
}
searchBtn.addEventListener("click", ()=>{
    checkWeather(searchBox.value);
    document.querySelector("title").innerText=searchBox.value;
})