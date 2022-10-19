<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <Navbar />
    <Categories />
    <Sale />
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <Footbar/>
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from '@/components/Navbar.vue';
import Categories from '@/components/Categories.vue';
import Sale from '../components/Sale.vue';
import HelloWorld from '@/components/HelloWorld.vue'
import Footbar from '@/components/Footbar.vue';

export default {
  name: 'HomeView',
  components: {
    Navbar,
    Categories,
    Sale,
    HelloWorld,
    Footbar,
}
}
</script>
