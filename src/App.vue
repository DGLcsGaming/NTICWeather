<template>
  <div id="app" :class="period">
    <!-- Home -->
    <div class="app" :class="period">
      <Home v-on:period="setPeriod($event)" />
    </div>
  </div>
</template>

<script>
import Home from "@/views/Home.vue";

export default {
  name: "app",
  components: {
    Home: Home
  },
  data() {
    return {
      period: null
    };
  },
  methods: {
    setPeriod: function(p) {
      this.period = p;
    }
  }
};
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Open+Sans");

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: "Open Sans", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: rgba(255, 255, 255, 0.9);
}

a {
  text-decoration: none;
  color: inherit;
  transition: color 0.2s ease-in;
}
.app {
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;
}
.app--day {
  background-color: #6cb9c8;
}

.app--night {
  background-color: #484f60;
}

.app--day a:hover {
  color: rgba(46, 146, 167, 0.9);
}

.app--night a:hover {
  color: rgba(0, 0, 0, 0.5);
}
</style>
