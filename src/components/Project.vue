<template>
  <section id="project" class="pt-30 min-h-screen bg-gray-900 text-white">
    <div class="max-w-7xl mx-auto px-6 lg:px-8">
      <h2 class="text-3xl font-semibold text-center mb-12">Mes Projets</h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        <ProjectCard
          v-for="(project, index) in projects"
          :key="index"
          :image="project.image"
          :title="project.title"
          :description="project.description"
          :link="project.link"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
import ProjectCard from "./ProjectCard.vue";
import { ref } from "vue";

const project = ref(null);
const projects = [
  {
    image: "@/assets/project1.jpg", // Remplacez par le chemin de votre image
    title: "Projet 1",
    description: "Description du projet 1.",
    link: "https://exemple.com/projet1",
  },
  {
    image: "@/assets/project2.jpg", // Remplacez par le chemin de votre image
    title: "Projet 2",
    description: "Description du projet 2.",
    link: "https://exemple.com/projet2",
  },
  {
    image: "@/assets/project3.jpg", // Remplacez par le chemin de votre image
    title: "Projet 3",
    description: "Description du projet 3.",
    link: "https://exemple.com/projet3",
  },
  // Ajoutez d'autres projets ici
];
</script>
