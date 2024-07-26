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
    <div>
      <a href="#"> DE </a>
    </div>
    <ul>
      <a href="#story">
        <li>Préentation</li>
      </a>
      <a href="#gallery">
        <li>Projets</li>
      </a>
      <a href="#contact">
        <li>Contact</li>
      </a>
    </ul>
  </nav>
  <h1>Portfolio de Dylan Eglantine</h1>
</template>

<style scoped>
header {
  margin-bottom: 20px;
}
nav {
  position: fixed;
  top: 0px;
  background-color: #6fc1cf;
  padding: 10px;
  width: 100%;
  padding: 0 11%;

  display: flex;
}

nav ul {
  display: none;
  margin-left: 50%;
}

ul li {
  list-style-type: none;
  margin: 0 5px;
  font-size: 0.8rem;
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
  text-align: center;
  color: white;
  background-color: #6fc1cf;
  padding-top: 10px;
  padding-bottom: 10px;
}

a {
  color: white;
  text-decoration: none;
}

@media (min-width: 633px) {
  nav ul {
    display: flex;
  }
}
</style>
