<template>
  <section id="project" class="pt-30 min-h-screen bg-gray-900 text-white">
    <div class="max-w-7xl mx-auto px-6 lg:px-8">
      <h2 class="font-1 text-3xl font-semibold text-center mb-12">
        Mes Projets
      </h2>

      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        <ProjectCard
          v-for="(project, index) in projects"
          :key="index"
          :image="project.images[0]"
          :title="project.title"
          :description="project.description"
          :link="project.link"
          @click="openModal(project)"
        />
      </div>

      <!-- Modal -->
      <div
        v-if="showModal"
        class="fixed inset-0 flex items-center justify-center z-50 bg-black/30 backdrop-blur-sm"
      >
        <div
          class="relative bg-black bg-opacity-80 text-white p-6 rounded-lg w-[75vw] h-[75vh] flex flex-col"
        >
          <button
            @click="closeModal"
            class="absolute top-2 right-3 text-white text-5xl"
          >
            &times;
          </button>

          <div class="flex gap-8 h-full">
            <!-- Colonne gauche -->
            <div class="w-1/2 relative flex flex-col justify-between">
              <!-- Carrousel image -->
              <div class="relative h-[60%]">
                <transition name="fade" mode="out-in">
                  <img
                    :key="currentImageIndex"
                    :src="selectedProject.images[currentImageIndex]"
                    alt="Image du projet"
                    class="w-full h-full object-cover rounded transition-all duration-500"
                  />
                </transition>
                <!-- Bouton précédent -->
                <button
                  @click="prevImage"
                  class="absolute left-2 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/50 text-white font-bold px-2 py-1 rounded-full"
                >
                  ‹
                </button>
                <!-- Bouton suivant -->
                <button
                  @click="nextImage"
                  class="absolute right-2 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/50 text-white font-bold px-2 py-1 rounded-full"
                >
                  ›
                </button>
              </div>

              <!-- Infos -->
            </div>

            <!-- Colonne droite -->
            <div class="w-1/2 overflow-y-auto">
              <div>
                <div class="mt-4">
                  <h3 class="text-xl font-semibold mb-2">
                    {{ selectedProject.title }}
                  </h3>
                  <p class="mb-4">{{ selectedProject.description }}</p>
                  <a
                    :href="selectedProject.link"
                    target="_blank"
                    class="inline-block bg-yellow-500 text-black px-4 py-2 rounded hover:bg-yellow-600 transition-colors"
                  >
                    Visiter le projet
                  </a>
                </div>
              </div>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Reprehenderit aperiam harum recusandae consequatur, nisi corporis
              similique voluptates! Porro excepturi est ad et possimus eos
              vero...
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
.fade-enter-to,
.fade-leave-from {
  opacity: 1;
}
</style>

<script setup>
import ProjectCard from "./ProjectCard.vue";
import { ref } from "vue";
import project1 from "../assets/pic1.jpg";
import project2 from "../assets/pic2.jpg";
import project3 from "../assets/pic3.jpg";

const showModal = ref(false);
const selectedProject = ref({
  title: "",
  description: "",
  link: "",
  images: [],
});

const currentImageIndex = ref(0);

const nextImage = () => {
  currentImageIndex.value =
    (currentImageIndex.value + 1) % selectedProject.value.images.length;
};

const prevImage = () => {
  currentImageIndex.value =
    (currentImageIndex.value - 1 + selectedProject.value.images.length) %
    selectedProject.value.images.length;
};

const openModal = (project) => {
  selectedProject.value = project;
  currentImageIndex.value = 0;
  showModal.value = true;
};

const closeModal = () => {
  showModal.value = false;
};

const projects = [
  {
    images: [project1, project2, project3],
    title: "Hotel-ko",
    description: "Description du projet 1.",
    link: "https://exemple.com/projet1",
  },
  {
    images: [project3, project1, project2],
    title: "CINEMAX",
    description: "Description du projet 2.",
    link: "https://exemple.com/projet2",
  },
  {
    images: [project2, project3, project1],
    title: "Auto-ecole SMART",
    description: "Description du projet 3.",
    link: "https://exemple.com/projet3",
  },
];
</script>
