<script>
import { store } from '../store.js';
export default {
    data() {
        return {
            store
        }
    }
}
</script>

<template>
    <header>
        <div class="container flex">
            <h1>BOOLFLIX</h1>
            <div class="search-section">
                <input type="text" v-model.trim="store.searchText" @keyup.enter="$emit('btn-click')">
                <button @click="$emit('btn-click')">CERCA</button>
            </div>
            
        </div>
        
    </header>
</template>

<style lang="scss" scoped>

header {
    background-color: black;
    height: 90px;
}
.container {
    width: 80%;
    margin: 0 auto;
    h1 {
        color: red;
    }
}

.flex {
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.search-section {
    input {
        margin-right: 20px;
    }
}
</style>