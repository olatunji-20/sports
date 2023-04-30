<template>
  <section>
    <Navbar />
    <h2>UPLOAD YOUR PRODUCTS HERE</h2>
    <div class="main">
      <form
        @submit.prevent="uploadProduct(productDetails)"
        enctype="multipart/form-data"
      >
        <input
          type="text"
          placeholder="product name"
          v-model="productDetails.productName"
        /><br />
        <input
          type="text"
          placeholder="product maker"
          v-model="productDetails.maker"
        /><br />
        <input
          type="number"
          placeholder="product price"
          v-model="productDetails.productPrice"
        /><br />
        <input
          type="number"
          placeholder="discount"
          v-model="productDetails.discount"
        /><br />
        <input
          type="text"
          placeholder="series"
          v-model="productDetails.series"
        /><br />
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
    <Footbar />
  </section>
</template>

<script>
import Navbar from "../components/Navbar"
import Footbar from "../components/Footbar"
import { mapActions } from "vuex";

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
      },
    };
  },
  components: {
    Navbar,
    Footbar
  },
  methods: {
    ...mapActions("products", ["uploadProduct"]),
    fileSelected() {
      const pic = this.$refs.picture.files[0];
      this.productDetails.selectedImage = pic;
    },
  },
};
</script>

<style scoped>
.main {
  width: 500px;
  height: auto;
  padding: 35px 20px 45px;
  background: whitesmoke;
  margin: 30px auto 100px;

}
input {
  width: 80%;
  height: 30px;
  margin: 6px auto;
}
button {
  width: 55%;
  height: 35px;
  background: teal;
  color: white;
  border: 1px solid black;
  border-radius: 4px;
}
</style>