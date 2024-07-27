<script setup>
// defineProps({
//   msg: {
//     type: String,
//     required: true,
//   },
// });
</script>

<template>
  <article id="story">
    <h2>Présentation</h2>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, dicta
      quibusdam quos dolor hic reiciendis. Cupiditate inventore modi rem
      voluptatibus.
    </p>
  </article>
</template>

<style scoped>
article {
  color: white;
  background-color: #334447;

  font-size: 0.8rem;

  padding: 15px;
}

article p {
  padding-bottom: 15px;
}

h2 {
  color: white;
  padding: 10px 0;
}

@media (min-width: 426px) {
  article {
    padding: 0 25%;
  }
}
</style>
