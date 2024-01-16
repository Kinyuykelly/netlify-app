let apiKey = "a235423bf4aefc61ac00dafo8c073tb3";
let apiUrl = `https://api.shecodes.io/weather/v1/current?&key=${apiKey}&units=metric`;
function search(event) {
  event.preventDefault();
  let searchInputElement = document.querySelector("#search-input");
  let cityElement = document.querySelector("#current-city");
 

  let city = searchInputElement.value;
  let url = `${apiUrl}&query=${city}`;
  function fetchData(response){
    let temperature = response.data.temperature.current;
    cityElement.innerHTML = response.data.city;
    console.log(response)
    let temperatureElement = document.querySelector(".current-temperature-value");
    temperatureElement.innerHTML = Math.round(temperature);
  }
  axios.get(url).then(fetchData);
}

function formatDate(date) {
  let minutes = date.getMinutes();
  let hours = date.getHours();
  let day = date.getDay();

  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  if (hours < 10) {
    hours = `0${hours}`;
  }

  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];

  let formattedDay = days[day];
  return `${formattedDay} ${hours}:${minutes}`;
}

let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", search);

let currentDateELement = document.querySelector("#current-date");
let currentDate = new Date();

currentDateELement.innerHTML = formatDate(currentDate);