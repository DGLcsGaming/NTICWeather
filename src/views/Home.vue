<template>
  <main :class="period">
    <SearchBox @searchLocation="setLocation($event)" />
    <Measurements
      :cloudCover="this.forecast.cloudCover"
      :windSpeed="this.forecast.windSpeed"
      :humidity="this.forecast.humidity"
    />
    <Temperature
      :icon="this.forecast.weatherIcon"
      :value="this.forecast.temperatureValue"
      :high="this.forecast.temperatureHigh"
      :low="this.forecast.temperatureLow"
      :period="period"
    />
    <Weather
      :location="this.forecast.location"
      :description="this.forecast.description"
      :localTime="this.forecast.localTime"
    ></Weather>
  </main>
</template>

<script>
import API from "@/lib/API.js";
import Measurements from "../components/Measurements.vue";
import Temperature from "../components/Temperature.vue";
import Weather from "../components/Weather.vue";
import SearchBox from "../components/SearchBox.vue";

export default {
  name: "Home",
  components: {
    Measurements: Measurements,
    Temperature: Temperature,
    Weather: Weather,
    SearchBox: SearchBox
  },
  mounted() {
    if (navigator.onLine) {
      navigator.geolocation.getCurrentPosition(position => {
        this.setLocationByGEO(
          position.coords.latitude,
          position.coords.longitude
        );
      });
    }
  },
  data() {
    return {
      time: 0,
      forecast: {
        cloudCover: "..",
        windSpeed: "..",
        humidity: "..",
        temperatureValue: "..",
        temperatureHigh: "..",
        temperatureLow: "..",
        location: "Constantine, Algeria",
        description: "..",
        localTime: "..",
        weatherIcon: require("../assets/icons/weather/cloudy.svg")
      },
      icons: {
        "clear-day": require("../assets/icons/weather/clear-day.svg"),
        "clear-night": require("../assets/icons/weather/clear-night.svg"),
        rain: require("../assets/icons/weather/rain.svg"),
        snow: require("../assets/icons/weather/snow.svg"),
        sleet: require("../assets/icons/weather/sleet.svg"),
        wind: require("../assets/icons/weather/wind.svg"),
        fog: require("../assets/icons/weather/fog.svg"),
        cloudy: require("../assets/icons/weather/cloudy.svg"),
        "partly-cloudy-day": require("../assets/icons/weather/partly-cloudy-day.svg"),
        "partly-cloudy-night": require("../assets/icons/weather/partly-cloudy-night.svg")
      }
    };
  },
  methods: {
    setLocation(location) {
      API.getGeoCoordinates(location).then(lo => {
        // Get City name from GEO Coordinates
        API.getCityName(lo.latitude, lo.longitude).then(result => {
          this.forecast.location = result.name;
        });
        // Get weather forcast from GEO Coordinates
        API.getWeather(lo.latitude, lo.longitude).then(result => {
          this.updateWeather(result);
        });
      });
    },
    setLocationByGEO(latitude, longitude) {
      API.getCityName(latitude, longitude).then(result => {
        this.forecast.location = result.name;
      });
      API.getWeather(latitude, longitude).then(result => {
        this.updateWeather(result);
      });
    },
    updateWeather(result) {
      let formattedTime = new Date(result.currently.time * 1000)
        .toLocaleTimeString("fr-FR", { timeZone: result.timezone })
        .split(":");
      this.time = formattedTime[0];
      this.forecast.localTime = `${formattedTime[0]}:${formattedTime[1]}`;

      this.forecast.weatherIcon = this.icons[result.currently.icon];

      this.forecast.temperatureValue = parseFloat(
        result.currently.temperature
      ).toFixed(0);
      this.forecast.description = result.currently.summary;
      this.forecast.humidity = parseFloat(
        result.currently.humidity * 100
      ).toFixed(0);
      this.forecast.windSpeed = parseFloat(result.currently.windSpeed).toFixed(
        1
      );
      this.forecast.cloudCover = parseFloat(
        result.currently.cloudCover * 100
      ).toFixed(0);
      this.forecast.temperatureHigh = parseFloat(
        result.daily.data[0].temperatureHigh
      ).toFixed(0); // [0] to get the first day
      this.forecast.temperatureLow = parseFloat(
        result.daily.data[0].temperatureLow
      ).toFixed(0); // [0] to get the first day
    }
  },
  computed: {
    period() {
      let hour = this.time;
      let choice = hour > 5 && hour < 18 ? "app--day" : "app--night";
      this.$emit("period", choice);
      return choice;
    }
  }
};
</script>

<style scoped>
main {
  width: 100%;
  height: 100%;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;

  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 0px rgba(0, 0, 0, 0.22);
}

.app--day {
  background-image: linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)),
    url("../assets/morning.jpg");
  color: rgba(0, 0, 0, 0.75);
}

.app--night {
  background-image: linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)),
    url("../assets/night.jpg");
  color: rgba(255, 255, 255, 0.75);
}

.app--day a:hover {
  color: rgba(46, 146, 167, 0.9);
}

.app--night a:hover {
  color: rgba(0, 0, 0, 0.5);
}

@media screen and (min-width: 450px) {
  main {
    width: 330px;
    height: 600px;

    border-radius: 5px;
  }
}
</style>
