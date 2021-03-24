// take in an array of posts
// create a new tag set (so no duplicates)
// add the tags of each post to the tag set
// return a single array of tags based on the set

import { ref } from "vue";

// take in posts array
const useTags = (posts) => {
  const tags = ref([]);
  const tagSet = new Set(); // does not need to be reactive, so no need for a ref as we're only going to use it inside this function to create this set and sets can't contain duplicates

  // cycle through the posts and add the tags of each post to tagSet.
  posts.forEach((item) => {
    // we get access to each post and I want to get the tags and cycle through those as well.
    // we're firing a function for each tag in the post and we're firing a function for each post
    // for each "tag", I'd like to take the "tagSet" and try and add this "tag".
    // we have a set with all of the tags and there's no more than one instance
    item.tags.forEach((tag) => tagSet.add(tag));
  });
  // turn the above set into an array by updating the tags ref value with spread syntax, taking all of the individual elements from that set inside the array
  tags.value = [...tagSet];

  return { tags };
};
export default useTags;
