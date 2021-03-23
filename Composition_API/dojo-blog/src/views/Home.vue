<template>
  <div class="home">
    <h1>Home</h1>
    <input type="text" v-model="search" />
    <p>search term - {{ search }}</p>
    <div v-for="name in matchingNames" :key="name">
      <p>{{ name }}</p>
    </div>
    <button @click="handleClick">stop watching</button>
  </div>
</template>

<script>
import { ref, computed, watch, watchEffect } from "vue";

export default {
  name: "Home",
  setup() {
    const search = ref("");
    const names = ref(["mario", "lunat", "betsy", "maria", "koola", "peach"]);

    // how to stop watching? store the function in a variable and then invoke the function
    const stopWatch = watch(search, () => {
      console.log("watch function ran");
    });

    // this runs initially when the setup functions first runs
    // however it'll auto watch any value inside it and then run it when that changes
    // runs right away to get data for the components eg get data from a database and perhaps that resouce relies on a resource id. When the id changes we want to rerun the function to get the new resource from the database
    const stopEffect = watchEffect(() => {
      console.log("watchEffect function ran", search.value);
    });

    const matchingNames = computed(() => {
      return names.value.filter((name) => name.includes(search.value));
    });

    const handleClick = () => {
      stopWatch();
      stopEffect();
    };

    return { names, search, matchingNames, handleClick };
  },
};
</script>
