<script>
import AppCard from './AppCard.vue'
import { store } from '../store.js';
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
    <h2 v-if="store.moviesList.length == 0 || store.seriesList.length == 0">INIZIA LA TUA RICERCA DI FILM O SERIE TV</h2>
    <div class="container" v-else>
        <div class="movie">
            <h2>MOVIE</h2>
            <div class="row">
                <div class="col" v-for="movie in store.moviesList" :key="movie.id">
                    <AppCard :item="movie" :imagePath="store.baseImagePath"/>
                </div>
            </div>
        </div>
        <div class="series">
            <h2>SERIES</h2>
            <div class="row">
                <div class="col" v-for="series in store.seriesList">
                    <AppCard :item="series" :imagePath="store.baseImagePath"/>
                </div>
            </div>
        </div>
    </div>

</template>

<style lang="scss" scoped>

h2 {
    text-align: center;
    margin: 3rem 0;
    color: red;
}

.row {
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-wrap: wrap;
    gap: 2rem;

    .col {
        width: 342px;
    }
}

</style>