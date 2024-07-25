<script setup>
// defineProps({
//   msg: {
//     type: String,
//     required: true,
//   },
// });
</script>

<template>
  <nav>
    <div>DE</div>
  </nav>
  <h1>Portfolio de Dylan Eglantine</h1>
</template>

<style scoped>
header {
  margin-bottom: 20px;
}
nav {
  background-color: #6fc1cf;
  padding: 10px;

  display: flex;
  justify-content: center;
}

nav > div {
  background-color: #334447;
  color: white;
  width: 25px;
  font-weight: bold;

  text-align: center;
  padding: 3px;
  border-radius: 50%;
}

h1 {
  margin: 15px;
  text-align: center;
}
</style>
