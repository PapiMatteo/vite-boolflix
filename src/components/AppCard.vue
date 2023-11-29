<script>
export default {
    data() {
        return {
            langImg: ['en', 'it', 'es']
        }
    },
    props: {
        movie: Object
    },
    methods: {
        getImagePath(img) {
            console.log(img);
            return new URL(`../assets/img/${img}.jpg`, import.meta.url).href;
        }
    }
}
</script>

<template>
    <div class="card">
        <h3>{{ movie.title }}</h3>
        <p>{{ movie.original_title }}</p>
        <img :src="getImagePath(movie.original_language)" alt="" v-if="langImg.includes(movie.original_language)">
        <p v-else>{{ movie.original_language }}</p>
        <p>{{ movie.vote_average }}</p>
    </div>
    
</template>

<style lang="scss" scoped>

.card {
    margin-bottom: 1rem;
    img {
        width: 30px;
        height: 15px;

    }
}

</style>