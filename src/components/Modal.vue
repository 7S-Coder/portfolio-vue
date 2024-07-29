<template>
  <div class="modal-overlay" @click="closeModal">
    <div class="modal-content" @click.stop>
      <button class="close-button" @click="closeModal">✖</button>
      <h2>{{ project.title }}</h2>
      <div class="spacing"></div>
      <ul>
        <li v-for="(skill, index) in project.skills" :key="index">
          {{ skill }}
        </li>
      </ul>
      <div v-if="project.github">
        <a :href="project.github.link" target="_blank">{{
          project.github.title
        }}</a>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps, defineEmits } from "vue";

const props = defineProps({
  project: {
    type: Object,
    required: true,
  },
});

const emit = defineEmits(["close"]);

const closeModal = () => {
  emit("close");
};
</script>

<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #000000ef;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
}

.modal-content {
  background-color: #ffffff;
  padding: 100px;
  border-radius: 10px;
  max-width: 500px;
  width: 100%;
  font-size: 1.5rem;
  color: #31787c;
  position: relative;
}

.close-button {
  position: absolute;
  top: 10px;
  right: 10px;
  background: transparent;
  border: none;
  font-size: 1.5em;
  cursor: pointer;
  color: #31787c;
  margin-right: 10px;
}

ul li {
  list-style-type: square;
  color: #666666;
}

h2,
.spacing {
  margin-bottom: 30px;
}

a {
  color: #666666;
}

.spacing {
  width: 98%;
  height: 1px;
  background-color: #31787c;
}

.close-button:hover {
  color: red;
}

a:hover {
  color: #31787c;
}
</style>
