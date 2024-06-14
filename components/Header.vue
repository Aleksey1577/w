<template>
  <header class="bg-black text-white">
    <div class="container mx-auto flex justify-between items-center py-4 px-6">

      <!-- Навигация для десктопа -->
      <nav class="hidden md:flex items-center space-x-6">
        <NuxtLink to="/">
          <img src="/assets/images/logo.svg" alt="Logo" class="h-8" />
        </NuxtLink>
        <NuxtLink to="/tariffs" class="hover:text-gray-400">Тарифы</NuxtLink>
        <NuxtLink to="/contacts" class="hover:text-gray-400">Контакты</NuxtLink>
      </nav>

      <!-- Контакты и кнопки для десктопа -->
      <div class="hidden md:flex items-center space-x-4">
        <span>+7 495 118-44-22</span>
        <NuxtLink to="/login" class="hover:text-gray-400">Вход</NuxtLink>
        <button
          class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Регистрация
        </button>
      </div>

      <!-- Кнопка меню для мобильных устройств -->
      <button @click="toggleMenu" class="block md:hidden">
        <svg
          class="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16M4 18h16"
          ></path>
        </svg>
      </button>
    </div>

    <!-- Мобильное меню -->
    <div v-if="menuOpen" class="md:hidden">
      <nav class="flex flex-col space-y-4 p-4">
        <NuxtLink to="/" class="hover:text-gray-400">Главная</NuxtLink>
        <NuxtLink to="/tariffs" class="hover:text-gray-400">Тарифы</NuxtLink>
        <NuxtLink to="/contacts" class="hover:text-gray-400">Контакты</NuxtLink>
        <NuxtLink to="/login" class="hover:text-gray-400">Вход</NuxtLink>
        <button
          class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Регистрация
        </button>
      </nav>
    </div>
  </header>
</template>

<script setup>
import { ref } from "vue";

const menuOpen = ref(false);

function toggleMenu() {
  menuOpen.value = !menuOpen.value;
}
</script>

<style scoped>
.container {
  max-width: 1200px;
}
</style>
