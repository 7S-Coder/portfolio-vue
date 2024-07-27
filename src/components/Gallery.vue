<script setup>
// defineProps({
//   msg: {
//     type: String,
//     required: true,
//   },
// });
</script>

<template>
  <section id="gallery">
    <div class="project">
      <img src="../assets/sept.png" alt="test" />
      <h3>Test</h3>
    </div>
    <div class="project">
      <img src="../assets/sept.png" alt="test" />
      <h3>Test</h3>
    </div>
    <div class="project">
      <img src="../assets/sept.png" alt="test" />
      <h3>Test</h3>
    </div>

    <div class="project">
      <img src="../assets/sept.png" alt="test" />
      <h3>Test</h3>
    </div>
    <div class="project">
      <img src="../assets/sept.png" alt="test" />
      <h3>Test</h3>
    </div>
    <div class="project">
      <img src="../assets/sept.png" alt="test" />
      <h3>Test</h3>
    </div>

    <div class="project">
      <img src="../assets/sept.png" alt="test" />
      <h3>Test</h3>
    </div>
    <div class="project">
      <img src="../assets/sept.png" alt="test" />
      <h3>Test</h3>
    </div>
    <div class="project">
      <img src="../assets/sept.png" alt="test" />
      <h3>Test</h3>
    </div>
  </section>
</template>

<style scoped>
section {
  margin: 15px;
  flex-grow: 3;
}

section .project {
  background-color: #6fc1cf;
  color: white;
  transition: ease-in 0.1s;
  border-radius: 10px;
}

section .project:hover {
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  background-color: #334447;
  transform: scale(1.02);
  z-index: 10;
}

h3 {
  margin: 10px;
}

img {
  width: 100%;
  height: 100px;
  object-fit: fill;
  border-radius: 10px 10px 0 0;
}

@media (max-width: 425px) {
  section {
    justify-content: center;
  }
  section .project {
    width: 100%;
  }
}

@media (min-width: 426px) {
  section {
    display: flex;
    flex-wrap: wrap;
    /* justify-content: center; */
    justify-content: space-between;
    padding: 0 25%;
  }
  section .project {
    width: 42%;
    max-width: 350px;
    display: flex;
    flex-direction: column;
    margin-bottom: 30px;
  }
}

@media (min-width: 1024px) {
  section {
    display: flex;
    flex-wrap: wrap;
  }
  section .project {
    width: 35%;
    display: flex;
  }
}

@media (min-width: 1440px) {
  section .project {
    width: 45%;
    display: flex;
  }
}
</style>
