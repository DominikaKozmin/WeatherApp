import {getWeatherByCity} from './apiService.js';

const viewElements = {};

const initializeApp = () => {

    connectDOM();
    setUpListeners();
}

document.addEventListener('DOMContentLoaded', initializeApp);


const getElement = id => {
    return document.getElementById(id);
}

const connectDOM = () => {
    viewElements.mainContainer = getElement('mainContainer');
    viewElements.weatherSearchView = getElement('weatherSearchView');
    viewElements.searchInput = getElement('searchInput');
    viewElements.searchButton = getElement('searchButton');

    viewElements.weatherForecastView = getElement('weatherForecastView');
    viewElements.returnToSearchBtn = getElement('returnToSearchBtn');

    viewElements.weatherCity = getElement('weatherCity');
    viewElements.weatherIcon = getElement('weatherIcon');

    viewElements.weatherCurrentTemp = getElement('weatherCurrentTemp');
    viewElements.weatherMaxTemp = getElement('weatherMaxTemp');
    viewElements.weatherMinTemp = getElement('weatherMinTemp');
    
}

const setUpListeners = () => {
    viewElements.searchInput.addEventListener('keydown', pressEnter);
    viewElements.searchButton.addEventListener('click', pressButton);
    viewElements.returnToSearchBtn.addEventListener('click', returnToSearch);
}

const fadeInOut = () => {
    if (viewElements.mainContainer.style.opacity === "1" || viewElements.mainContainer.style.opacity === "" ) {
        viewElements.mainContainer.style.opacity = "0";
    }else {
        viewElements.mainContainer.style.opacity = "1";
    }
}

const pressEnter = event => {
    if (event.key === 'Enter') {
        fadeInOut();
        let query = viewElements.searchInput.value;
        getWeatherByCity(query).then(data => {
            displayWeatherData(data);
        });
    }
};

const pressButton = () => {
    fadeInOut();
    let query = viewElements.searchInput.value;
    getWeatherByCity(query).then(data => {
        displayWeatherData(data);
    });
};

const switchView = () => {
    if (viewElements.weatherSearchView.style.display !== "none") {
        viewElements.weatherSearchView.style.display = "none";
        viewElements.weatherForecastView.style.display = "block";
    }else {
        viewElements.weatherForecastView.style.display = "none";
        viewElements.weatherSearchView.style.display = "flex";
    }
}

const displayWeatherData = data => {
    switchView();
    fadeInOut();

    const weather = data.consolidated_weather[0];
    viewElements.weatherCity.innerText = data.title;
    viewElements.weatherIcon.src = `https://www.metaweather.com/static/img/weather/${weather.weather_state_abbr}.svg`;
    viewElements.weatherIcon.alt = weather.weather_state_name;

    const currTemp = weather.the_temp.toFixed(2);
    const minTemp = weather.min_temp.toFixed(2);
    const maxTemp = weather.max_temp.toFixed(2);

    viewElements.weatherCurrentTemp.innerText = `Aktualna temperatura: ${currTemp} °C`;
    viewElements.weatherMaxTemp.innerText =  `Maksymalna temperatura: ${maxTemp} °C`;
    viewElements.weatherMinTemp.innerText =  `Minimalna temperatura: ${minTemp} °C`;
}

const returnToSearch = () => {
    fadeInOut();
    setTimeout(() => {
        switchView();
        fadeInOut();
    }, 500);
}

