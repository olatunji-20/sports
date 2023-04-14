<template>
    <section>
        <h2>ADD YOUR PRODUCTS FOR SALE HERE</h2>
        <div class="main">
      <form @submit.prevent="test" enctype="multipart/form-data">
        <input type="text" placeholder="name" v-model="name" />
        <input type="text" placeholder="class" v-model="form" />
        <input type="email" placeholder="E-mail" v-model="email" />
        <input type="tel" placeholder="phone" v-model="phone" />
        <input type="text" placeholder="department" v-model="department" />
        <input
          type="file"
          name="img"
          ref="picture"
          v-on:change="fileSelected"
        />
        <input type="date" placeholder="date of birth" v-model="dob" />
        <button>SUBMIT</button>
      </form>
    </div>
    </section>
</template>

<script>
export default {
    name: "Product",
    data() {
        return {}
    }
}
</script>

<style scoped>

</style>