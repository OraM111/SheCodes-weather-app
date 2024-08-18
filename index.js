function getCity(event){
event.preventDefault();
let search = document.querySelector("#search-input");
let city = document.querySelector("#current-city");
city.innerHTML = search.value;  
}

let form= document.querySelector("#search-form");
form.addEventListener("click", getCity)
