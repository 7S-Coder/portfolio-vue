<template>
  <div class="project" @click="handleClick">
    <h3>{{ title }}</h3>
    <div class="spacing"></div>
    <ul>
      <li v-for="(skill, index) in skills" :key="index">{{ skill }}</li>
    </ul>
    <div v-if="github">
      <a :href="github.link" target="_blank">{{ github.title }}</a>
    </div>
  </div>
</template>

<script>
export default {
  name: "Project",
  props: {
    title: {
      type: String,
      required: true,
    },
    skills: {
      type: Array,
      required: true,
    },
    github: {
      type: Object,
      required: false,
    },
  },
  methods: {
    handleClick(event) {
      this.$emit("click", event);
    },
  },
};
</script>

<style scoped>
.project {
  background-color: #31787c;
  color: white;
  transition: box-shadow 0.3s ease-in-out, transform 0.3s ease-in-out,
    background-color 0.3s ease-in-out;
  position: relative;
  padding: 15px;
  border-radius: 10px;
  margin: 15px;
}

.project:hover {
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  background-color: #334447;
  z-index: 10;

  transform: scale(1.02);
}

h3 {
  margin: 10px 0;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  margin: 5px 0;
}

a {
  color: #fff;
  text-decoration: underline;
}

a:hover {
  color: #31787c;
}

.spacing {
  width: 98%;
  height: 1px;
  background-color: white;

  margin: 5px 0;
}
</style>
