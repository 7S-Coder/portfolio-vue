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

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
}
</style>
