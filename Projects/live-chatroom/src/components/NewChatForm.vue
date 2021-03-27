<template>
  <form>
    <textarea
      placeholder="Type a message and hit enter to send..."
      v-model="message"
      @keypress.enter.prevent="handleSubmit"
    >
    </textarea>
  </form>
</template>

<script>
import { ref } from "vue";
import getUser from "../composables/getUser";
import { timestamp } from "../firebase/config";

export default {
  setup() {
    const { user } = getUser();

    const message = ref("");

    // when they press enter inside the textarea, it's going to fire this function that creates a chat object that contains the current user logged in, their message and a timestamp before setting the value of message back to an empty string
    const handleSubmit = async () => {
      const chat = {
        name: user.value.displayName,
        message: message.value,
        createdAt: timestamp(),
      };
      console.log(chat);
      message.value = "";
    };

    return { message, handleSubmit };
  },
};
</script>

<style scoped>
form {
  margin: 10px;
}
textarea {
  width: 100%;
  max-width: 100%;
  margin-bottom: 6px;
  padding: 10px;
  box-sizing: border-box;
  border: 0;
  border-radius: 20px;
  font-family: inherit;
  outline: none;
}
</style>
