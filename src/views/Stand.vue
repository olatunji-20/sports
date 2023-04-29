<template>
    <section>
        <Navbar />
        <Back />
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
        <Footbar />
    </section>
</template>

<script>
import { mapActions, mapState } from 'vuex';
import Navbar from '@/components/Navbar.vue';
import Footbar from '@/components/Footbar.vue';
import Addcart from '@/components/Addcart.vue';
import Back from '@/components/Back.vue';
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
        Addcart,
        Back
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
        this.getProduct(this.$route.params._id)
    }
}
</script>

<style scoped>
.main {
    width: 80%;
    height: auto;
    margin: 3.125rem auto;
}

.image {
    width: 20rem;
    height: 22rem;
    border: 1px solid firebrick;
    margin: 1.25rem auto 2.5rem;
}

.pic {
    width: 100%;
    height: 100%;
}

.discount {
    width: 4.375rem;
    height: 1.875rem;
    background-color: red;
    color: white;
    position: relative;
    text-align: center;
    border-radius: 3px;
    bottom: 22rem;
    left: 0.1875rem;
    padding: 0.375rem;
}

.details {
    width: 80%;
    height: auto;
    margin: 0px auto;
    text-align: center;
    line-height: 0.5rem;
    background-color: aquamarine;
    padding: 0.625rem;
}

.container {
    width: 6.25rem;
    height: auto;
    margin: 0px auto;
    padding: 0.75rem;
}

.input {
    width: 5rem;
    height: 1.875rem;
    border: 1px solid red;
    display: inline;
    padding: 0.3125rem 0.625rem;
    margin: 0rem 0.25rem;
}

.chg {
    height: 1.875rem;
    padding: 0.3125rem 0.4375rem;
    display: inline;
    border: 1px solid red;
    cursor: pointer;
}

@media screen and (max-width: 500px) {
    .main {
        width: 90%;
    }

    .image {
        width: 95%;
    }
}
</style>