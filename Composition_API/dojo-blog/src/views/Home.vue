<template>
  <div class="home">
    <h1>Home</h1>
    <p ref="para">My name is {{ name }} and my age is {{ age }}</p>
    <button @click="handleClick">Click me</button>
    <button @click="age++">Increase age</button>
    <input type="text" v-model="name" />
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
    console.log(para, para.value); // would still be null eg not "returned" yet meaning it's not associated with the dom element yet
    // works with "handleClick" as once the button is clicked, we've already returned it at that point
    console.log(para, para.value);

    // below is not reactive values eg values not automatically updating
    // let name = "mario";
    // let age = 30;

    // unless using "refs"
    const name = ref("mario");
    const age = ref(30);

    const handleClick = () => {
      console.log("you clicked me");
      console.log(para, para.value); // shows the ref object and value eg the dom element (p tag) and normal js properties/methods can be used on it
      para.value.classList.add("test");
      para.value.textContent = "hello guys";

      // name = "luigi"; // does not change in the template as "name" and "age" above is not reactive
      name.value = "luigi"; // now we are updating the values of these refs
      age.value = "35"; // since refs are reactive, it'll update in the template
    };

    return { name, age, handleClick, para };
  },
  data() {
    return {
      // reactive value
      score: 40,
    };
  },
};
</script>
