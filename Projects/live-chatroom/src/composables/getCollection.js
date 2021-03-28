import { get } from "core-js/core/dict";
import { ref } from "vue";
import { projectFirestore } from "../firebase/config";

const getCollection = (collection) => {
  const documents = ref(null);
  const error = ref(null);

  let collectionRef = projectFirestore
    .collection(collection)
    .orderBy("createdAt");

  collectionRef.onSnapshot(
    (snap) => {
      let results = [];
      snap.docs.forEach((doc) => {
        doc.data().createdAt && results.push({ ...doc.data(), id: doc.id });
      });
      document.value = results;
      error.value = null;
    }, // no trycatch block. fire a second callback function. this is how the onsnapshot method works
    (err) => {
      console.log(err.message);
      documents.value = null;
      error.value = err.message;
    }
  );
  return { documents, error };
};

export default getCollection;
