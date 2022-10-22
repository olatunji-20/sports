<template>
    <section>
        <button v-on:click="addCart(quantity, product)">Add to cart</button>
    </section>
</template>

<script>
export default {
    name: 'Button',
    data() {

    },
    props: {
        product: Object,
        quantity: Number
    },
    methods: {
        addCart(quantity, product) {
            this.$emit("add-to-cart", quantity, product)
        }
    },
    emits: ["add-to-cart"]
}
</script>

<style scoped>
button {
    margin: 1.25rem auto;
    width: 80%;
    height: 2.5rem;
    background-color: aqua;
    border: 0px;
    border-radius: 5px;
    color: white
}
</style>