<script>
import axios from 'axios';
import AppHeader from './components/AppHeader.vue';
import AppContent from './components/AppContent.vue';
import { store } from './store.js';
export default {
  data() {
    return {
      store
    }
  },
  components: {
    AppHeader,
    AppContent
  },
  methods: {
    handleClick() {
      
      axios
        .get(this.store.apiUrl + this.store.movieSearch, {
          params: {
            query: this.store.searchText,
            api_key: this.store.apiKey        
          }
        })
        .then((resp) => {
          this.store.moviesList = resp.data.results;
        });
      
      axios
        .get(this.store.apiUrl + this.store.seriesSearch, {
          params: {
            query: this.store.searchText,
            api_key: this.store.apiKey
          }
        })
        .then((resp) => {
          this.store.seriesList = resp.data.results;
        })
    }
  }
}
</script>

<template>
  
  <div class="wrapper"> 
    <AppHeader @btn-click="handleClick"/>
    <h2 v-if="store.moviesList.length == 0 || store.seriesList.length == 0">INIZIA LA TUA RICERCA DI FILM O SERIE TV</h2>
    <AppContent v-else/>
  </div>
  
</template>

<style lang="scss">
@use './style/general.scss';
@import '@fortawesome/fontawesome-free/css/all.css';
</style>
