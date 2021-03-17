// every vue component can contain 3 different parts but must contain a template

<template>
  <h1>{{ title }}</h1>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      title: "My first vue app :)",
    };
  },
};
</script>

// these styles are global and apply to any element on the page. They can be
scoped to just this component eg
<style>
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
