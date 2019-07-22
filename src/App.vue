<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <button @click="GetRequest">GetRequest</button>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import axios from "axios";
export default {
  name: "app",
  components: {
    HelloWorld
  },
  methods: {
    GetRequest() {
      axios
        .get("http://localhost:8081/parkingLots")
        .then(function(response) {
          window.console.log(response);
        })
        .catch(function(error) {
          window.console.log(error);
        });
    }
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
