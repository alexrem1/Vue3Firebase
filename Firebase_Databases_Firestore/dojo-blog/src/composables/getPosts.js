import { ref } from "vue";
import { projectFirestore } from "../firebase/config";

const getPosts = () => {
  const posts = ref([]);
  const error = ref(null);

  const load = async () => {
    try {
      const res = await projectFirestore
        .collection("posts")
        .orderBy("createdAt", "desc")
        .get();

      // map method allows us to do is take an array and cycle through the array, perform a function on each item whereby we do something with the item and return it and then output a new array based on the new one
      posts.value = res.docs.map((doc) => {
        // on each doc(post) that we return here, we want all of the data but also the document I.D
        return { ...doc.data(), id: doc.id };
      });
    } catch (err) {
      error.value = err.message;
      console.log(error.value);
    }
  };
  return { posts, error, load };
};

export default getPosts;
