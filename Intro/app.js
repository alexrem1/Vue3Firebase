const app = Vue.createApp({
  // data functions
  data() {
    return {
      title: "The Final Empire",
      author: "Brandon",
      age: 45,
      addSomething: "",
      showBooks: true,
    };
  },
  methods: {
    changeAuthor() {
      this.author = "JK Rowling";
    },
    addJohn(addName) {
      this.addSomething = addName;
    },
    toggleShowBooks() {
      this.showBooks = !this.showBooks;
    },
  },
});

app.mount("#app");
