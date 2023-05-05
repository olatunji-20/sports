<template>
        <button v-on:click="loud(id)">Delete Product</button>
</template>

<script>
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
        loud(id) {
            console.log("DDDD " + id)
        }
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