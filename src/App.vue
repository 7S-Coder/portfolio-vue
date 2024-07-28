<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script setup></script>

<style>
* {
  margin: 0;
  padding: 0;
  transition: ease-in 0.1s;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
}

h1 {
  color: #6fc1cf;
}

h1,
h2,
h3 {
  font-family: "Courier New", Courier, monospace;
}

header {
  padding-top: 25px;
}
</style>
