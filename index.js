 function refreshTemp(response){
  
    let tempValue= document.querySelector(".current-temperature-value");
   let currentTemp= response.data.temperature.current;
   tempValue.innerHTML = Math.round(currentTemp);

  let city = document.querySelector("#current-city");
   city.innerHTML = response.data.city;

   let currentDescription= document.querySelector("#description");
   currentDescription.innerHTML= response.data.condition.description;

let currentHumidity= document.querySelector("#humidity");
currentHumidity.innerHTML= `${response.data.temperature.humidity}%`;

let currentWind = document.querySelector("#wind");
currentWind.innerHTML = `${response.data.wind.speed} km/h`;


let currentDate = document.querySelector("#current-date");
let date = new Date(response.data.time * 1000);
currentDate.innerHTML = formatDate(date);
 }

function formatDate(date){
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

    let day = days[date.getDay()];

    if (minutes < 10){
        minutes = `0${minutes}`;
    }

    return `${day} ${hours}:${minutes}`
}

function searchCity(city){
    let apiKey = "2c056a1ee0dta1d8c446bef65o3d5fba";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;

axios.get(apiUrl).then(refreshTemp);
 
}
 

function getCity(event){
event.preventDefault();
let search = document.querySelector("#search-input");

searchCity(search.value);
 
}


let form= document.querySelector("#search-form");
form.addEventListener("click", getCity)

searchCity("Cape Town")







