<template>
  <section>
    <div class="time d-flex flex-row">
      <img class="time__icon" src="../assets/icons/time.svg" />
      <div class="local__time">{{localTime}}</div>
    </div>

    <div class="location">{{ location }}</div>
    <div class="weather__description">{{ description }}</div>
  </section>
</template>

<script>
export default {
  name: "Weather",

  props: ["location", "description", "localTime"]
};
</script>

<style scoped>
section {
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
  font-size: 150%;
  white-space: nowrap;
}

.location {
  text-transform: uppercase;
  font-weight: bold;
}

.weather__description {
  text-transform: lowercase;
  margin-left: 10%;
  margin-right: 10%;
  text-align: center;
}

.weather__description:first-letter {
  text-transform: uppercase;
}

.local__time {
  font-size: 24pt;
}

.time__icon {
  width: 48px;
  height: 48px;
  vertical-align: middle;
  filter: invert(93%) sepia(9%) saturate(0%) hue-rotate(290deg) brightness(203%)
    contrast(101%);
}

.time {
  margin-bottom: 1em;
}
</style>
