<template>
    <section>
        <h1>{{ topic }}</h1>
        <div class="scroll">
            <div :class="move ? 'sale-move' : 'sale'">
                <div v-for="product in products" :key="product.id" class="board">
                    <div class="item">
                        <!-- <img :src="product.imageUrl" :alt="product.productName" class="prod" /> -->
                        <img :src="'https://lovesports-api.onrender.com/product-images/' + product.productName + product.imageName" :alt="product.productName" class="prod" />
                        <div v-if="product.discount" class="discount">-{{ product.discount }}%</div>
                        <div class="love"><img src="../../public/assets/love.png" class="luv" /></div>
                        <div class="free"><img class="motor" src="../../public/assets/motor.png" />
                            <p>Free shipping</p>
                        </div>
                    </div>
                    <p style="display: inline;">€{{ product.productPrice - ((product.discount * product.productPrice) /
                    100) }}</p>
                    <p style="display: inline; padding-left: 10px; text-decoration: line-through;">€{{
                    product.productPrice }}</p>
                    <p>{{ product.productName }}</p>
                    <h5 style="display: inline;">{{ product.maker }} |</h5>
                    <p style="display: inline">{{ product.series }}</p>
                    <p>Sizes: <span style="font-weight: bolder">S M L XL</span></p>
                    <router-link :to="'/'+route+'/' + product._id"><button class="view">View this item</button>
                    </router-link>
                </div>
            </div>
        </div>
        <div class="pointer2" v-on:click="moveRight">
            <arrow-left-drop-circle-outline />
        </div>
        <div class="pointer" v-on:click="moveLeft">
            <arrow-right-drop-circle-outline />
        </div>
    </section>
</template>

<script>
import ArrowRightDropCircleOutline from 'vue-material-design-icons/ArrowRightDropCircleOutline.vue'
import ArrowLeftDropCircleOutline from 'vue-material-design-icons/ArrowLeftDropCircleOutline.vue'


export default {
    name: "Sale",
    data() {
        return {
            move: false
        };
    },
    methods: {
        moveLeft() {
            this.move = true;
        },
        moveRight() {
            this.move = false;
        }
    },
    props: {
        topic: String,
        products: Array,
        route: String
    },
    components: {
        ArrowRightDropCircleOutline,
        ArrowLeftDropCircleOutline
    }
}
</script>

<style scoped>
section {
    width: 100%;
    height: auto;
    background-color: #FFFFFF;
    padding: 1rem 5rem 0rem;
    text-align: left;
}

h1 {
    text-indent: 20px;
}

.scroll {
    border: 2px solid #F6F6F6;
    width: 100%;
    height: auto;
    overflow: hidden;
}

.sale {
    width: 137.5rem;
    height: 31.25rem;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    transform: translateX(0rem);
    transition: 1s;
}

.sale-move {
    width: 137.5rem;
    height: 31.25rem;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    transform: translateX(-68.75rem);
    transition: 1s;
}

.board {
    width: 15rem;
    height: 24.0625rem;
    padding: 0.25rem;
    margin: 0.3125rem 1.125rem;
    line-height: 0.5rem;
    overflow: hidden;
    background-color: transparent;
    text-align: left;
}

.board:hover {
    height: 29.375rem;
    transition: .4s;
    box-shadow: 0.0625rem 0.0625rem 0.375rem 0.0625rem #999999;
}

.board .item {
    width: 14.375rem;
    height: 18.75rem;
    margin-bottom: 0.9375rem;
    display: block;
    overflow: hidden
}

.discount {
    width: 2.5rem;
    height: 1.25rem;
    background-color: red;
    border-radius: 2px;
    position: relative;
    line-height: 1.125rem;
    font-size: 12px;
    color: white;
    text-indent: 0.375rem;
    bottom: 18.4375rem;
    margin: 0.125rem;
    float: left;
    z-index: 9;
}

.love {
    width: 1.5625rem;
    height: 1.5625rem;
    background-color: white;
    box-shadow: 0.0625rem 0.0625rem 0.375rem 0.0625rem #999999;
    padding: 0.375rem;
    border-radius: 50%;
    position: relative;
    bottom: 18.4375rem;
    margin: 0.125rem;
    float: right;
    z-index: 9;
}

.luv {
    width: 100%;
    height: 100%;
}

.free {
    width: 1.875rem;
    height: 1.25rem;
    background-color: #F6F6F6;
    position: relative;
    right: 2.5rem;
    bottom: 1.875rem;
    overflow: hidden;
    z-index: 9;
}

.free p {
    display: inline;
    padding-left: 0.3125rem;
    font-size: 0.75rem;
    line-height: 1.125rem;
}

.free:hover {
    width: 7.1875rem;
    transition: .4s;
}

.motor {
    width: 1.875rem;
    height: 1.25rem;
    float: right;
    display: inline;
}

.view {
    width: 100%;
    height: 2.5rem;
    background-color: #28282d;
    color: white;
    border-radius: 4px;
    border: 0px;
    cursor: pointer;
}

.prod {
    width: 100%;
    height: 100%;
    position: relative;
    z-index: 2;
}

.pointer {
    width: 3.5rem;
    height: 3.5rem;
    padding: 1px;
    position: relative;
    float: right;
    bottom: 21.875rem;
    left: 0rem;
    border-radius: 50%;
    font-size: 50px;
    color: orangered;
    line-height: 0px;
    cursor: pointer;
}

.pointer2 {
    width: 3.5rem;
    height: 3.5rem;
    position: relative;
    bottom: 18.75rem;
    right: 0rem;
    border-radius: 50%;
    padding: 0.625rem;
    font-size: 50px;
    color: orangered;
    font-weight: bolder;
    line-height: 0px;
    cursor: pointer;
}

@media screen and (max-width: 800px) {
    section {
        padding: 30px 20px;
    }

    .scroll {
        overflow: auto;
    }

    ::-webkit-scrollbar {
        height: 0px;
    }
}

@media screen and (max-width: 500px) {
    section {
        padding: 20px 10px;
    }

    .scroll {
        overflow: auto;
    }

    ::-webkit-scrollbar {
        height: 0px;
    }

}
</style>