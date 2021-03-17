<template>
  <div class="backdrop" @click.self="closeModal">
    <div class="modal" :class="{ sale: theme === 'sale' }">
      <p>{{ header }}</p>
      <h1>{{ text }}</h1>
    </div>
  </div>
</template>

<script>
export default {
  props: ["header", "text", "theme"], //registered over here
  methods: {
    closeModal() {
      // a custom event can be fired from a component and then it can be listened to from the parent component.
      this.$emit("close");
    },
  },
};
</script>

<style scoped>
.modal {
  width: 400px;
  padding: 20px;
  margin: 100px auto;
  background: white;
  border-radius: 10px;
}
.backdrop {
  top: 0;
  position: fixed;
  background: rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 100%;
}

/* because this style is further down in the html documents than app.vue "style" */
/* add "scoped" to "<style>" tag to only effect this component but not the root component*/
/* OR */
/* make selector more specific .modal h1 {} */
/* global.css in assets for common elements that appear in multiple different components */

h1 {
  color: blue;
  border: none;
  padding: 0px;
}

/* overwrite global css */
.modal p {
  font-style: normal;
}

.modal.sale {
  background: crimson;
  color: white;
}

.modal.sale h1 {
  color: white;
}
</style>
