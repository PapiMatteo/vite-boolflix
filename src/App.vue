<script>
import AppHeader from './components/AppHeader.vue'
import { store } from './store.js'
export default {
  data() {
    return {
      store
    }
  },
  components: {
    AppHeader
  }
}
</script>

<template>
  <AppHeader />
</template>

<style lang="scss">
@use './style/general.scss';
@import '@fortawesome/fontawesome-free/css/all.css';
</style>
