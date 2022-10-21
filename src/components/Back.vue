<template>
    <section>
        <div class="back" v-on:click="$router.go(-1)"><p>Back</p></div>
    </section>
</template>

<script>
export default {
    name: 'Back'
}
</script>

<style scoped>
.back {
    width: 6.25rem;
    height: 2.5rem;
    background-color: red;
    color: white;
    padding: 1px;
    cursor: pointer;
}
</style>