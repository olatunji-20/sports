<template>
  <div class="home">
    <Navbar />
    <Categories />
    <Sale topic="Sales item"/>
    <Sale topic="Latest products"/>
    <Sponsors />
    <Sale topic="Recently viewed"/>
    <Footbar/>
  </div>
</template>

<script>
import Navbar from '../components/Navbar.vue';
import Categories from '../components/Categories.vue';
import Sale from '../components/Sale.vue';
import Footbar from '../components/Footbar.vue';
import Sponsors from '../components/Sponsors.vue'

export default {
  name: 'HomeView',
  components: {
    Navbar,
    Categories,
    Sale,
    Footbar,
    Sponsors
}
}
</script>
