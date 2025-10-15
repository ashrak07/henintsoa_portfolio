<template>
  <nav
    class="bg-gray-900 fixed top-0 left-0 w-full shadow-sm z-10 transition-transform duration-300"
  >
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between h-16">
        <!-- Logo -->
        <div class="flex items-center">
          <a
            href="#"
            class="font-1 font-semibold text-3xl bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent"
            >Henintsoa R.</a
          >
        </div>
        <!-- Menu pour les écrans moyens et plus -->
        <div class="font-1 hidden md:flex space-x-8 items-center">
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
      :class="[
        'font-1 text-md space-y-5 bg-black/30 backdrop-blur-md z-50 w-60 pt-20 px-8 md:hidden fixed top-0 left-0 min-h-screen flex flex-col transition-transform duration-500',
        isMenuOpen ? 'translate-x-0 opacity-100' : '-translate-x-60 opacity-0',
      ]"
      @click="closeMenu"
    >
      <NavLink href="#about" @navigate="closeMenu">A propos</NavLink>
      <NavLink href="#skill" @navigate="closeMenu">Compétences</NavLink>
      <NavLink href="#project" @navigate="closeMenu">Projets</NavLink>
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
