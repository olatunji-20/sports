<template>
  <div class="home">
    <Navbar />
    <Categories />
    <div class="lala">
      <Preloader v-if="loading" topic="sales item" />
      <Sale :products="products1" route="Stand" topic="Sales item" v-else />
    </div>
    <div class="lala">
      <Preloader v-if="loading" topic="latest products" />
      <Sale :products="products2" route="Standd" topic="Latest products" v-else />
    </div>
    <Sponsors />
    <div class="lala">
      <Preloader v-if="loading" topic="recently viewed" />
      <Sale :products="products1" route="Stand" topic="Recently viewed" v-else />
    </div>
    <Footbar />
  </div>
</template>

<script>
import Navbar from '../components/Navbar.vue';
import Categories from '../components/Categories.vue';
import Sale from '../components/Sale.vue';
import Footbar from '../components/Footbar.vue';
import Sponsors from '../components/Sponsors.vue';
import Preloader from '../components/Preloader.vue'
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
    Sponsors,
    Preloader,
    Sale,
    Footbar
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
    this.loading = false
  }
}
</script>


<style scoped>
.lala {
  /* border: 2px solid red; */
}
</style>