<template>
  <div class="backdrop" @click.self="closeModal">
    <div class="modal" :class="{ sale: theme === 'sale' }">
      <slot>default content</slot>
      <div class="actions">
        <slot name="links"></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["theme"], //registered over here
  methods: {
    closeModal() {
      // a custom event can be fired from a component and then it can be listened to from the parent component.
      this.$emit("close");
    },
    closeModalTwo() {
      this.$emit("closeTwo");
    },
  },
};
</script>

<style>
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

.modal h1 {
  color: blue;
  border: none;
  padding: 0px;
}

/* overwrite global css */
.modal p {
  font-style: normal;
}

.modal .actions {
  text-align: center;
  margin: 30px 0 10px 0;
  color: #333;
}
.modal .actions a {
  color: #333;
  padding: 8px;
  border: 1px solid #eee;
  border-radius: 4px;
  text-decoration: none;
  margin: 10px;
}

/* sale styles */
.modal.sale {
  background: crimson;
  color: white;
}
.modal.sale h1 {
  color: white;
}
.modal.sale .actions {
  color: white;
}
.modal.sale .actions a {
  color: white;
}
</style>
