<template>
  <section id="gallery">
    <Project
      v-for="(project, index) in projects"
      :key="index"
      :title="project.title"
      :skills="[project.skills[0]]"
      :github="project.github"
      @click="openModal(project)"
    />
    <Modal
      v-if="isModalVisible"
      :project="selectedProject"
      @close="closeModal"
    />
  </section>
</template>

<script setup>
import { ref } from "vue";
import Project from "./Project.vue";
import Modal from "./Modal.vue";

// Data
const projects = ref([
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
      "Découper une fonctionnalité en tâches pour préparer le développement",
      "Présenter la solution technique",
      "Mettre en place une méthode de veille technologique",
      "Versionner son projet avec Git et Github",
      "Installer un environnement de développement front-end",
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
    title: "Développement back-end avec NodeJS",
    skills: [
      "Implémenter un modèle logique de données conformément à la réglementation",
      "Mettre en œuvre des opérations CRUD de manière sécurisée",
      "Stocker des données de manière sécurisée",
      "Déploiement d'un site web",
    ],
  },
]);

// Modal visibility state
const isModalVisible = ref(false);
const selectedProject = ref(null);

// Methods
const openModal = (project) => {
  selectedProject.value = project;
  isModalVisible.value = true;
  document.body.style.overflow = "hidden"; // Disable scrolling when modal is open
};

const closeModal = () => {
  isModalVisible.value = false;
  document.body.style.overflow = ""; // Re-enable scrolling when modal is closed
};
</script>

<style scoped>
section {
  margin: 15px;
  flex-grow: 3;
}

h3 {
  margin: 10px;
}

@media (max-width: 425px) {
  section {
    justify-content: center;
    padding: 27px 0;
  }
  section .project {
    width: 80%;
  }
}
</style>
