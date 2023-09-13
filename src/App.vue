<script setup lang="ts">
</script>

<template>
  <router-link to="/" class="space">Inicio</router-link>
  <router-link to="/counter">Contador</router-link>
  <router-view/>
</template>

<style scoped>
.space {
  margin: 0 10px;
}
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
