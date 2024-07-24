<script setup>
// defineProps({
//   msg: {
//     type: String,
//     required: true,
//   },
// });
</script>

<template>
  <form action="POST" name="contact">
    <div>
      <label for="name">Nom :</label>
      <input id="name" name="name" type="text" />

      <label for="first-name">Prénom :</label>
      <input id="first-name" name="first-name" type="text" />
    </div>

    <label for="content">Contenu du message :</label>

    <textarea id="content" name="content"></textarea>
  </form>
</template>

<style scoped></style>
