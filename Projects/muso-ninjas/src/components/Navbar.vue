<template>
  <div class="navbar">
    <nav>
      <router-link :to="{ name: 'Home' }"
        ><img src="@/assets/ninjas.png" alt="alt" />
      </router-link>
      <div class="links">
        <div v-if="user">
          <router-link :to="{ name: 'CreatePlaylist' }">
            Create Playlist
          </router-link>
          <button @click="handleSubmit">Log out</button>
        </div>
        <div v-else>
          <router-link class="btn" :to="{ name: 'Signup' }">
            Sign up
          </router-link>
          <router-link class="btn" :to="{ name: 'Login' }">
            Login
          </router-link>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
// challenge
//  - only show the logout button if we are logged in
//  - only show the signup and login links if we are not logged in
//  - use the getUser composable

import useLogout from "../composables/useLogout";
import { useRouter } from "vue-router";
import getUser from "../composables/getUser";

export default {
  setup() {
    const { error, logout } = useLogout();
    const { user } = getUser();
    const router = useRouter();

    const handleSubmit = async () => {
      await logout();
      if (!error.value) {
        console.log("User has logged out");
        router.push({ name: "Login" });
      }
    };

    return { error, handleSubmit, user };
  },
};
</script>

<style scoped>
.navbar {
  padding: 16px 10px;
  margin-bottom: 60px;
  background: white;
}
nav {
  display: flex;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
}
nav img {
  max-height: 85px;
}
nav h1 {
  margin-left: 20px;
}
nav .links {
  margin-left: auto;
}
nav .links a,
button {
  margin-left: 16px;
  font-size: 14px;
}
</style>
