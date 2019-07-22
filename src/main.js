import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  mounted () {
    axios
      .get('https://localhost:8081/parkingLots')
      .then(response => (this.info = response))
  }
}).$mount('#app')

