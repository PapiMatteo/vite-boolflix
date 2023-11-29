<script>
export default {
    props: {
        movie: Object
    }
}
</script>

<template>
    <div class="card">
        <h3>{{ movie.title }}</h3>
        <p>{{ movie.original_title }}</p>
        <p>{{ movie.original_language }}</p>
        <p>{{ movie.vote_average }}</p>
    </div>
    
</template>

<style lang="scss" scoped>

.card {
    margin-bottom: 1rem;
}

</style>