<template>
  <div class="home">
    <div v-if="error" class="error">Could not fetch the data</div>
    <div v-if="documents">
      <div v-for="doc in documents" :key="doc.id">{{ doc.title }}</div>
    </div>
  </div>
</template>

<script>
// challenge
//  - get realtime data from the playlist collection
//  - output 2 conditional items - error or playlist tiles
import getCollection from "../composables/getCollection";

export default {
  setup() {
    const { error, documents } = getCollection("playlists");

    return { error, documents };
  },
};
</script>
