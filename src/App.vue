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
    }
  }
}
</script>

<template>
  <AppHeader @btn-click="handleClick"/>
  <AppContent />
</template>

<style lang="scss">
@use './style/general.scss';
@import '@fortawesome/fontawesome-free/css/all.css';
</style>
