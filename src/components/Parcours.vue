<template>
  <section class="py-12 bg-gray-50 dark:bg-gray-900">
    <div class="max-w-4xl mx-auto px-6">
      <FadeInOnScroll
        initialClass="opacity-0 translate-y-10"
        animationClass="opacity-100 duration-300 translate-y-0"
      >
        <h2
          class="text-3xl font-bold text-gray-800 dark:text-gray-100 mb-10 text-center"
        >
          Mon Parcours
        </h2>
      </FadeInOnScroll>

      <div
        class="relative border-l-4 border-blue-600 dark:border-blue-400 pl-8"
      >
        <div
          v-for="(exp, index) in experiences"
          :key="index"
          class="mb-10 relative"
        >
          <!-- Point de la timeline -->

          <FadeInOnScroll
            initialClass="opacity-0 -translate-x-20"
            animationClass="opacity-100 duration-300 translate-x-0"
          >
            <span
              class="absolute -left-3 top-2 w-6 h-6 bg-blue-600 dark:bg-blue-400 rounded-full border-4 border-white dark:border-gray-900"
            ></span>
            <div
              class="bg-white dark:bg-gray-800 shadow-md rounded-lg p-5 transition-all duration-300 hover:shadow-xl"
            >
              <h3 class="text-xl font-semibold text-gray-800 dark:text-white">
                {{ exp.title }}
              </h3>
              <p class="text-xs font-1 text-gray-400 mb-2">
                {{ exp.company }} — {{ exp.period }}
              </p>
              <p class="font-2 text-gray-300 text-sm leading-relaxed">
                {{ exp.description }}
              </p>
            </div>
          </FadeInOnScroll>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import FadeInOnScroll from "./FadeInOnScroll.vue";

const experiences = [
  {
    title: "Développeur Frontend Vue.js",
    company: "TechCorp",
    period: "2023 - Présent",
    description:
      "Développement d’interfaces modernes et performantes avec Vue 3, Tailwind CSS et Vite.",
  },
  {
    title: "Stage Développement Web",
    company: "Agence Digitale XYZ",
    period: "2022 - 2023",
    description:
      "Participation à la création de sites vitrines et d’applications internes.",
  },
  {
    title: "Licence Informatique",
    company: "Université d’Antananarivo",
    period: "2019 - 2022",
    description:
      "Formation en programmation, algorithmes et développement d’applications web.",
  },
];
</script>

<style scoped>
/* Pour la ligne verticale (mobile-friendly) */
@media (max-width: 640px) {
  .relative.border-l-4 {
    border-left-width: 2px;
    padding-left: 1.5rem;
  }
}
</style>
