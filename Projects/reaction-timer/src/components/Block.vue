<template>
  <div class="block" v-if="showBlock" @click.self="stopTimer">
    click me
  </div>
</template>

<script>
export default {
  props: ["delay"],
  data() {
    return {
      showBlock: false,
      timer: null,
      reactionTime: 0,
    };
  },
  // this will fire when the component has mounted to the dom
  mounted() {
    // console.log("component mounted");
    setTimeout(() => {
      this.showBlock = true;
      this.startTimer();
    }, this.delay);
    console.log(this.delay);
  },
  methods: {
    startTimer() {
      this.timer = setInterval(() => {
        this.reactionTime += 10;
      }, 10);
    },
    stopTimer() {
      clearInterval(this.timer);
      this.$emit("end", this.reactionTime);
    },
  },
  //   // fires when any data inside our component is updated
  //   updated() {
  //     console.log("component updated");
  //   },
  //   // fires when the component is no longer in the dom or when using vue routing going from page to page using different components
  //   unmounted() {
  //     console.log("unmounted");
  //   },
};
</script>

<style>
.block {
  width: 400px;
  border-radius: 20px;
  background: #0faf87;
  color: white;
  text-align: center;
  padding: 100px 0;
  margin: 40px auto;
}
</style>
