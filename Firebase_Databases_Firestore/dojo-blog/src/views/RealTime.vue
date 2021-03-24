<template>
  <h1>Real-time data</h1>
  <div v-for="post in posts" :key="post.id">
    <div>
      {{ post.title }}
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import { projectFirestore } from "../firebase/config";
export default {
  setup() {
    const posts = ref([]);

    projectFirestore
      .collection("posts")
      .orderBy("createdAt", "desc")
      .onSnapshot((snapshot) => {
        // we need to update "posts ref" the value of the posts that we get in each snapshot. So initially and everytime there's a change
        let docs = snapshot.docs.map((doc) => {
          return { ...doc.data(), id: doc.id };
        });
        posts.value = docs;
      });

    return { posts };
  },
};
</script>

<style></style>
