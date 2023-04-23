<template>
  <section>
    <h2>ADD YOUR PRODUCTS FOR SALE HERE</h2>
    <div class="main">
      <form @submit.prevent="uploadProduct(productDetails)" enctype="multipart/form-data">
        <input type="text" placeholder="product name" v-model="productDetails.productName" /><br />
        <input type="text" placeholder="product maker" v-model="productDetails.maker" /><br />
        <input type="number" placeholder="product price" v-model="productDetails.productPrice" /><br />
        <input type="number" placeholder="discount" v-model="productDetails.discount" /><br />
        <input type="text" placeholder="series" v-model="productDetails.series" /><br />
        <input
          type="file"
          name="img"
          ref="picture"
          v-on:change="fileSelected"
        /><br /><br />
        <br />
        <button>SUBMIT</button>
      </form>
    </div>
  </section>
</template>

<script>
import Productupload from '../components/Product-upload'
import { mapActions } from 'vuex';
import axios from "axios"

export default {
  name: "Product",
  data() {
    return {
      productDetails: {
        productName: "",
        maker: "",
        productPrice: "",
        discount: "",
        series: "",
        selectedImage: "",
      }
    };
  },
  components: {
    Productupload
  },
  methods: {
    ...mapActions("products", ["uploadProduct"]),
    fileSelected() {
      const pic = this.$refs.picture.files[0];
      this.productDetails.selectedImage = pic;
    }
}
}
</script>

<style scoped>
.main {
    width: 500px;
    height: 500px;
    padding: 20px;
    background: powderblue;
    margin: 0px auto;
}
input {
    width: 80%;
    height: 30px;
    margin: 6px auto;
}
button {
    width: 60%;
    height: 35px;
    background: green;
    color: white;
}
</style>