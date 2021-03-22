<template>
  <div v-if="job">
    <h1>{{ job.title }}</h1>
    <p>The Job ID is {{ id }}</p>
    <p>{{ job.details }}</p>
    <!-- OR $route.params.id OR via data or via PROPS-->
  </div>
  <div v-else>
    <p>Loading Job Details...</p>
  </div>
</template>

<script>
export default {
  props: ["id"],
  //   data() {
  //     return {
  //       id: this.$route.params.id,
  //     };
  //   },
  data() {
    return {
      job: null, // When the page first loads, we're trying to output the title of null, so we need to figure out a way to conditionally output the template, only when we have a value back from the fetch request.
    };
  },
  mounted() {
    fetch("http://localhost:3000/jobs/" + this.id)
      .then((response) => response.json())
      .then((data) => (this.job = data))
      .catch((err) => console.log(err.message));
  },
};
</script>

<style></style>
