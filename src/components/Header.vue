<script setup></script>

<template>
  <nav>
    <div>
      <a href="#">
        <img src="../assets/sept.png" alt="Photo de moi" width="25px" />
      </a>
    </div>
    <ul>
      <a href="#story">
        <li>Présentation</li>
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
nav {
  position: fixed;
  top: 0px;
  left: 0;
  right: 0;
  background-color: #31787c;
  width: 100%;
  padding: 5px 0;
  z-index: 1000;

  display: flex;
  justify-content: center;
}

nav ul {
  display: none;
}

ul li {
  list-style-type: none;
  margin: 0 5px;
  font-size: 1.1rem;
}

nav > div {
  background-color: #31787c;
  width: 25px;
  height: 25px;
  font-weight: bold;

  text-align: center;
  padding: 3px;
}

img,
nav > div {
  border-radius: 50%;
}

h1 {
  text-align: center;
  color: white;
  background-color: #31787c;
  padding: 30px 0;
  font-size: 2.6rem;
}

a {
  color: white;
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}

@media (min-width: 633px) {
  nav {
    justify-content: space-between;
  }
  nav ul {
    display: flex;
    margin-right: 3%;
  }

  nav div {
    margin-left: 3%;
  }
}
</style>
