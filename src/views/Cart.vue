<template>
    <section>
        <Navbar />
        <Back />
        <div class="main">
            <h1 style="text-decoration: underline">Number of items in cart: {{ cart.length }}</h1>
            <div v-for="product in cart" :key="product.id" class="container">
                <div class="image">
                    <!-- <img :src="'https://lovesports-api.onrender.com/product-images/' + product.productName + product.imageName" :alt="product.productName" class="cart-image"> -->
                    <img :src="'https://raw.githubusercontent.com/olatunji-20/lovesport-backend/master/product-images/' + product.imageName" :alt="product.productName" class="cart-image">
                </div>
                <div class="infos">
                    <h3>Name: {{ product.productName }}</h3>
                    <p>Price: €{{ product.productPrice - ((product.discount * product.productPrice) / 100) }}</p>
                    <p>Quantity: {{ product.quantity }}</p>
                    <p>Total: €{{ (product.productPrice - ((product.discount * product.productPrice) / 100)) *
                    product.quantity }}</p>
                </div>
                <div v-on:click="removeItem(product.id)" class="remove">
                    <Close />
                </div>
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
import Checkout from '../components/Checkout.vue';
import Back from '../components/Back.vue';
import Close from 'vue-material-design-icons/Close.vue'
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
        Checkout,
        Back,
        Close
    },
    methods: {
        ...mapActions("products", ["removeItem"])
    }
}
</script>

<style scoped>
section {
    border: 0px solid saddlebrown;
}

.main {
    padding: 2.5rem;
}

.container {
    width: 70%;
    height: 12.5rem;
    margin: 1.875rem auto;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    box-shadow: 0.0625rem 0.0625rem 0.375rem 0.0625rem #999999;
}

.image {
    width: 13.75rem;
    height: 100%;
}

.cart-image {
    width: 100%;
    height: 100%;
}

.infos {
    width: 31.25rem;
    height: 100%;
    margin-left: 1.25rem;
    padding: 0.625rem;
    text-align: left;
}

.infos p {
    line-height: 0.625rem;
}

.remove {
    width: 3.125rem;
    height: 3.125rem;
    margin: auto;
    color: red;
    font-size: 30px;
}

@media screen and (max-width: 900px) {
    .containerr {
        width: 85%;
    }
}

@media screen and (max-width: 500px) {
    .main {
        padding: 10px;
    }

    .container {
        width: 99%;
        height: 170px;
        margin: 20px auto;
    }

    .infos {
        margin-left: 0px;
        padding: 2px;
        height: 180px;
        font-size: 14px;
    }
}
</style>