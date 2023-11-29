<script>
export default {
    data() {
        return {
            langImg: ['en', 'it', 'es']
        }
    },
    props: {
        item: Object
    },
    methods: {
        getImagePath(img) {
            return new URL(`../assets/img/${img}.jpg`, import.meta.url).href;
        },
        getTitle() {
            let title = '';
            if(this.item.title) {
                title = this.item.title
            }else {
                title = this.item.name
            }
            return title
        },
        getOriginalTitle() {
            let originTitle = '';
            if (this.item.original_title) {
                originTitle = this.item.original_title
            } else {
                originTitle = this.item.original_name
            }
            return originTitle
        }
    }
}
</script>

<template>
    <div class="card">
        <h3>{{ getTitle() }}</h3>
        <p>{{ getOriginalTitle() }}</p>
        <img class="flag" :src="getImagePath(item.original_language)" alt="" v-if="langImg.includes(item.original_language)">
        <p v-else>{{ item.original_language}}</p>
        <p>{{ item.vote_average }}</p>
    </div>
    
</template>

<style lang="scss" scoped>

.card {
    margin-bottom: 1rem;
    .flag {
        width: 30px;
        height: 15px;

    }
}

</style>