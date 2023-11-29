<script>
import AppCard from './AppCard.vue'
import { store } from '../store';
export default {
    data() {
        return {
            store
        }
    },
    components: {
        AppCard
    }

}
</script>

<template>
    <div class="container">
        <div class="row" v-if="store.moviesList.length > 0">
            <div class="col" v-for="movie in store.moviesList" :key="movie.id">
                <AppCard :movie="movie"/>
            </div>
        </div>
        <h3 v-else>Cerca cosa guardare</h3>
    </div>

</template>

<style lang="scss" scoped>

</style>