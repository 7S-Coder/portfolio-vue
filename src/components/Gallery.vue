<script setup>
// defineProps({
//   msg: {
//     type: String,
//     required: true,
//   },
// });
</script>

<template>
  <section>
    <div class="project">
      <img src="../assets/sept.png" alt="test" />
      <h3>Test</h3>
    </div>
  </section>
</template>

<style scoped>
section {
  margin: 15px;
}

img {
  width: 100%;
  height: 100px;
  object-fit: fit-cover;
}

@media (max-width: 437px) {
  section .project {
    width: 100%;
    border: 1px solid black;
  }
}
</style>
