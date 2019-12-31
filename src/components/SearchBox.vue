<template>
  <form class="form-inline flex-nowrap d-flex">
    <input class="form-control" type="text" placeholder="Type location.." v-model="location" />
    <button class="btn btn-secondary" type="submit" @click="searchLocation($event)">Search</button>
  </form>
</template>

<script>
export default {
  name: "SearchBox",
  data() {
    return {
      location: ""
    };
  },
  methods: {
    searchLocation(e) {
      e.preventDefault();
      this.$emit("searchLocation", this.location);
    }
  }
};
</script>

<style scoped>
form {
  width: 100%;
}
input {
  flex: 1;
}
</style>