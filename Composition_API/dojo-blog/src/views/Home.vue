<template>
  <div class="home">
    <h1>Home</h1>
    <p>My name is {{ name }} and my age is {{ age }}</p>
    <button @click="handleClick">Click me</button>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Home",
  // setup function will run before any of the lifecycle hooks eg mounted/created
  setup() {
    console.log("setup");

    // below is not reactive values
    let name = "mario";
    let age = 30;

    const handleClick = () => {
      console.log("you clicked me");
    };

    return { name, age, handleClick };
  },
  // data() {
  // reactive value
  //   age: 40;
  // },
};
</script>
