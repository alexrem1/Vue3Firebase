import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "./assets/main.css";

// import firebase auth service
import { projectAuth } from "./firebase/config";

let app;

projectAuth.onAuthStateChanged(() => {
  if (!app) {
    app = createApp(App)
      .use(router)
      .mount("#app");
  }
});
// the function above is going to fire when we first establish that connection and it's going to figure out the current user.
// So we're waiting for that initial user value before we're rendering the app.
// when we come to render the app and the function above fires at that point, "projectAuth.currentUser" will be accurate because we've already waited for that connection so it won't be null even though the user is logged in
