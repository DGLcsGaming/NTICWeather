<template>
  <section>
    <img class="weather__icon" :src="icon" :class="period" />
    <div class="temperature">
      <div class="temperature__value" :class="period">{{ value }}</div>
      <div class="temperature__right" :class="period">
        <div class="temperature__scale">
          <a href="#">&deg;C</a>
        </div>
        <div class="temperature__high">
          <img src="../assets/icons/high.svg" alt="high temperature" />
          <span>
            {{
            high
            }}
          </span>&deg;
        </div>
        <div class="temperature__low">
          <img src="../assets/icons/low.svg" alt="low temperature" />
          <span>
            {{
            low
            }}
          </span>&deg;
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Temperature",
  props: ["value", "high", "low", "icon", "period"]
};
</script>

<style scoped>
section {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex: 1;
}

.temperature {
  display: flex;
  flex-direction: row;
}

.temperature__value {
  font-size: 8em;
  color: rgba(255, 255, 255, 0.75);
  align-self: center;
}

.temperature__right {
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex: 1;
  font-weight: 900;
}

.temperature__scale {
  padding-top: 5px;
  font-size: 2em;
  font-weight: bold;
}

.temperature__high {
  padding-top: 5px;
}

.temperature__high img {
  vertical-align: middle;
}

.temperature__low img {
  vertical-align: middle;
}

.weather__icon.app--day {
  width: 8em;
  filter: invert(93%) sepia(9%) saturate(0%) hue-rotate(290deg) brightness(45%)
    contrast(101%);
}
.weather__icon.app--night {
  width: 8em;
  filter: invert(93%) sepia(9%) saturate(0%) hue-rotate(290deg) brightness(203%)
    contrast(101%);
}

.app--day {
  color: rgba(0, 0, 0, 0.75);
  background-color: rgba(0, 0, 0, 0);
}
.app--night {
  color: rgba(255, 255, 255, 0.75);
  background-color: rgba(0, 0, 0, 0);
}
</style>
