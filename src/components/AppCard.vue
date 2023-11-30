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
            return Math.ceil(this.item.vote_average / 2) 
        }
    }
}
</script>

<template>
    <div class="card">
        <img v-if="item.poster_path" :src="`${imagePath}${item.poster_path}`" alt="">
        <img class="not-found-img" v-else src="https://lightwidget.com/wp-content/uploads/localhost-file-not-found-480x480.avif" alt="">
        <div class="text-content">
            <h2>{{ getTitle() }}</h2>
            <h3>{{ getOriginalTitle() }}</h3>
            <img class="flag" :src="getImagePath(item.original_language)" alt="" v-if="langImg.includes(item.original_language)">
            <p v-else>{{ item.original_language}}</p>
            <p><i v-for="i in 5" class="fa-star " :class="i <= getRoundedVote() ? 'fa-solid' : 'fa-regular'"></i></p>
            <p class="overview"><strong>Overview:</strong> {{ item.overview }}</p>
        </div>
       
    </div>
    
</template>

<style lang="scss" scoped>
.card {
    margin-bottom: 1rem;
    position: relative;
    border-radius: 10px;
    border: 1px solid white;
    width: 100%;
    overflow-y: auto;
    
    .text-content {
        color: white;
        position: absolute;
        top: 60px;
        left: 20px;
        display: none;

        .overview {
            padding-top: 20px;
            margin-bottom: 30px;
        }
    }

    img{
        height: 450px;
        width: 100%;
        display: block;
        border-radius: 10px;
    }

    .not-found-img { 
        width: 100%;
    }
    .flag {
        width: 30px;
        height: 15px;
    }

    &:hover {
        .flag {
            opacity: 100%;
            filter: none;
        }
        img {
            opacity: 20%;
            filter: blur(8px);
        }
        .text-content {
            display: block;
        }
    }
}

</style>