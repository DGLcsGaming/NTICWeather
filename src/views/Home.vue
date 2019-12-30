<template>
  <main :class="period">
    <Measurements
      :cloudCover="this.forecast.cloudCover"
      :windSpeed="this.forecast.windSpeed"
      :humidity="this.forecast.humidity"
    />
    <Temperature
      :value="this.forecast.temperatureValue"
      :high="this.forecast.temperatureHigh"
      :low="this.forecast.temperatureLow"
    />
    <Weather
      :location="this.forecast.location"
      :description="this.forecast.description"
      :icon="this.forecast.weatherIcon"
    ></Weather>
  </main>
</template>

<script>
import API from "@/lib/API.js";
import Measurements from "../components/Measurements.vue";
import Temperature from "../components/Temperature.vue";
import Weather from "../components/Weather.vue";

export default {
  name: "Home",
  components: {
    Measurements: Measurements,
    Temperature: Temperature,
    Weather: Weather
  },
  mounted() {
    API.getWeather().then(result => {
      console.log(result);
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
    });
  },
  data() {
    return {
      date: new Date(),
      forecast: {
        cloudCover: "..",
        windSpeed: "..",
        humidity: "..",
        temperatureValue: "..",
        temperatureHigh: "..",
        temperatureLow: "..",
        location: "Constantine, Algeria",
        description: "..",
        weatherIcon: require("../assets/icons/weather/cloud.svg")
      }
    };
  },
  computed: {
    period() {
      let hour = this.date.getHours();
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
}

.app--night {
  background-image: linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)),
    url("../assets/night.jpg");
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
