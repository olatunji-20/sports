<template>
    <section>
        <h1>{{ title }}</h1>
        <div class="container">
            <div class="cate">
                <img class="img" src="../../public/assets/skiing.png" />
                <h3>Skiing</h3>
            </div>
            <div class="cate">
                <img class="img" src="../../public/assets/watches.png" />
                <h3>Sport watches</h3>
            </div>
            <div class="cate">
                <img class="img" src="../../public/assets/racket.png" />
                <h3>Racket sport</h3>
            </div>
            <div class="cate">
                <img class="img" src="../../public/assets/bike.png" />
                <h3>Bikes</h3>
            </div>
            <div class="cate">
                <img class="img" src="../../public/assets/max.png" />
                <h3>Footwear</h3>
            </div>
            <div class="cate">
                <img class="img" src="../../public/assets/leisure.png" />
                <h3>Leisure game</h3>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        name: 'Categories',
        data() {
            return {
                title: "Top categories",
            }
        }
    }
</script>

<style scoped>
    section {
        width: 100%;
        /* border: 2px solid saddlebrown; */
        /* background-color: aliceblue; */
        height: auto;
        padding: 2.5rem 5rem;
        text-align: left;
    }

    .container {
        width: 100%;
        height: auto;
        /* border: 2px solid firebrick; */
        margin: 1.875rem auto;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-around;
    }

    .cate {
        width: 21.25rem;
        height: 14.375rem;
        /* border: 1px solid brown; */
        margin: 0.625rem;
        border-radius: 6px;
        text-align: center;
    }

    .cate .img {
        height: 100%;
        width: 100%;
        filter: contrast(65%)
    }

    .cate .img:hover {
        filter: contrast(90%);
        transition: .5s;
    }
    .cate h3 {
        position: relative;
        bottom: 3.4375rem;
        z-index: 9;
        color: white;
    }



    @media screen and (max-width: 500px) {
        section {
            padding: 30px 10px;
            height: auto;
        }
        h1 {
            text-indent: 20px;
        }
    }
    
</style>