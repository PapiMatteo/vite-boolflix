<script>
export default {

}
</script>

<template>
    <header>
        <div class="container flex">
            <h1>BOOLFLIX</h1>
            <div class="search-section">
                <input type="text" name="" id="">
                <button>CERCA</button>
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