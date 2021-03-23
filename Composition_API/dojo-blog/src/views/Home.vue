<template>
  <div class="home">
    <h1>Home</h1>
    <p ref="para">My name is {{ name }} and my age is {{ age }}</p>
    <button @click="handleClick">Click me</button>
  </div>
</template>

<script>
import { ref } from "vue";
// @ is an alias to /src

export default {
  name: "Home",
  // setup function will run before any of the lifecycle hooks eg mounted/created
  setup() {
    // "this" keyword is not available in the setup eg this.$refs.whateverTheRefIs
    console.log(this); // undefined

    // template refs in composition API work different eg auto imports "ref" from "vue"
    const para = ref(null);
    console.log(para, para.value);

    // below is not reactive values
    let name = "mario";
    let age = 30;

    const handleClick = () => {
      console.log("you clicked me");
      console.log(para, para.value); // shows the ref object and value eg the dom element (p tag) and normal js properties/methods can be used on it
      para.value.classList.add("test");
      para.value.textContent = "hello guys";
    };

    return { name, age, handleClick, para };
  },
  // data() {
  // reactive value
  //   age: 40;
  // },
};
</script>
