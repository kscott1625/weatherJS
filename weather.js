const api = {
    key: 'dd5fc8aee57598ad782e647d1d29310a',
    base: 'https://api.openweathermap.org/data/2.5/weather?units=imperial&q='
  };
const searchBox = document.querySelector(".search input")
const searchBtn = document.querySelector("#btn")
const weatherIcon= document.querySelector(".weather-icon")

  async function checkWeather(city){
    const res = await fetch(api.base + city + `&appid=${api.key}`);
    const data = await res.json();
    console.log(data)

    document.querySelector(".city").innerHTML = data.name
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°f"
    document.querySelector(".humidity").innerHTML = Math.round(data.main.humidity) + '%'
    document.querySelector(".wind").innerHTML = data.wind.speed + " mph"

    if(data.weather[0].main == "Clouds"){
        weatherIcon.src = "images/clouds.png"
    } else if (data.weather[0].main == "Rain"){
        weatherIcon.src = "images/rain.png"
    }else if (data.weather[0].main == "Snow"){
        weatherIcon.src = "images/snow.png"
    }else if (data.weather[0].main == "Clear"){
        weatherIcon.src = "images/sunny.png"
    }else if (data.weather[0].main == "Haze"){
        weatherIcon.src = "images/hazy.png"
    }

  }
searchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value)
})
  checkWeather();


