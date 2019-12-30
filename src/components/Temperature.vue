<template>
  <section>
    <div class="temperature__value">{{ value }}</div>
    <div class="temperature__right">
      <div class="temperature__scale">
        <a href="#">&deg;C</a>
      </div>
      <div class="temperature__high">
        <img src="../assets/icons/high.svg" alt="high temperature" /><span>{{
          high
        }}</span
        >&deg;
      </div>
      <div class="temperature__low">
        <img src="../assets/icons/low.svg" alt="low temperature" /><span>{{
          low
        }}</span
        >&deg;
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Temperature",
  props: ["value", "high", "low"]
};
</script>

<style scoped>
section {
  display: flex;
  flex-direction: row;
  justify-content: center;
}

.temperature__value {
  font-size: 7em;
  color: rgba(255, 255, 255, 0.75);
}

.temperature__right {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.temperature__scale {
  padding-top: 5px;
  font-size: 2em;
  font-weight: bold;
  color: rgba(255, 255, 255, 0.75);
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
</style>
