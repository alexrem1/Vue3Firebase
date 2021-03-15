const app = Vue.createApp({
  // data functions
  data() {
    return {
      title: "The Final Empire",
      author: "Brandon",
      age: 45,
      addSomething: "",
    };
  },
  methods: {
    changeAuthor() {
      this.author = "JK Rowling";
    },
    addJohn(addName) {
      this.addSomething = addName;
    },
  },
});

app.mount("#app");
