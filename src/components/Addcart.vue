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
    margin: 20px auto;
    width: 400px;
    height: 40px;
    background-color: aqua;
}

</style>