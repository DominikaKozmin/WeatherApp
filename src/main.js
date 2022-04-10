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

const pressEnter = event => {
    if (event.key === 'Enter') {
        fadeInOut();
        let query = viewElements.searchInput.value;
        getWeatherByCity(query);
        switchView();
        fadeInOut();
    }
}

const pressButton = () => {
    let query = viewElements.searchInput.value;
    getWeatherByCity(query);
    switchView();
}

const switchView = () => {
    if (viewElements.weatherSearchView.style.display !== "none") {
        viewElements.weatherSearchView.style.display = "none";
        viewElements.weatherForecastView.style.display = "flex";
    }else {
        viewElements.weatherForecastView.style.display = "none";
        viewElements.weatherSearchView.style.display = "flex";
    }
}

const fadeInOut = () => {
    if (viewElements.mainContainer.style.opacity === "1" || viewElements.mainContainer.style.opacity === " " ) {
        viewElements.mainContainer.style.opacity = "0";
    }else {
        viewElements.mainContainer.style.opacity = "1";
    }
}

const returnToSearch = () => {
    fadeInOut();
    setTimeout(() => {
        switchView();
        fadeInOut();
    }, 500);
}
