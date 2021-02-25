var targetDate = new Date();
var dd = targetDate.getDate();
var mm = targetDate.getMonth() + 1;
var yyyy = targetDate.getFullYear();

var dateString = mm + "/" + dd + "/" + yyyy;
let tomorrow = targetDate.setDate(targetDate.getDate() + 1)
let dayThree = targetDate.setDate(targetDate.getDate()+ 2);
let dayFour = targetDate.setDate(targetDate.getDate()+ 3);
let dayFive = targetDate.setDate(targetDate.getDate()+ 4);
let daySix = targetDate.setDate(targetDate.getDate()+ 5);


axios.get(`https://api.openweathermap.org/data/2.5/weather?units=imperial&q=irvine&appid=2bd9578496cb426fc00d78ee8b1ad6d0`)
  .then(res => {

    let currentWeather = Math.round(res.data.main.temp)
    let humidity = res.data.main.humidity
    let windSpeed = Math.round(res.data.wind.speed)

    document.getElementById('curWeath').innerHTML = `
    <h3>${res.data.name}</h3> <img src="http://openweathermap.org/img/wn/${res.data.weather[0].icon}@2x.png">
    <p>${dateString}</p>
    <p>Temperature: ${currentWeather}°F</p>
    <p>Humidity: ${humidity}%</p>
    <p>Wind Speed: ${windSpeed}mph</p>
    
    `
    document.getElementById('search').value = ""


  })

axios.get(`https://api.openweathermap.org/data/2.5/forecast?units=imperial&q=irvine&appid=2bd9578496cb426fc00d78ee8b1ad6d0`)
  .then(res => {
    console.log(res)

    document.getElementById('dayOne').innerHTML = `
    <p>${tomorrow}</p>
    <img class="card-img-top" src="http://openweathermap.org/img/wn/${res.data.list[0].weather[0].icon}@2x.png">
    <br>
    <p class="card-text">Temp: ${Math.round(res.data.list[0].main.temp)}°F</p>
    <p class="card-text">Humidity: ${res.data.list[0].main.humidity}%</p>
    <p class="card-text">Winds: ${Math.round(res.data.list[0].wind.speed)}mph</p>
    `
    document.getElementById('dayTwo').innerHTML = `
    <p>${dayThree}</p>
    <img class="card-img-top" src="http://openweathermap.org/img/wn/${res.data.list[1].weather[0].icon}@2x.png">
    <br>
    <p class="card-text">Temp: ${Math.round(res.data.list[1].main.temp)}°F</p>
    <p class="card-text">Humidity: ${res.data.list[1].main.humidity}%</p>
    <p class="card-text">Winds: ${Math.round(res.data.list[1].wind.speed)}mph</p>
    `
    document.getElementById('dayThree').innerHTML = `
    <p>${dayFour}</p>
    <img class="card-img-top" src="http://openweathermap.org/img/wn/${res.data.list[2].weather[0].icon}@2x.png">
    <br>
    <p class="card-text">Temp: ${Math.round(res.data.list[2].main.temp)}°F</p>
    <p class="card-text">Humidity: ${res.data.list[2].main.humidity}%</p>
    <p class="card-text">Winds: ${Math.round(res.data.list[2].wind.speed)}mph</p>
    `
    document.getElementById('dayFour').innerHTML = `
    <p>${dayFive}</p>
    <img class="card-img-top" src="http://openweathermap.org/img/wn/${res.data.list[3].weather[0].icon}@2x.png">
    <br>
    <p class="card-text">Temp: ${Math.round(res.data.list[3].main.temp)}°F</p>
    <p class="card-text">Humidity: ${res.data.list[3].main.humidity}%</p>
    <p class="card-text">Winds: ${Math.round(res.data.list[3].wind.speed)}mph</p>
    `
    document.getElementById('dayFive').innerHTML = `
    <p>${daySix}</p>
    <img  src="http://openweathermap.org/img/wn/${res.data.list[4].weather[0].icon}@2x.png">
    <br>
    <p class="card-text">Temp: ${Math.round(res.data.list[4].main.temp)}°F</p>
    <p class="card-text">Humidity: ${res.data.list[4].main.humidity}%</p>
    <p class="card-text">Winds: ${Math.round(res.data.list[4].wind.speed)}mph</p>
    `
  })


document.getElementById('submit').addEventListener('click', event => {
  event.preventDefault()

  let listElem =document.createElement('button')
  listElem.className = 'list-group-item item'
  listElem.textContent = document.getElementById('search').value
  document.getElementById('list-group').append(listElem)

  let city = document.getElementById('search').value
  
  
  axios.get(`https://api.openweathermap.org/data/2.5/weather?units=imperial&q=${city}&appid=2bd9578496cb426fc00d78ee8b1ad6d0`)
  .then(res => {
    console.log(res)
    
    let currentWeather = Math.round(res.data.main.temp)
    let humidity = res.data.main.humidity
    let windSpeed = Math.round(res.data.wind.speed)
    
    document.getElementById('curWeath').innerHTML = `
    <h3>${res.data.name}</h3> <img src="http://openweathermap.org/img/wn/${res.data.weather[0].icon}@2x.png">
    <br>
    <p>Temperature: ${currentWeather}°F</p>
    <p>Humidity: ${humidity}%</p>
    <p>Wind Speed: ${windSpeed}mph</p>
    
    `
   document.getElementById('search').value = ""
    
    
  })

  axios.get(`https://api.openweathermap.org/data/2.5/forecast?units=imperial&q=${city}&appid=2bd9578496cb426fc00d78ee8b1ad6d0`)
  .then(res => {
    console.log(res)
    
    document.getElementById('dayOne').innerHTML = `
    <img class="card-img-top" src="http://openweathermap.org/img/wn/${res.data.list[0].weather[0].icon}@2x.png">
    <br>
    <p class="card-text">Temp: ${Math.round(res.data.list[0].main.temp)}°F</p>
    <p class="card-text">Humidity: ${res.data.list[0].main.humidity}%</p>
    <p class="card-text">Winds: ${Math.round(res.data.list[4].wind.speed)}mph</p>
    `
    document.getElementById('dayTwo').innerHTML = `
    <img class="card-img-top" src="http://openweathermap.org/img/wn/${res.data.list[1].weather[0].icon}@2x.png">
    <br>
    <p class="card-text">Temp: ${Math.round(res.data.list[1].main.temp)}°F</p>
    <p class="card-text">Humidity: ${res.data.list[1].main.humidity}%</p>
    <p class="card-text">Winds: ${Math.round(res.data.list[4].wind.speed)}mph</p>
    `
    document.getElementById('dayThree').innerHTML = `
    <img class="card-img-top" src="http://openweathermap.org/img/wn/${res.data.list[2].weather[0].icon}@2x.png">
    <br>
    <p class="card-text">Temp: ${Math.round(res.data.list[2].main.temp)}°F</p>
    <p class="card-text">Humidity: ${res.data.list[2].main.humidity}%</p>
    <p class="card-text">Winds: ${Math.round(res.data.list[4].wind.speed)}mph</p>
    `
    document.getElementById('dayFour').innerHTML = `
    <img class="card-img-top" src="http://openweathermap.org/img/wn/${res.data.list[3].weather[0].icon}@2x.png">
    <br>
    <p class="card-text">Temp: ${Math.round(res.data.list[3].main.temp)}°F</p>
    <p class="card-text">Humidity: ${res.data.list[3].main.humidity}%</p>
    <p class="card-text">Winds: ${Math.round(res.data.list[4].wind.speed)}mph</p>
    `
    document.getElementById('dayFive').innerHTML = `
    <img  src="http://openweathermap.org/img/wn/${res.data.list[4].weather[0].icon}@2x.png">
    <br>
    <p class="card-text">Temp: ${Math.round(res.data.list[4].main.temp)}°F</p>
    <p class="card-text">Humidity: ${res.data.list[4].main.humidity}%</p>
    <p class="card-text">Winds: ${Math.round(res.data.list[4].wind.speed)}mph</p>
    `
  })
})

