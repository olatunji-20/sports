<template>
    <section>
        <button v-on:click="submitOrders({cart})">checkout</button>
    </section>
</template>

<script>
export default {
    name: 'Checkout',
    data() {
        return {

        }
    },
    props:{
        cart: Array
    },
    methods: {
        submitOrders(cart) {
            console.log("hhhhhh", cart)
        }
    }
}
</script>

<style scoped>
section {
    border: 2px solid purple;
    margin-top: 100px;
}
button {
    width: 90%;
    height: 40px;
    background-color: aquamarine;
}
</style>