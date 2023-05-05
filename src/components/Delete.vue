<template>
        <button v-on:click="deleteProduct(id)">Delete Product</button>
</template>

<script>
import { mapActions } from 'vuex';
export default {
    name: "Delete",
    data() {
        return {

        }
    },
    props: {
        id: Number
    },
    methods: {
        ...mapActions("products", ["deleteProduct"])
    }
}
</script>

<style scoped>
button {
    border: 2px solid red;
    width: 100%;
    height: 100%;
}
</style>