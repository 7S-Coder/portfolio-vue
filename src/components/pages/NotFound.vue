<template>
  <div class="not-found">
    <h1>404 - Page Not Found</h1>
    <p>La page que tu cherches n'existe pas on dirait.</p>
    <router-link to="/">Retour à l'accueuil</router-link>
  </div>
</template>

<script>
export default {
  name: "NotFound",
};
</script>

<style scoped>
.not-found {
  text-align: center;
  margin-top: 50px;
}

.not-found h1 {
  font-size: 3em;
  margin-bottom: 20px;
}

.not-found p {
  font-size: 1.5em;
}

.not-found a {
  color: #666666;
  text-decoration: none;
}
</style>
