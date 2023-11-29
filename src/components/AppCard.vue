<script>
export default {
    data() {
        return {
            langImg: ['en', 'it', 'es']
        }
    },
    props: {
        item: Object,
        imagePath: String
    },
    methods: {
        getImagePath(img) {
            return new URL(`../assets/img/${img}.jpg`, import.meta.url).href;
        },
        getTitle() {
            let title = '';
            if(this.item.title) {
                title = this.item.title;
            }else {
                title = this.item.name;
            };
            return title;
        },
        getOriginalTitle() {
            let originTitle = '';
            if (this.item.original_title) {
                originTitle = this.item.original_title;
            } else {
                originTitle = this.item.original_name;
            };
            return originTitle;
        },
        getRoundedVote() {
            return Math.ceil(this.item.vote_average) / 2
        }
    }
}
</script>

<template>
    <div class="card">
        <img v-if="item.poster_path" :src="`${imagePath}${item.poster_path}`" alt="">
        <img class="not-found-img" v-else src="https://lightwidget.com/wp-content/uploads/localhost-file-not-found-480x480.avif" alt="">
        <div class="text-content">
            <h3>{{ getTitle() }}</h3>
            <p>{{ getOriginalTitle() }}</p>
            <img class="flag" :src="getImagePath(item.original_language)" alt="" v-if="langImg.includes(item.original_language)">
            <p v-else>{{ item.original_language}}</p>
            <p>{{ getRoundedVote() }}</p>
        </div>
       
    </div>
    
</template>

<style lang="scss" scoped>
// 342 513
.card {
    margin-bottom: 1rem;

    .not-found-img {
        height: 513px;
        width: 342px;
    }
    .flag {
        width: 30px;
        height: 15px;
    }
}

</style>