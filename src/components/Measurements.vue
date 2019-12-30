<template>
  <section>
    <div class="cloudCover">
      <img src="../assets/icons/cloud.svg" /><span class="cloudCover__value">{{
        cloudCover
      }}</span
      >&percnt;
    </div>
    <div class="wind-speed">
      <img src="../assets/icons/wind.svg" /><span class="wind__value">{{
        windSpeed
      }}</span>
      Km/h
    </div>
    <div class="humidity">
      <img src="../assets/icons/humidity.svg" /><span class="humidity__value">{{
        humidity
      }}</span
      >&percnt;
    </div>
  </section>
</template>

<script>
export default {
  name: "Measurements",

  props: ["cloudCover", "windSpeed", "humidity"]
};
</script>

<style scoped>
section {
  width: 100%;
  padding-top: 25px;

  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
}

.cloudCover img {
  width: 48px;
  height: 48px;
  vertical-align: middle;
}

.wind-speed img {
  width: 48px;
  height: 48px;
  vertical-align: middle;
}

.humidity img {
  width: 48px;
  height: 48px;
  vertical-align: middle;
}
</style>
