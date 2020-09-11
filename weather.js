  // SELECT ELEMENTS

  const iconElement = document.querySelector(".weather-icon")
  const tempElement = document.querySelector(".temperature-value p")
  const tempDescription = document.querySelector(".temperature-description p")
  
  // App Data
  const weather = {};
  
  weather.temperature = {
      unit: "celsius"
  }
  
  // App Constants
  const kelvin = 273;
  
  // API Key
  const key = "d86a107d3833ad9bdc1d457a35e14e68";
  
  // Get Weather
  function getWeather() {
      let api = `https://api.openweathermap.org/data/2.5/weather?q=Wendover,uk&APPID=${key}`;
  
      fetch(api)
      .then(function(response){
          let data = response.json();
          return data;
      })
      .then(function(data){
          weather.temperature.value = Math.floor(data.main.temp - kelvin);
          weather.description = data.weather[0].description;
          weather.iconId = data.weather[0].icon;
      })
      .then(function(){
          displayWeather();
      })

      console.log(api)
  }
  
  getWeather()
  
  // Display weather to UI
  function displayWeather(){
      iconElement.innerHTML = `<img src="/Weather icons/${weather.iconId}.svg"/>`;
      tempElement.innerHTML = `${weather.temperature.value}<span>c</span>`
      tempDescription.innerHTML = weather.description;
  }
  
  displayWeather()