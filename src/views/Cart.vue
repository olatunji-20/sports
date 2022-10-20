<template>
    <section>
        <Navbar />
        <div class="main">
            <h1>Number of items in cart {{ cart.length }}</h1>
            <h2 v-for="product in cart" :key="product.id">{{ product.productName }}</h2>
            <div v-for="product in cart" :key="product.id" class="container">
                <div class="image">
                    <img :src="product.imageUrl" :alt="product.productName" class="cart-image">
                </div>
                <div class="infos">
                    <h3>Name: {{ product.productName }}</h3>
                    <p>Price: €{{ product.productPrice - ((product.discount * product.productPrice) / 100) }}</p>
                    <p>Quantity:   {{ product.quantity }}</p>
                    <p>Total: €{{ (product.productPrice - ((product.discount * product.productPrice) / 100)) * product.quantity }}</p>
                </div>
                <div v-on:click="removeItem(product.id)" class="remove"></div>
            </div>
            <Checkout :cart="cart" />
        </div>
        <Footbar />
    </section>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import Navbar from '../components/Navbar.vue';
import Footbar from '../components/Footbar.vue';
import Checkout from '@/components/Checkout.vue';
export default {
    name: "Cart",
    data() {
        return {};
    },
    computed: {
        ...mapGetters("products", ["cart"])
    },
    components: {
        Navbar,
        Footbar,
        Checkout
    },
    methods: {
        ...mapActions("products", ["removeItem"])
    }
}
</script>

<style scoped>
section {
    border: 3px solid saddlebrown;
}
.main {
    border: 2px solid blue;
    padding: 40px;
}
.container {
    width: 70%;
    height: 200px;
    border: 2px solid red;
    margin: 30px auto;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}
.image {
    width: 220px;
    height: 100%;
    border: 1px solid black;
}
.cart-image {
    width: 100%;
    height: 100%;
}
.infos {
    width: 500px;
    height: 100%;
    border: 1px solid green;
    margin-left: 20px;
    padding: 10px;
    text-align: left;
}
.remove {
    width: 50px;
    height: 50px;
    border: 5px solid violet;
    margin: auto;
}
</style>