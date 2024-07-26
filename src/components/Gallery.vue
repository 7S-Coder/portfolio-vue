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
}

h3 {
  margin: 10px;
}

section .project,
img {
  border-radius: 10px;
}

img {
  width: 100%;
  height: 100px;
  object-fit: fill;
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
    justify-content: center;
  }
  section .project {
    width: 42%;
    max-width: 350px;
    display: flex;
    flex-direction: column;

    margin: 15px;
  }
}

@media (min-width: 1024px) {
  section {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    padding-left: 15%;
    padding-right: 15%;
  }
  section .project {
    width: 35%;
    display: flex;
    margin: 10px;
    margin-bottom: 15px;
  }
}
</style>
