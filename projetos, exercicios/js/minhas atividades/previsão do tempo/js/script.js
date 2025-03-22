
/*https://home.openweathermap.org/api_keys */
const weatherForm = document.querySelector(".weatherForm");
const cityInput = document.querySelector(".cityInput");
const card = document.querySelector(".card");
const apiKey = "e956fe1df7218f6f805cfdf285386409"

weatherForm.addEventListener("submit", async event => {

    event.preventDefault();

    const city = cityInput.value;

    if(city){
        try{
            const weatherData = await getWeatherData(city);
            displayWeatherInfo(weatherData);
        } catch(error){
            console.error(error);
            displayError(error);
        }
    } else {
        displayError("Por favor, coloque uma cidade");
    }

});

async function getWeatherData(city) {
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
    const response = await fetch(apiUrl) //Fetch é uma API do JavaScript que permite fazer requisições HTTP de forma assíncrona.;

    if(!response.ok){
        throw new Error("Não consegui encontrar os dados do clima")
    }

    return await response.json()
};

function displayWeatherInfo(data) {

};

function getWeatherEmoji(weatherId){

};

function displayError(message){

    const errorDisplay = document.createElement("p");
    errorDisplay.textContent = message;
    errorDisplay.classList.add("errorDisplay");

    card.textContent = "";
    card.style.display = "flex";
    card.appendChild(errorDisplay)
};