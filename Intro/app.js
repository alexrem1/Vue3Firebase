const app = Vue.createApp({
  // data functions
  data() {
    return {
      // title: "The Final Empire",
      // author: "Brandon",
      // age: 45,
      books: [
        { title: "name of the wind", author: "patrick rothfuss", age: 40 },
        { title: "the way of kings", author: "brandon sanderson", age: 60 },
        { title: "the final empire", author: "brandon sanderson", age: 64 },
      ],
      addSomething: "",
      showBooks: true,
      showSomething: true,
      x: 0,
      y: 0,
    };
  },
  methods: {
    changeAuthor() {
      this.books[1].author = "JK Rowling";
      this.books[0].author = "How to be number 1";
    },
    changeTitle() {
      this.books[2].title = "Harry Potter and the Philosopher's Stone";
    },
    decreaseAge() {
      this.books[0].age--;
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
