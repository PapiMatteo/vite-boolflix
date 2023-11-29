import { reactive } from "vue";

export const store = reactive({
    moviesList: [],
    seriesList: [],
    apiUrl: 'https://api.themoviedb.org/3/search',
    movieSearch: '/movie',
    seriesSearch: '/tv',
    baseImagePath: 'https://image.tmdb.org/t/p/w342'
});