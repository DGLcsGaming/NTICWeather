const API_KEY = "ff860ac96ec3268914bb0887cf917484";
const CORS_PROXY = "https://cors-anywhere.herokuapp.com/";
const WEATHER_API_URL = `${CORS_PROXY}https://api.darksky.net/forecast/${API_KEY}/`;
const GEO_TO_COOR_API_URL = `${CORS_PROXY}https://darksky.net/geo?q=`;
const COOR_TO_GEO_API_URL = `${CORS_PROXY}https://darksky.net/rgeo?`;

function getWeather(lat, lon) {
  return fetch(
    `${WEATHER_API_URL}${lat},${lon}?exclude=minutely,hourly,alerts,flags&units=si`
  ).then(res => res.json());
}

function getGeoCoordinates(location) {
  return fetch(`${GEO_TO_COOR_API_URL}${location}`).then(res => res.json());
}

function getCityName(lat, lon) {
  return fetch(`${COOR_TO_GEO_API_URL}lat=${lat}&lon=${lon}`).then(res =>
    res.json()
  );
}

export default {
  getWeather,
  getGeoCoordinates,
  getCityName
};
