<template>
  <!-- <section id="project" class="pt-15 min-h-screen bg-gray-900 text-white"> -->
  <section
    id="project"
    class="pt-15 min-h-screen bg-gradient-to-t from-gray-900 to-black text-white"
  >
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
          :image="project.images[1]"
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
          <div class="flex flex-col md:flex-row md:gap-8 gap-4 h-full mt-6">
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
            <div class="w-full md:w-1/2 flex-1 overflow-y-auto pr-2 pb-5">
              <h3 class="font-1 text-lg md:text-xl font-semibold mb-2">
                {{ selectedProject.title }}
              </h3>
              <button class="mb-5 bg-blue-600 p-2 rounded-md">
                Visiter le projet
              </button>
              <div class="flex gap-1">
                <div
                  class="flex bg-transparent font-2 text-white text-semibold rounded-xl border-white border-1 text-sm px-2 h-min"
                  v-for="(tech, i) in selectedProject.techno"
                  :key="i"
                >
                  {{ tech }}
                </div>
              </div>
              <p
                class="font-2 mt-5 text-sm md:text-base leading-relaxed text-gray-200"
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
import P1_08 from "../assets/images/project1/P1_08.png";
import P1_03 from "../assets/images/project1/P103.png";
import P1_04 from "../assets/images/project1/P104.png";
import P1_05 from "../assets/images/project1/P105.png";
import P1_06 from "../assets/images/project1/P106.png";
import P1_07 from "../assets/images/project1/P107.png";
import P1_02 from "../assets/images/project1/P102.png";
import P2_01 from "../assets/images/project2/P201.png";
import P2_02 from "../assets/images/project2/P202.png";
import P2_03 from "../assets/images/project2/P203.png";
import P3_01 from "../assets/images/project3/P301.png";
import P3_02 from "../assets/images/project3/P302.png";
import P3_03 from "../assets/images/project3/P303.png";
import P3_04 from "../assets/images/project3/P304.png";
import P3_05 from "../assets/images/project3/P305.png";
import P3_06 from "../assets/images/project3/P306.png";

const showModal = ref(false);
const selectedProject = ref({
  title: "",
  description: "",
  link: "",
  images: [],
  techno: [],
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
    images: [P1_08, P1_01, P1_02, P1_03, P1_04, P1_05, P1_06, P1_07],
    title: "Hotel-ko",
    description:
      "Une application Web de réservation d'hôtel qui permet aux utilisateurs de consulter les chambres disponibles, de vérifier leur disponibilités selon les dates choisies, puis de réserver en ligne. Un espace administrateur est également intégré, offrant un Dashboard complet pour gérer l'ensemble du système. L'administrateur peut visualiser les réservations, la liste des chambres et des utilisateurs, ainsi que créer, modifier, supprimer des chambres selon les besoins. ",
    link: "",
    techno: ["Mongo", "Vue.js", "Express", "Node.js"],
  },
  {
    images: [P2_02, P2_01, P2_03],
    title: "CINEMAX",
    description:
      "Une application de réservation de places de cinéma. L'utilisateur peut séléctionner une projection parmi les films proposés, choisir ses places sur un plan interactif, puis générer son ticket de manière automatique après confirmation. Côté administrateur, une interface dédiée permet de créer de nouvelles projections avec les détails du film, la date, l' heure et la salle.",
    link: "https://exemple.com/projet2",
    techno: ["Mongo", "Express", "React.js", "Node.js"],
  },
  {
    images: [P3_01, P3_02, P3_03, P3_04, P3_05, P3_06],
    title: "Auto-école SMART",
    description:
      "Application de gestion d'Auto-école permet de centraliser les activités des étudiants, des enseignants et du gérant. Les étudiants peuvent consulter leur emploi du temps et suivre les cours programmés. Les professeurs disposent d'un espace pour gérer leurs séances, les marquer comme efféctuées et visualiser leurs planning. Le gérant a accès à un tableau de bord pour suivre l'avancement des cours, coordonner les enseignants et gérer les disponibilités.",
    link: "https://exemple.com/projet3",
    techno: ["Mongo", "Express", "React.js", "Node.js"],
  },
];
</script>
