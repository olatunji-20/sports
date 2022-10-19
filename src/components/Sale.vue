<template>
    <section>
        <h1>{{ title }}</h1>
        <div class="scroll">
            <div :class="move ? 'sale-move' : 'sale'">
                <div v-for="product in products" :key="product.id" class="board">
                    <div class="item">
                        <img :src="product.imageUrl" alt="boybag" class="prod" />
                        <div v-if="product.discount" class="discount">-{{ product.discount }}%</div>
                        <div class="love"><img src="../../public/assets/love.png" class="luv" /></div>
                        <div class="free"><img class="motor" src="../../public/assets/motor.png" /><p>Free shipping</p></div>
                    </div>
                        <p style="display: inline;">€{{ product.productPrice - ((product.discount * product.productPrice) / 100) }}</p><p style="display: inline; padding-left: 10px; text-decoration: line-through;">€{{ product.productPrice }}</p>
                        <p>{{ product.productName }}</p>
                        <h5 style="display: inline;">{{ product.maker }} |</h5> <p style="display: inline">{{ product.series }}</p>
                        <p>Sizes: <span style="font-weight: bolder">S M L XL</span></p>
                        <button class="view"><router-link to="/Stand">View the item</router-link></button>
                </div>
            </div>
        </div>
        <div class="pointer2" v-on:click="moveRight"><p>&#8810</p></div>
        <div class="pointer" v-on:click="moveLeft"><p>&#8811</p></div>
    </section>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
    name: "Sale",
    data() {
        return {
            title: "Sale items",
            move: false
        };
    },
    computed: {
        ...mapGetters("products", ["products"])
    },
    methods: {
        ...mapActions("products", ["getProducts"]),
        moveLeft() {
            this.move = true;
            alert("clickdddddddddd");
        },
        moveRight() {
            this.move = false;
            alert("unmove");
        }
    },
    async created() {
        this.products = await this.getProducts();
    }
}
</script>

<style scoped>
    section {
        border: 5px solid blue;
        width: 100%;
        height: auto;
        background-color: #FFFFFF;
        padding: 60px 80px 0px;
    }


    .scroll {
        border: 7px solid navy;
        width: 100%;
        height: auto;
        overflow: hidden;
    }

    .sale {
        border: 4px solid firebrick;
        width: 2200px;
        height: 500px;
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        transform: translateX(0px);
        transition: 1s;
    }
    .sale-move {
        border: 4px solid green;
        background-color: powderblue;
        width: 2200px;
        height: 500px;
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        transform: translateX(-1100px);
        transition: 1s;

    }

    .board {
        width: 240px;
        height: 385px;
        padding: 4px;
        border: 1px solid black;
        margin: 5px 15px;
        line-height: 8px;
        overflow: hidden;
        background-color: transparent;
        text-align: left;
    }

    .board:hover {
        height: 470px;
        transition: .5s;
    }

    .board .item {
        width: 230px;
        height: 300px;
        border: 2px solid red;
        margin-bottom: 15px;
        display: block;
        overflow: hidden
    }

    .discount {
        width: 50px;
        height: 20px;
        background-color: red;
        border-radius: 2px;
        position: relative;
        line-height: 18px;
        color: white;
        text-indent: 6px;
        bottom: 295px;
        margin: 2px;
        float: left;
        z-index: 9;
    }

    .love {
        width: 25px;
        height: 25px;
        background-color: lawngreen;
        padding: 6px;
        border-radius: 50%;
        position: relative;
        bottom: 295px;
        margin: 2px;
        float: right;
        z-index: 9;
    }

    .luv {
        width: 100%;
        height: 100%;
    }

    .free {
        width: 30px;
        height: 20px;
        background-color: powderblue;
        border: 1px solid black;
        position: relative;
        right: 50px;
        bottom: 30px;
        overflow: hidden;
        z-index: 9;
    }

    .free p {
        display: inline;
        padding-left: 5px;
        font-size: 12px;
        line-height: 18px;
    }
    .free:hover {
        width: 115px;
        transition: .4s;
    }
    .motor {
        width: 30px;
        height: 20px;
        float: right;
        display: inline;
    }

    .view {
        width: 100%;
        height: 40px;
        background-color: #28282d;
        color: white;
        border-radius: 4px;
        cursor: pointer;
    }
    .prod {
        width: 100%;
        height: 100%;
        position: relative;
        /* bottom: 25px; */
        z-index: 2;
    }
    .pointer {
        width: 50px;
        height: 50px;
        background-color: royalblue;
        padding: 10px;
        position: relative;
        float: right;
        bottom: 350px;
        left: 20px;
        border-radius: 50%;
        border: 6px solid black;
    }
    .pointer:active {
        background-color: green;
    }
 
    .pointer2 {
        width: 50px;
        height: 50px;
        background-color: red;
        position: relative;
        bottom: 300px;
        right: 20px;
        border-radius: 50%;
        padding: 10px;
        font-size: 20px;
        font-weight: bolder;
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