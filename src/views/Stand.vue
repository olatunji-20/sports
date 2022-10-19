<template>
    <section>
        <!-- <h1>gegee</h1> -->
        <Navbar />
        <Footbar />
    </section>
</template>

<script>
import Navbar from '@/components/Navbar.vue';
import Footbar from '@/components/Footbar.vue';
export default {
    name: 'Stand',
    data() {

    },
    components: {
    Navbar,
    Footbar
}
}
</script>

<style scoped>
section {
    border: 4px solid red;
    /* padding: 40px; */
}
</style>