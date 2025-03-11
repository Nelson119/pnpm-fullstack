<script setup lang="ts">
import HelloWorld from "./components/HelloWorld.vue";
</script>

<template>
  <div>
    <a href="https://vite.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
  </div>
  <HelloWorld msg="Vite + Vue" />

  <div
    class="flex flex-col items-center justify-center min-h-screen bg-base-200"
  >
    <h1 class="text-4xl font-bold text-primary">
      Hello Vue 3 + DaisyUI + UnoCSS
    </h1>
    <button class="btn my-4">DaisyUI 按鈕</button>
    <button class="i-heroicons-fire-20-solid text-red-500 text-4xl"></button>
    <button btn>xxx</button>
  </div>
</template>

<style scoped>
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
