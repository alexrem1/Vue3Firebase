<template>
  <p>Reaction time: {{ score }}ms</p>
</template>

<script>
// Challenge
// - when the game ends, show the results component
// - output the score inside the results component
export default {
  props: ["score"],
};
</script>

<style></style>
