<template>
    <section>
        <!-- <h1>gegee</h1> -->
        <Navbar />
        <div class="main">
            <div class="image">
                <img :src="product.imageUrl" :alt="product.productName" class="pic">
                <div class="discount">-{{ product.discount }}%</div>
            </div>
            <div class="details">
                <h3>{{ product.productName }}</h3>
                <h4>€{{ product.productPrice - ((product.discount * product.productPrice) / 100) }}</h4>
                <div class="container">
                    <span class="chg" v-on:click="decrease">-</span>
                    <p class="input">{{ quantity }}</p>
                    <span class="chg" v-on:click="increase">+</span>
                </div>
            </div>
            <Addcart :product="product" :quantity="quantity" v-on:add-to-cart="addToCart({quantity, product})" />
        </div>
        <h3>{{ product.productName }}</h3>
        <Footbar />
    </section>
</template>

<script>
import { mapActions, mapState } from 'vuex';
import Navbar from '@/components/Navbar.vue';
import Footbar from '@/components/Footbar.vue';
import Addcart from '@/components/Addcart.vue';
export default {
    name: 'Stand',
    data() {
        return {
            quantity: 1
        }
    },
    components: {
    Navbar,
    Footbar,
    Addcart
},
    computed: {
        ...mapState("products", ["product"])
    },
    methods: {
        ...mapActions("products", ["getProduct", "addToCart"]),
        decrease() {
            this.quantity--
        },
        increase() {
            this.quantity++
        }
    },
    mounted() {
        this.getProduct(this.$route.params.id)
    }
}
</script>

<style scoped>
.main {
    border: 2px solid blue;
    width: 80%;
    height: auto;
    margin: 50px auto;
}
.image {
    width: 400px;
    height: 400px;
    border: 1px solid firebrick;
    margin: 20px auto 40px;
}
.pic {
    width: 100%;
    height: 100%;
}
.discount {
    width: 70px;
    height: 30px;
    background-color: red;
    color: white;
    position: relative;
    text-align: center;
    border-radius: 3px;
    bottom: 400px;
    left: 3px;
    padding: 6px;
}
.details {
    width: auto;
    height: auto;
    text-align: center;
    line-height: 8px;
    background-color: aquamarine;
    padding: 10px;
}
.container {
    width: 100px;
    height: auto;
    border: 1px solid brown;
    margin: 0px auto;
    padding: 12px;
}
.input {
    width: 80px;
    height: 30px;
    border: 1px solid red;
    display: inline;
    padding: 5px 10px;
    margin: 0px 4px;
}
.chg {
    height: 30px;
    padding: 5px 7px;
    display: inline;
    border: 1px solid red;
    cursor: pointer;
}



</style>