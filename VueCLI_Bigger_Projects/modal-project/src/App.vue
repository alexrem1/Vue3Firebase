<template>
  <!-- every vue component can contain 3 different parts but must contain a template -->
  <h1>{{ title }}</h1>
  <p>Welcome...</p>
  <input type="text" ref="name" />
  <br />
  <button @click="handleClick">click me</button>
  <div v-if="showModal">
    <Modal theme="sale" @close="toggleModal">
      <!-- template passed inside here is known as a slot -->
      <h1>Ninja Givaway!</h1>
      <p>Grab your ninja swag for half price!</p>
      <!-- if there is no "default content"  in the "Modal slot template" eg the h1 and p tag above, it will refer to the default content in the Modal.vue component -->
      <template v-slot:links>
        <a href="#">Sign up now</a>
        <a href="#">More info</a>
      </template>
    </Modal>
    <!-- //passed in here -->
  </div>
  <br />
  <button @click="toggleModal">open modal</button>
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
      showModal: false,
    };
  },
  methods: {
    handleClick() {
      // refs work like query selector.
      console.log(this.$refs.name);
      this.$refs.name.classList.add("active");
      this.$refs.name.focus();
    },
    toggleModal() {
      this.showModal = !this.showModal;
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
