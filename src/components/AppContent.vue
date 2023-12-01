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
   
    <div class="container">
        <div class="movie">
            <h2>MOVIE</h2>
            <div class="row">
                <div class="col" v-for="movie in store.moviesList" :key="movie.id">
                    <AppCard :item="movie" :imagePath="store.baseImagePath" />
                </div>
            </div>
        </div>
        <div class="series">
            <h2>SERIES</h2>
            <div class="row">
                <div class="col" v-for="series in store.seriesList">
                    <AppCard :item="series" :imagePath="store.baseImagePath" />
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>


.container {
    height: calc(100% - 90px);
    overflow-y: auto;
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