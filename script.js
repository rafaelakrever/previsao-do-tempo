const key = "2f8a95a026e1f02cb1ed387bf58c9c0a"

function screen(information) {

    console.log(information)

    document.querySelector(".city").innerHTML = "Tempo em " + information.name
    document.querySelector(".temperature").innerHTML = Math.floor(information.main.temp) + "ºC"
    document.querySelector(".description").innerHTML = information.weather[0].description
    document.querySelector(".humidity").innerHTML = "Umidade: " + information.main.humidity + "%"
    document.querySelector(".forecast").src = `https://openweathermap.org/img/wn/${information.weather[0].icon}.png`
}

async function seekCity(city) {

    const information = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&lang=pt_br&units=metric`).then(response => response.json())

    screen(information)
}

function button() {
    const city = document.querySelector(".input-city").value

    seekCity(city)
}