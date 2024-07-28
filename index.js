// Data to use (convert from F to C)
// temp - convert
// feelsLike - convert
// icon - values: snow, rain, fog, wind, cloudy, partly-cloudy-day, partly-cloudy-night, clear-day, clear-night
// conditions - descriptive text

// `https://api.giphy.com/v1/gifs/translate?api_key=S4sysfOjvY36tghg12NokS2puC0EplQ4&s=${keyword}`

// Selectors
const weatherBackground = document.getElementById("weather-background");
const heading = document.getElementById("location-heading");
const todayInfo = document.getElementById("today-info");
const giphyImage = document.getElementById("giphy");
const loading = document.getElementById("loading");

async function getWeather(location) {
   let weather = await fetch(
      `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?key=UB2E8K7QRGREYSDMP9CU7DWBB`
   );
   let weatherData = await weather.json();
   console.log("getWeather function called: ", weatherData);
   return weatherData;
}

async function returnWeatherToday(location) {
   let weatherObject = await getWeather(location);
   let currentConditions = weatherObject.currentConditions;
   console.log("returnWeatherToday function called: ", currentConditions);
   return currentConditions;
}

async function returnArray(location) {
   let weatherObject = await getWeather(location);
   let daysArray = weatherObject.days;
   console.log("returnArray function called: ", daysArray);
   return daysArray;
}

// Giphy call
async function getGiphy(keyword) {
   let gif = await fetch(
      `https://api.giphy.com/v1/gifs/translate?api_key=S4sysfOjvY36tghg12NokS2puC0EplQ4&s=${keyword}`
   );
   let gifObject = await gif.json();
   let gifURL = gifObject.data.url;
   return gifURL;
}

const appLogic = (function () {
   // Form submit
   const form = document.getElementById("search-form");
   const searchInput = document.getElementById("search");

   form.addEventListener("submit", (event) => {
      event.preventDefault();

      let location = searchInput.value;
      timeToday(location);
   });

   // Conversion
   function convertToCelsius(variable) {
      return ((variable - 32) * 5) / 9;
   }

   // Get the weather from today
   async function timeToday(location) {
      // Show load
      loading.style.display = "block";

      try {
         let weather = await returnWeatherToday(location);
         let tempF = weather.temp;
         let tempC = Math.round(convertToCelsius(tempF));
         let feelTempF = weather.feelslike;
         let feelTempC = Math.round(convertToCelsius(feelTempF));
         let icon = weather.icon;
         let conditions = weather.conditions;
         heading.textContent = location;
         todayInfo.textContent = `The weather today in ${location} is ${conditions}, the temperature is ${tempC}, feels like ${feelTempC}.`;

         // Add background image
         switch (icon) {
            case "snow":
               weatherBackground.style.backgroundImage = "var(--snow)";
               break;
            case "rain":
               weatherBackground.style.backgroundImage = "var(--rain)";
               break;
            case "fog":
               weatherBackground.style.backgroundImage = "var(--fog)";
               break;
            case "wind":
               weatherBackground.style.backgroundImage = "var(--wind)";
               break;
            case "cloudy":
               weatherBackground.style.backgroundImage = "var(--cloudy)";
               break;
            case "partly-cloudy-day":
               weatherBackground.style.backgroundImage =
                  "var(--partly-cloudy-day)";
               break;
            case "partly-cloudy-night":
               weatherBackground.style.backgroundImage =
                  "var(--partly-cloudy-night)";
               break;
            case "clear-day":
               weatherBackground.style.backgroundImage = "var(--clear-day)";
               break;
            case "clear-night":
               weatherBackground.style.backgroundImage = "var(--clear-night)";
               break;
            default:
               weatherBackground.style.backgroundImage = "none";
         }

         // Transition
         heading.style.opacity = 1;
         todayInfo.style.opacity = 1;
         weatherBackground.style.opacity = 1;
      } catch (error) {
         console.error("Error: ", error);
      } finally {
         loading.style.display = "none";
      }
   }
})();