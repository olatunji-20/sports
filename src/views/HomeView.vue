<template>
  <div class="home">
    <Navbar />
    <Categories />
    <Sale :products="products1" route="Stand" topic="Sales item" />
    <Sale :products="products2" route="Standd" topic="Latest products" />
    <Sponsors />
    <Sale :products="products1" route="Stand" topic="Recently viewed" />
    <Footbar />
  </div>
</template>

<script>
import Navbar from '../components/Navbar.vue';
import Categories from '../components/Categories.vue';
import Sale from '../components/Sale.vue';
import Footbar from '../components/Footbar.vue';
import Sponsors from '../components/Sponsors.vue'
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'HomeView',
  components: {
    Navbar,
    Categories,
    Sale,
    Footbar,
    Sponsors
  },
  computed: {
    ...mapGetters("products", ["products1", "products2"])
  },
  methods: {
    ...mapActions("products", ["getProducts", "getProducts2"])
  },
  async created() {
    this.products1 = await this.getProducts();
    this.products2 = await this.getProducts2();

  }
}
</script>
