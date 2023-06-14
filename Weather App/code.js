//getting all the DOM elements
let cityname = document.querySelector('h1');
let countryname = document.querySelector('h3');
let image = document.querySelector('.mainimg');
let humidity = document.querySelector('.humidityp');
let temperature = document.querySelector('.tempp');


//setting the api key and proxy server for cors error handeling.
const API_KEY = `3265874a2c77ae4a04bb96236a642d2f`



//getting coordinates
function coordinates(position) {
    let lat = position.coords.latitude.toString().slice(0, 5);
    let long = position.coords.longitude.toString().slice(0, 5);
    // console.log(lat,long);
    currentweather(lat, long)
}

//fetching the weather by the API
async function currentweather(latitude, longitude) {
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    //putting all details in the display
    let icon = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    cityname.innerHTML = data.name;
    countryname.innerHTML = data.sys.country;
    image.src = icon;
    humidity.innerHTML = data.main.humidity;
    temperature.innerHTML = `${data.main.temp.toFixed()}°C`;

}
currentweather();

//gpn on checking
if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(coordinates, errfun);
}
//if gps off then error
function errfun() {
    console.log('location on kar');
    alert('gps is off please turn it on');
}