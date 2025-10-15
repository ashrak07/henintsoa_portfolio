<template>
  <section class="py-10 bg-gray-50 dark:bg-gray-900">
    <div class="max-w-4xl mx-auto px-6">
      <FadeInOnScroll
        initialClass="opacity-0 translate-y-10"
        animationClass="opacity-100 duration-300 translate-y-0"
      >
        <h2
          class="text-3xl font-1 font-bold text-gray-800 dark:text-gray-100 mb-10 text-center"
        >
          Experiences et parcours
        </h2>
      </FadeInOnScroll>

      <div
        class="relative border-l-4 border-cyan-500 dark:border-cyan-400 pl-8"
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
              class="absolute -left-3 top-2 w-6 h-6 bg-blue-600 dark:bg-cyan-400 rounded-full border-4 border-white dark:border-gray-900"
            ></span>
            <div
              class="bg-white dark:bg-gray-800 shadow-md rounded-lg p-5 transition-all duration-300 hover:shadow-xl"
            >
              <h3
                class="text-xl font-semibold bg-gradient-to-r from-cyan-400 to-cyan-900 bg-clip-text text-transparent"
              >
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
  <section class="py-5 bg-gray-50 dark:bg-gray-900">
    <div class="max-w-4xl mx-auto px-6">
      <FadeInOnScroll
        initialClass="opacity-0 translate-y-10"
        animationClass="opacity-100 duration-300 translate-y-0"
      >
      </FadeInOnScroll>

      <div
        class="relative border-l-4 border-blue-600 dark:border-blue-400 pl-8"
      >
        <div
          v-for="(parc, index) in parcours"
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
              <h3
                class="text-xl font-semibold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent"
              >
                {{ parc.title }}
              </h3>
              <p class="text-xs font-1 text-gray-400 mb-2">
                {{ parc.company }} — {{ parc.period }}
              </p>
              <p class="font-2 text-gray-300 text-sm leading-relaxed">
                {{ parc.description }}
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
    title: "Développeur Full Stack",
    company: "GOING BEYOND",
    period: "Septembre - Octobre 2025",
    description: `
    Développement fullstack avec Vue 3 (frontend) et Laravel (backend).
    L’application permet de suivre les colis en temps réel, gérer les statuts de livraison
    et afficher les détails des envois.
    J’ai également travaillé sur l’optimisation des performances (chargement des pages,
    requêtes API, base de données) pour offrir une expérience fluide et réactive.
  `,
  },

  {
    title: "Développeur Front End Stagiaire",
    company: "NEXTHOPE GROUP",
    period: "Mai - Décembre 2024",
    description: `Développement front (Vue 3) pour la refonte de TicketPlace en architecture microservices. J’ai travaillé sur la refonte des interfaces utilisateurs, l’intégration aux nouvelles API microservices, la gestion des états et la sécurisation des échanges. J’ai aussi optimisé le rendu et réduit les temps de chargement pour une meilleure expérience utilisateur.`,
  },
];

const parcours = [
  {
    title: "Master Informatique et Télécommunication",
    company: "Institut Polytechnique de Madagascar",
    period: "2022 - 2023",
    description:
      "Informatique de Gestion, Génie Logiciel et Intelligence Artificielle.",
  },
  {
    title: "Licence Informatique et Télécommunication",
    company: "Institut Polytechnique de Madagascar",
    period: "2019 - 2021",
    description:
      "Informatique de Gestion, Génie Logiciel et Intelligence Artificielle.",
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
