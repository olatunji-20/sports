<template>
    <section>
        <div class="back" v-on:click="$router.go(-1)">
            <arrow-left-bold />
        </div>
    </section>
</template>

<script>
import MenuIcon from 'vue-material-design-icons/Menu.vue'
import ArrowLeftBold from 'vue-material-design-icons/ArrowLeftBold.vue'
export default {
    name: 'Back',
    components: {
        MenuIcon,
        ArrowLeftBold
    }
}
</script>

<style scoped>
.back {
    width: 4.25rem;
    height: 2rem;
    background-color: red;
    position: absolute;
    top: 50px;
    color: white;
    padding: 0px;
    line-height: 0px;
    cursor: pointer;
    font-size: 25px;
}
</style>