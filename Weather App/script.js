/**
 * Weather App
 * DONE: Complete getWeatherData() to return json response Promise
 * DONE: Complete searchCity() to get user input and get data using getWeatherData()
 * DONE: Complete showWeatherData() to set the data in the the html file from response
 */

// API_KEY for maps api
let API_KEY = "a8e71c9932b20c4ceb0aed183e6a83bb";

/**
 * Retrieve weather data from openweathermap
 * URL template https://api.openweathermap.org/data/2.5/weather?q=detroit&appid=a8e71c9932b20c4ceb0aed183e6a83bb&units=imperial
 */
getWeatherData = (city) => {
  const URL = "https://api.openweathermap.org/data/2.5/weather";
  const FULL_URL = `${URL}?q=${city}&appid=${API_KEY}&units=imperial`; // Template literal to return URL based on query in website
  const fetchWeather = fetch(FULL_URL);
  return fetchWeather.then((response) => {return response.json();}) // Returns JSON data from open weather API
}

/**
 * Retrieve city input and get the weather data
 */
searchCity = () => {
  const city = document.getElementById('city-input').value;
  getWeatherData(city).then((response) => {showWeatherData(response);}).catch((error) => {console.log(error);})
}

/**
 * Show the weather data in HTML
 */
showWeatherData = (weatherData) => {
  document.getElementById("city-name").innerText = weatherData.name // Display name of city
  document.getElementById("weather-type").innerText = weatherData.weather[0].main // Display weather info on top line
  document.getElementById("temp").innerText = weatherData.main.temp; // Display actual temperature
  document.getElementById("min-temp").innerText = weatherData.main.temp_min; //Display Low temp
  document.getElementById("max-temp").innerText = weatherData.main.temp_max; // Display High temp 
  document.getElementById("weather-output").classList.add('visible');
}

