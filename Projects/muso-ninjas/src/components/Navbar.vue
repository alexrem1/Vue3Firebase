<template>
  <div class="navbar">
    <nav>
      <h1>
        <router-link :to="{ name: 'Home' }"
          ><img src="@/assets/ninjas.png" alt="alt" />
        </router-link>
      </h1>
      <div class="links">
        <button @click="handleSubmit">Log out</button>
        <router-link class="btn" :to="{ name: 'Signup' }">Sign up</router-link>
        <router-link class="btn" :to="{ name: 'Login' }">Login</router-link>
      </div>
    </nav>
  </div>
</template>

<script>
// challenge
//  - fire a function called handleSubmit when thr logout button is clicked
//  - inside the function log the user out and then redirect to the login view

import useLogout from "../composables/useLogout";
import { useRouter } from "vue-router";

export default {
  setup() {
    const { error, logout } = useLogout();
    const router = useRouter();

    const handleSubmit = async () => {
      await logout();
      if (!error.value) {
        console.log("User has logged out");
        router.push({ name: "Login" });
      }
    };

    return { error, handleSubmit };
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
