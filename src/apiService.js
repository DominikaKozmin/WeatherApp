export const getWeatherByCity = city => {
    return fetch(`https://www.metaweather.com/api/location/search/?query=${city}`)
    .then(response => response.json())
    .then(data => data.woeid)
}