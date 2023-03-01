//display current date and time
`use strict`;
function refreshTime() {
  const timeDisplay = document.getElementById("time");
  const dateString = new Date().toLocaleString();
  const formattedString = dateString.replace(", ", " - ");
  timeDisplay.textContent = formattedString;
}
//clock milliseconds refresh rate 
  setInterval(refreshTime, 1000);

let weather = {
    //OpenWeatherMap api
    "apiKey": "53308346e662bc908243590c79903419",
    pullWeather: function (city) {
     fetch(
        "https://api.openweathermap.org/data/2.5/weather?q=" +
        city +
         "&units=imperial&appid=" +
        this.apiKey
        )
        .then((response) => response.json())
        .then((data) => this.showWeather(data));
    
        
    },
    //weather data
    showWeather: function(data) {
        const { name } = data; 
        const { icon, description } = data.weather[0];
        const { temp, humidity } = data.main;
        const { speed, } = data.wind;
    //Query all the weather data and pass it to the app
    document.querySelector(".city").innerText = "Weather in " + name;
    document.querySelector(".icon").src = 
    "https://openweathermap.org/img/wn/" + icon + "@2x.png";
    document.querySelector(".description").innerText = description;
    document.querySelector(".temp").innerText = temp + "°F";
    document.querySelector(".humidity").innerText = "Humidity: " + humidity + "%";
    document.querySelector(".wind").innerText = "Wind speed: " + speed + " mph";
    document.querySelector(".weather").classList.remove("loading")
    //pulls photo from the city searched
    document.body.style.backgroundImage = "url('https://source.unsplash.com/1600x900/?" + landscape + "')"
    },

   //navigation bar function
    navigation: function () {
    this.pullWeather(document.querySelector(".navigation-bar").value);
    }
 
};

//event listener for MOUSE CLICK
document
.querySelector(".navigation button")
.addEventListener("click", function () {
weather.navigation();

//event listener for ENTER key
document
.querySelector(".navigation-bar")
.addEventListener("keyup", function (event) {
    if (event.key === "Enter") {
        weather.navigation();
     
    }
});


});

//grab forcast openweather api and insert here 
