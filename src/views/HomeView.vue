<template>
  <div class="home">
    <Navbar />
    <Categories />
    <VuePreloader v-if="loading"
      background-color="#091a28"
      color="#099999"
      transition-type="fade-up"
      :loading-speed="25"
      :transition-speed="1400"
      @loading-is-over="loadingIsOver"
      @transition-is-over="transitionIsOver"
    >
  <span>lahudyugfyugr</span></VuePreloader>
    <Sale v-else :products="products1" route="Stand" topic="Sales item" />
    <Sale :products="products2" route="Standd" topic="Latest products" />
    <Sponsors />
    <Sale :products="products1" route="Stand" topic="Recently viewed" />
    <Footbar />
  </div>
</template>

<script>
import { VuePreloader } from 'vue-preloader';
// import '@/node_modules/vue-preloader/dist/style.css'

import Navbar from '../components/Navbar.vue';
import Categories from '../components/Categories.vue';
import Sale from '../components/Sale.vue';
import Footbar from '../components/Footbar.vue';
import Sponsors from '../components/Sponsors.vue'
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'HomeView',
  data() {
    return {
      loading: true
    }
  },
  components: {
    Navbar,
    Categories,
    Sale,
    Footbar,
    Sponsors,
    VuePreloader
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
    this.loading = false;
  }
}
</script>
