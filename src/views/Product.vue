<template>
  <section>
    <h2>ADD YOUR PRODUCTS FOR SALE HERE</h2>
    <div class="main">
      <form @submit.prevent="test(), uploadProduct(formData)" enctype="multipart/form-data">
        <input type="text" placeholder="product name" v-model="productName" /><br />
        <input type="text" placeholder="product maker" v-model="maker" /><br />
        <input type="number" placeholder="product price" v-model="productPrice" /><br />
        <input type="number" placeholder="discount" v-model="discount" /><br />
        <input type="text" placeholder="series" v-model="series" /><br />
        <input
          type="file"
          name="img"
          ref="picture"
          v-on:change="fileSelected"
        /><br /><br /><br />
        <button>SUBMIT</button>
        <!-- <Productupload :productDetails="formData"/> -->
      </form>
    </div>
  </section>
</template>

<script>
import Productupload from '../components/Product-upload'
import { mapActions } from 'vuex';

export default {
  name: "Product",
  data() {
    return {
        productName: "",
        maker: "",
        productPrice: "",
        discount: "",
        series: "",
        selectedImage: "",
    };
  },
  components: {
    Productupload
  },
  methods: {
    fileSelected() {
      const pic = this.$refs.picture.files[0];
      this.selectedImage = pic;
    },
    async test() {
      const formData = new FormData();
      formData.append("productName", this.productName);
      formData.append("maker", this.maker);
      formData.append("productPrice", this.productPrice);
      formData.append("discount", this.discount);
      formData.append("series", this.series);
      formData.append("picture", this.selectedImage, this.selectedImage.name);
      
      try {
        console.log("dfhuf" + "FORMDATA")
      } catch(error) {
        console.log(error)
      }
    },
    ...mapActions("products", ["uploadProduct"])
  }
};
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