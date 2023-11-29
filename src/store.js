import { reactive } from "vue";

export const store = reactive({
    moviesList: [],
    seriesList: [],
    apiUrl: 'https://api.themoviedb.org/3/search',
    apiKey: 'a7faaa59d211bb5f541248a8adee0d40',
    movieSearch: '/movie',
    seriesSearch: '/tv',
    baseImagePath: 'https://image.tmdb.org/t/p/w342',
    searchText: ''
});