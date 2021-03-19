<template>
  <form>
    <label>Email:</label>
    <input type="email" required v-model="email" />
    <!-- "v-model" for two way data binding -->
    <label>Password:</label>
    <input type="password" required v-model="password" />
    <input type="twoWay" required v-model="twoWay" />

    <label>Role:</label>
    <select v-model="role">
      <option value="Developer">Web Developer</option>
      <option value="Designer">Web Designer</option>
    </select>
  </form>
  <p>
    Email: {{ email }} <br />
    Password: {{ password }} <br />
    Role: {{ role }}
  </p>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      password: "",
      twoWay: "Bound from data to v-model, as well as v-model to data",
      role: "Designer",
    };
  },
};
</script>

<style>
form {
  max-width: 420px;
  margin: 30px auto;
  background: white;
  text-align: left;
  padding: 40px;
  border-radius: 10px;
}
label {
  color: #aaa;
  display: inline-block;
  margin: 25px 0 15px;
  font-size: 0.6em;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: bold;
}
input,
select {
  display: block;
  padding: 10px 6px;
  width: 100%;
  box-sizing: border-box;
  border: none;
  border-bottom: 1px solid #ddd;
  color: #555;
}
</style>
