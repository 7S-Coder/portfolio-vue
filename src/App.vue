<script setup>
import Contact from "./components/Contact.vue";
import Footer from "./components/Footer.vue";
import Gallery from "./components/Gallery.vue";
import Header from "./components/Header.vue";
import Story from "./components/Story.vue";
</script>

<template>
  <header>
    <Header />
  </header>

  <main>
    <div class="centered">
      <Story />
      <Gallery />
      <Contact />
    </div>
  </main>
  <footer>
    <Footer />
  </footer>
</template>

<style>
.centered {
  max-width: 1440px;
  margin-left: auto;
  margin-right: auto;
}
* {
  margin: 0;
  padding: 0;

  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
}
h1 {
  color: #6fc1cf;
}

h1,
h2,
h3 {
  font-family: "Courier New", Courier, monospace;
}

@media (max-width: 437px) {
}
</style>
