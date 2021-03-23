<template>
  <div class="post-list" v-for="post in posts" :key="post.id">
    <SinglePost :post="post" />
  </div>
</template>

<script>
import SinglePost from "./SinglePost.vue";

export default {
  components: { SinglePost },
  props: ["posts"],
  setup(props) {
    console.log(props, props.posts);
  },
};
</script>

<style></style>
