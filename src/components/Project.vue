<template>
  <section id="project" class="pt-15 min-h-screen bg-gray-900 text-white">
    <div class="max-w-7xl mx-auto p-6 lg:px-8">
      <FadeInOnScroll
        animationClass="transition-y-10 sm:pb-5 duration-800 ease-in-out"
      >
        <h2 class="font-1 text-2xl font-semibold text-center mb-7">
          Mes Projets
        </h2>
      </FadeInOnScroll>

      <div
        class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 md:mt-20 gap-8"
      >
        <ProjectCard
          v-for="(project, index) in projects"
          :key="index"
          :image="project.images[0]"
          :title="project.title"
          :description="project.description"
          :link="project.link"
          :tech="project.techno"
          @click="openModal(project)"
        />
      </div>

      <!-- Modal -->
      <div
        v-if="showModal"
        class="fixed inset-0 flex items-center justify-center z-50 bg-black/30 backdrop-blur-sm"
      >
        <!-- Overlay -->
        <div
          class="relative bg-black bg-opacity-80 text-white p-3 rounded-lg w-[90vw] max-w-5xl h-[90vh] overflow-hidden flex flex-col"
        >
          <button
            @click="closeModal"
            class="absolute z-50 top-0 right-0 text-white text-5xl"
          >
            <font-awesome-icon :icon="['fas', 'times']" class="text-3xl" />
          </button>

          <!-- <div class="flex gap-8 h-full"> -->
          <!-- Colonne gauche -->
          <!-- <div class="w-1/2 relative flex flex-col justify-between"> -->

          <!-- Contenu image + texte -->
          <div class="flex flex-col md:flex-row gap-4 h-full mt-6">
            <div
              class="w-full md:w-1/2 h-60 md:h-full flex justify-center items-center relative"
            >
              <transition name="fade" mode="out-in">
                <img
                  :key="currentImageIndex"
                  :src="selectedProject.images[currentImageIndex]"
                  alt="Image du projet"
                  class="max-h-full max-w-full object-contain rounded"
                />
              </transition>
              <!-- Bouton précédent -->
              <button
                @click="prevImage"
                class="absolute left-2 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/50 text-blue-400 font-bold px-3 py-2 rounded-full z-10"
              >
                <font-awesome-icon
                  :icon="['fas', 'chevron-left']"
                  class="w-5 h-5"
                />
              </button>
              <!-- Bouton suivant -->
              <button
                @click="nextImage"
                class="absolute right-2 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/50 text-blue-400 font-bold px-3 py-2 rounded-full z-10"
              >
                <font-awesome-icon
                  :icon="['fas', 'chevron-right']"
                  class="w-5 h-5"
                />
              </button>
            </div>
            <div class="w-full md:w-1/2 flex-1 overflow-y-auto pr-2">
              <h3 class="font-1 text-lg md:text-xl font-semibold mb-2">
                {{ selectedProject.title }}
              </h3>
              <p
                class="font-2 text-sm md:text-base leading-relaxed text-gray-200"
              >
                {{ selectedProject.description }}
              </p>
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
import FadeInOnScroll from "./FadeInOnScroll.vue";
import ProjectCard from "./ProjectCard.vue";
import { ref } from "vue";
import P1_01 from "../assets/images/project1/P101.png";
import P1_02 from "../assets/images/project1/P102.png";
import P1_03 from "../assets/images/project1/P103.png";
import P1_04 from "../assets/images/project1/P104.png";
import P1_05 from "../assets/images/project1/P105.png";
import P1_06 from "../assets/images/project1/P106.png";
import P1_07 from "../assets/images/project1/P107.png";
// import P1_08 from "../assets/images/project1/P108.png";
// import P1_09 from "../assets/images/project1/P109.png";

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
    images: [P1_01, P1_02, P1_03, P1_04, P1_05, P1_06, P1_07],
    title: "Hotel-ko",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit,Lorem ipsum dolor sit amet consectetur adipisicing elit,Lorem ipsum dolor sit amet consectetur adipisicing elit,Lorem ipsum dolor sit amet consectetur adipisicing elit,Lorem ipsum dolor sit amet consectetur adipisicing elit,Lorem ipsum dolor sit amet consectetur adipisicing elit,Lorem ipsum dolor sit amet consectetur adipisicing elit,Lorem ipsum dolor sit amet consectetur adipisicing elit,Lorem ipsum dolor sit amet consectetur adipisicing elit,Lorem ipsum dolor sit amet consectetur adipisicing elit, Lorem ipsum dolor sit amet consectetur adipisicing elit, Lorem ipsum dolor sit amet consectetur adipisicing elit, Lorem ipsum dolor sit amet consectetur adipisicing elit, Lorem ipsum dolor sit amet consectetur adipisicing elit, Lorem ipsum dolor sit amet consectetur adipisicing elit, Lorem ipsum dolor sit amet consectetur adipisicing elit",
    link: "",
    techno: ["Mongo", "Vue", "Express", "Node"],
  },
  {
    images: [P1_01, P1_02, P1_03, P1_04, P1_05, P1_06],
    title: "CINEMAX",
    description: "Description du projet 2.",
    link: "https://exemple.com/projet2",
    techno: ["React", "Vue", "Node", "Mongo"],
  },
  {
    images: [P1_01, P1_02, P1_03, P1_04, P1_05, P1_06],
    title: "Auto-ecole SMART",
    description: "Description du projet 3.",
    link: "https://exemple.com/projet3",
    techno: ["React", "Vue", "Node", "Mongo"],
  },
];
</script>
