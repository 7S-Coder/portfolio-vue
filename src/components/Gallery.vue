<script>
import Project from "./Project.vue";

export default {
  name: "App",
  components: {
    Project,
  },
  data() {
    return {
      projects: [
        {
          title: "Intégration web avec HTML - CSS",
          skills: [
            "Intégrer du contenu conformément à une maquette avec HTML et CSS",
            "Implémenter une interface responsive avec HTML et CSS",
          ],
          github: {
            title: "Interface du site Booki",
            link: "https://github.com/7S-Coder/Booki.git",
          },
        },
        {
          title: "Gestion de projet et outils de développeurs",
          skills: [
            "Suivre le déroulement du projet grâce à un outil de gestion de projet",
            "Rédiger les spécifications techniques d'un projet web à partir de besoins fonctionnels",
            "Découper une fonctionnalités en tâches pour préparer le développement",
            "Présenter la solution technique",
            "Mettre en place une méthode de veille technologique",
            "Versionner son projet avec Git et Github",
            "Installer un environnement de développement front- end",
          ],
        },
        {
          title: "Optimisation et debug",
          skills: [
            "Optimiser les performances d’un site web",
            "Débugger un site web grâce aux Chrome DevTools",
            "Rédiger un cahier de recette pour tester un site",
          ],
          github: {
            title: "Portfolio de Nina Carducci",
            link: "https://github.com/7S-Coder/Portfolio-Nina-Carducci.git",
          },
        },
        {
          title: "Développement web avec JavaScript",
          skills: [
            "Récupérer les données utilisateurs dans le JavaScript via des formulaires",
            "Manipuler les éléments du DOM avec JavaScript",
            "Gérer les événements utilisateurs avec JavaScript",
          ],
        },
        {
          title: "React",
          skills: [
            "Configurer la navigation entre les pages de l'application avec React Router",
            "Initialiser une application avec Create React App",
            "Développer des éléments de l'interface d'un site web grâce à des composants React",
          ],
        },
        {
          title: "Développement back- end avec NodeJS",
          skills: [
            "Implémenter un modèle logique de données conformément à la réglementation",
            "Mettre en oeuvre des opérations CRUD de manière sécurisée",
            "Stocker des données de manière sécurisée",
            "Déploiement d'un site web",
          ],
        },
      ],
    };
  },
};
</script>

<template>
  <section id="gallery">
    <Project
      v-for="(project, index) in projects"
      :key="index"
      :title="project.title"
      :skills="project.skills"
      :github="project.github"
    />
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
  /* transition: ease-in 0.1s; */
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
    width: 35%;
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
    width: 25%;
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
