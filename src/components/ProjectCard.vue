<template>
  <div
    class="bg-gray-900 rounded-lg shadow-2xl overflow-hidden hover:shadow-2xl transition-shadow duration-300 max-w-sm"
  >
    <!-- Image en haut -->
    <img :src="image" :alt="title" class="w-full h-48 object-cover" />

    <!-- Contenu en bas -->
    <div class="p-4">
      <!-- Titre -->
      <h2 class="text-xl font-semibold mb-2 text-white">{{ title }}</h2>

      <!-- Description -->
      <p
        class="font-2 text-white text-sm mb-4 text-justify h-34 overflow-hidden"
      >
        {{ description }}
      </p>

      <!-- Technologies -->
      <div class="flex flex-wrap gap-2 mb-4">
        <span
          v-for="t in tech"
          :key="t"
          class="bg-gray-100 text-gray-800 text-sm px-2 py-1 rounded-2xl"
        >
          {{ t }}
        </span>
      </div>

      <!-- Boutons GitHub & Website -->
      <div class="flex justify-between gap-3">
        <button
          @click="openGithub"
          type="button"
          class="flex items-center justify-center gap-2 flex-1 bg-gray-800 text-white py-2 rounded-lg hover:bg-gray-700 transition"
        >
          GitHub
          <img src="/src/assets/github.svg" alt="GitHub" class="h-5" />
        </button>

        <button
          @click="openWebsite"
          type="button"
          class="flex items-center justify-center gap-2 flex-1 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-500 transition"
        >
          Website
          <img src="/src/assets/link.png" alt="Website" class="h-5" />
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const props = defineProps({
  image: { type: String, required: true },
  title: { type: String, required: true },
  description: { type: String, required: true },
  tech: { type: String, default: "" }, // ex: "Vue, Tailwind, Firebase"
  link: { type: String, default: "" },
});

// Ouvrir GitHub dans un nouvel onglet
const openGithub = () => {
  if (props.link) {
    window.open(props.link, "_blank", "noopener,noreferrer");
  }
};

// Ouvrir Website dans un nouvel onglet
const openWebsite = () => {
  if (props.websiteLink) {
    window.open(props.websiteLink, "_blank", "noopener,noreferrer");
  }
};
</script>
