<template>
  <h1>Job Details Page</h1>
  <p>The Job ID is {{ id }}</p>
  <!-- OR $route.params.id OR via data or via PROPS-->
</template>

<script>
export default {
  props: ["id"],
  //   data() {
  //     return {
  //       id: this.$route.params.id,
  //     };
  //   },
};
</script>

<style></style>
