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
        <div class="movie">
            <h2>MOVIE</h2>
            <div class="row" v-if="store.moviesList.length > 0">
                <div class="col" v-for="movie in store.moviesList" :key="movie.id">
                    <AppCard :item="movie"/>
                </div>
            </div>
            <h3 v-else>Cerca cosa guardare</h3>
        </div>
        <div class="series">
            <h2>SERIES</h2>
            <div class="row">
                <div class="col" v-for="series in store.seriesList">
                    <AppCard :item="series"/>
                </div>
            </div>
        </div>
    </div>

</template>

<style lang="scss" scoped>

h2 {
    text-align: center;
    margin: 3rem 0;
}

</style>