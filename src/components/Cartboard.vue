<template>
    <section>
        <router-link to="/cart">
            <div class="main" v-if="cart.length">
                <h2 class="number">{{ cart.length }}</h2>
                <div class="icon"></div>
            </div>
        </router-link>
    </section>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    name: 'Cartboard',
    data() {
        return {

        }
    },
    computed: {
        ...mapGetters("products", ["cart"])
    }
}
</script>

<style scoped>
.main {
    width: 3.125rem;
    height: 3.125rem;
    background-color: lawngreen;
    border-radius: 50%;
    padding: 0px;
    float: right;
    /* border: 1px solid red; */
    position: relative;
    bottom: 1.25rem;
}
.icon {
    width: 1.875rem;
    height: 1.875rem;
    background-color: orangered;
    border-radius: 50%;
    position: relative;
    bottom: 1.5625rem;
    left: 0.9375rem;
    color: white;
}
.number {
    position: relative;
    bottom: 0.4375rem;
    right: 0.625rem;
    line-height: 0px;
}
</style>