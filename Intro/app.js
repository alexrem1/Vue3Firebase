const app = Vue.createApp({
  // data functions
  data() {
    return {
      title: "The Final Empire",
      author: "Brandon",
      age: 45,
      addSomething: "",
      showBooks: true,
      showSomething: true,
      x: 0,
      y: 0,
    };
  },
  methods: {
    changeAuthor() {
      this.author = "JK Rowling";
    },
    addJohn(addName) {
      this.addSomething = addName;
      this.showSomething = !this.showSomething;
    },
    toggleShowBooks() {
      this.showBooks = !this.showBooks;
    },
    handleEvent(e, data) {
      console.log(e, e.type);
      if (data) {
        console.log(data);
      }
    },
    handleMousemove(e) {
      this.x = e.offsetX;
      this.y = e.offsetY;
    },
  },
});

app.mount("#app");
