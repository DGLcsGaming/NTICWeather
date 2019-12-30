const API_KEY = "ff860ac96ec3268914bb0887cf917484";
const CORS_PROXY = "https://cors-anywhere.herokuapp.com/";
const location = "36.365,6.6147";
const API_URL = `${CORS_PROXY}https://api.darksky.net/forecast/${API_KEY}/${location}?exclude=minutely,hourly,alerts,flags&units=si`;

function getWeather() {
  return fetch(API_URL).then(res => res.json());
}

export default {
  getWeather
};
