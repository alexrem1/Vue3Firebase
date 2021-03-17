<template>
  <div class="backdrop">
    <div class="modal">
      <p>modal content</p>
      <h1>modal content</h1>
    </div>
  </div>
</template>

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
</style>
