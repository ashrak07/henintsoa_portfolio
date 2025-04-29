<template>
  <nav class="bg-gray-900 text-white fixed w-full z-10">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between h-16">
        <!-- Logo -->
        <div class="flex items-center">
          <a href="#" class="text-2xl font-bold text-white">Portfolio</a>
        </div>
        <!-- Menu pour les écrans moyens et plus -->
        <div class="hidden md:flex space-x-8 items-center">
          <NavLink href="#about">A propos</NavLink>
          <NavLink href="#skill">Compétences</NavLink>
          <NavLink href="#project">Projets</NavLink>
          <NavLink href="#contact">Contact</NavLink>
        </div>

        <!-- Bouton hamburger pour les petits écrans -->
        <div class="md:hidden flex items-center">
          <button
            @click="toggleMenu"
            class="text-white hover:text-gray-400 focus:outline-none focus:text-gray-400"
          >
            <svg
              class="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
    <!-- Menu déroulant pour les petits écrans -->
    <!-- Menu mobile -->
    <div
      :class="['md:hidden', isMenuOpen ? 'block' : 'hidden']"
      class="bg-gray-900 space-x-8 px-8 pt-4 pb-6"
    >
      <NavLink href="#about" @navigate="closeMenu">About Me</NavLink>
      <NavLink href="#skill" @navigate="closeMenu">Skills</NavLink>
      <NavLink href="#project" @navigate="closeMenu">Projects</NavLink>
      <NavLink href="#contact" @navigate="closeMenu">Contact</NavLink>
    </div>
  </nav>
</template>

<script setup>
import { ref } from "vue";
import NavLink from "./NavLink.vue";

const isMenuOpen = ref(false);

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

const closeMenu = () => {
  isMenuOpen.value = false;
};
</script>
