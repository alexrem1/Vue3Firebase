const app = Vue.createApp({
  // data functions
  data() {
    return {
      url: "http://www.google.com",
      // title: "The Final Empire",
      // author: "Brandon",
      // age: 45,
      books: [
        {
          title: "name of the wind",
          author: "patrick rothfuss",
          age: 40,
          img: "assets/1.jpg",
          isFav: true,
        },

        {
          title: "the way of kings",
          author: "brandon sanderson",
          age: 60,
          img: "assets/2.jpg",
          isFav: false,
        },
        {
          title: "the final empire",
          author: "brandon sanderson",
          age: 64,
          img: "assets/3.jpg",
          isFav: true,
        },
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

// Challenge - Add to Favs
// - attach a click event to each li (for each book)
// - when a user clicks an li, toggle the "isFav" propertly of that
