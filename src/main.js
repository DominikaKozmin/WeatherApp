import {getWeatherByCity} from './apiService.js';


document.addEventListener('DOMContentLoaded', initializeApp);

const viewElements = {};

const getElement = id => {
    return document.getElementById(id);
}

const initializeApp = () => {

    connectDOM();
    setUpListeners();
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
    viewElements.searchInput.addEventListener(keydown, pressEnter);
    viewElements.searchButton.addEventListener(click, pressButton);
}

const pressEnter = event => {
    let query = viewElements.searchInput.value;
    if (event.key === 'Enter') {
        getWeatherByCity(query);
    }
}