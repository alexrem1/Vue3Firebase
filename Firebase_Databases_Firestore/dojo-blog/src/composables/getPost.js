import { ref } from "vue";
import { projectFirestore } from "../firebase/config";

const getPost = (id) => {
  const post = ref(null);
  const error = ref(null);

  const load = async () => {
    try {
      let res = await projectFirestore
        .collection("posts")
        .doc(id)
        .get();

      if (!res.exists) {
        throw Error("That post does not exist");
      }
      // I want to do is update the value of the post ref with the data and the ID property on this object
      post.value = { ...res.data(), id: res.id };
      // now we have a object that represents the post(data and id)
    } catch (err) {
      error.value = err.message;
      console.log(error.value);
    }
  };
  return { post, error, load };
};

export default getPost;

// get a single post!
