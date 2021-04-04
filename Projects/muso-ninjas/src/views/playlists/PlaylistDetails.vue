<template>
  <div v-if="error">{{ error }}</div>
  <div v-if="playlist" class="playlist-details">
    <!-- playlist information -->
    <div class="playlist-info">
      <div class="cover">
        <img :src="playlist.coverUrl" />
      </div>
      <h2>{{ playlist.title }}</h2>
      <p class="username">Created by: {{ playlist.userName }}</p>
      <p class="description">{{ playlist.description }}</p>
    </div>

    <!-- song list -->
    <div class="song-list">
      <p>Song list here</p>
    </div>
  </div>
</template>

<script>
import getDocument from "@/composables/getDocument";

export default {
  props: ["id"],
  setup(props) {
    const { error, document: playlist } = getDocument("playlists", props.id);

    return { error, playlist };
  },
};
</script>

<style></style>
