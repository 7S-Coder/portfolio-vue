<script setup></script>

<template>
  <article id="story">
    <h2>Présentation</h2>
    <p>
      Je suis Dylan Eglantine, étudiant passionné de JavaScript et en formation
      dans le développement web depuis plus de cinq ans. Spécialisé en front-end
      avec HTML, CSS, et des frameworks comme React et Vue.js, j'ai également
      des compétences en back-end avec Node.js. Mon expérience inclut la
      création d'interfaces utilisateur interactives et d'applications web
      complexes. Toujours à l'affût des dernières tendances technologiques, je
      m'efforce de résoudre des problèmes avec efficacité et de développer des
      solutions innovantes. Je suis ouvert à de nouvelles opportunités pour
      contribuer à des projets passionnants.
    </p>
  </article>
</template>

<style scoped>
article {
  color: white;
  background-color: #334447;

  font-size: 1.1rem;

  padding: 27px 15px;
}

article p {
  padding-bottom: 15px;
  text-align: justify;
  initial-letter-align: alphabetic;
}

h2 {
  padding: 10px 0;
}

@media (min-width: 426px) {
  article {
    padding: 27px 30px;
  }
}
</style>
