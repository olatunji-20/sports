<template>
    <section>
        <button v-on:click="submitOrders({cart})" v-if="cart.length">checkout</button>
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
            alert("Your order has been placed.")
            console.log("hhhhhh", cart)
        }
    }
}
</script>

<style scoped>
section {
    border: 2px solid purple;
    margin-top: 6.25rem;
}
button {
    width: 60%;
    height: 2.5rem;
    background-color: aquamarine;
    border: 0px;
    color: white;
}
</style>