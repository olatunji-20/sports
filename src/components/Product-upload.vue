<template>
    <section>
        <button v-on:click="loud">SUBMIT</button>
    </section>
</template>

<script>
export default {
    name: "Productupload",
    data() {
        return {

        }
    },
    methods: {
        loud() {
            console.log("LOUDING" + productDetails)
        }
    },
    props: {
        productDetails: Object
    }
}
</script>

<style scoped>
button {
    height: 60px;
    width: 200px;
    background: red;
}

</style>