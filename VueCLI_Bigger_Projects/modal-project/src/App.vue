<template>
  <!-- every vue component can contain 3 different parts but must contain a template -->
  <h1>{{ title }}</h1>
  <input type="text" ref="name" />
  <button @click="handleClick">click me</button>
  <Modal :header="header" :text="text" theme="sale" />
  <!-- //passed in here -->
</template>

<script>
import Modal from "./components/Modal.vue";

export default {
  name: "App",
  components: { Modal },
  data() {
    return {
      title: "My first vue app :)",
      header: "Sign up for the giveaway",
      text: "some random text",
    };
  },
  methods: {
    handleClick() {
      // refs work like query selector.
      console.log(this.$refs.name);
      this.$refs.name.classList.add("active");
      this.$refs.name.focus();
    },
  },
};
</script>

//
<style>
/* these styles are global and apply to any element on the page. They can be scoped to just this component */
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
h1 {
  border-bottom: 1px solid #ddd;
  display: inline-block;
  padding-bottom: 10px;
}
</style>
