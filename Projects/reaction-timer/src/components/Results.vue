<template>
  <p>Reaction time: {{ score }}ms</p>
  <p class="rank">{{ rank }}</p>
</template>

<script>
// Challenge
// - when the game ends, show the results component
// - output the score inside the results component
export default {
  props: ["score"],
  data() {
    return {
      rank: null,
    };
  },
  mounted() {
    if (this.score < 250) {
      this.rank = "Rapid reflexes";
    } else if (this.score < 400) {
      this.rank = "Twitter fingers";
    } else {
      this.rank = "Snails pace";
    }
  },
};
</script>

<style>
.rank {
  font-size: 1.4em;
  color: #0faf87;
  font-weight: bold;
}
</style>
