<template>
  <div class="home">
    <div v-if="error">{{ error }}</div>
    <div v-if="posts.length" class="layout">
      <PostList :posts="postsWithTag" />
      <TagCloud :posts="posts" />
    </div>
    <div v-else><Spinner /></div>
  </div>
</template>

<script>
// challenge
//   - create a tag route, which the tag as a route paramater (/posts/:tag)
//   - in the Tag view, make a request for all the posts
//   - use the useRoute function to access the tag route parameter
//   - use a computed property to return an array of posts which have that tag
//   - use the PostList component to output the required posts
//   - show the spinner until the data is loaded, and error if there is one

// SOLUTION
// We've fetched the post right here and we've created a computed property to filter those posts based on the current route. And we've got that route object right here. We've returned that and then we're just outputting them inside the post list.

import Spinner from "../components/Spinner.vue";
import PostList from "../components/PostList";
import TagCloud from "../components/TagCloud";
import getPosts from "../composables/getPosts";
import { useRoute } from "vue-router";
import { computed } from "vue";

export default {
  components: {
    PostList,
    Spinner,
    TagCloud,
  },
  setup() {
    const route = useRoute();

    const { posts, error, load } = getPosts();

    load();

    // it will return true if the tags of the current post were iterating includes the tag which is in the route.So if that's the case, it returns true and that stays in the array (in the filtered array) because we want to show that post. It includes the tag and we'll show it on the page. If it doesn't, then this is going to return false and that post will be filtered out of the array.
    const postsWithTag = computed(() => {
      return posts.value.filter((post) => post.tags.includes(route.params.tag));
    });
    return { error, posts, postsWithTag };
  },
};
</script>

<style></style>
