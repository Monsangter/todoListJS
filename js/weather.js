const weather = document.querySelector("#weather span:first-child");
const city = document.querySelector("#weather span:last-child");
const API_KEY = "7db95ba3807221638fe7fe5a39ece2b5";

function onGeoOk(position){
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;
    const url = `https://api.openweathermap.weorg/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        city.innerText = data.name;
        weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
      });
}
function onGeoError(){
    alert("Can't find you. No weather for you")
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
