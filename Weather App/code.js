let myApi = {
    key: '24d26e86cc84b567c2140ceb9c8a7861',
    proxy: 'https://cors-anywhere.herokuapp.com/'
}
//getting all the DOM elements
let cityname = document.querySelector('h1');
let countryname = document.querySelector('h3');
let image = document.querySelector('.mainimg');
let humidity = document.querySelector('.humidityp');
let temperature = document.querySelector('.tempp');


const weather = {};
weather.temperature = {
    unit: 'celcius'
}

weather.temprature = {
    unit: 'celcius'
}
//checking if the location is granted or not.
if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(setposition, showerr)
}

//getting the coordinates
function setposition(position) {
    var mylatitude = position.coords.latitude;
    var longitude = position.coords.longitude;
    getweather(mylatitude, longitude)
}

function getweather(mylat, mylong) {
    let link = `${myApi.proxy}https://api.openweathermap.org/data/3.0/onecall?lat=${mylat}&lon=${mylong}&appid=${myApi.key}`;
    fetch(link)  //send a network request and get the information from the server
        .then(response => {
            let data = response.json(); //now whatever response we get, parse it into json and store in data
            return data;
        })
        .then(data => { //then we update our weather object with the required data 
            console.log(data);
            // weather.temperature.value = Math.floor(data.main.temp - KELVIN);
            // weather.description = data.weather[0].description;
            // weather.iconID = data.weather[0].icon;
            // weather.city = data.name;
            // weather.country = data.sys.country;
            // weather.humidity = data.main.humidity;
        })
        .then(() => { //then display the weather to the ui
            displayWeather();
        });
}

//error for location turned off
function showerr() {
    console.log('location is not on');
}