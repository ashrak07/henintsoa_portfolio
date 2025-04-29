<template>
  <section id="about" class="bg-gray-900 text-white">
    <div class="pt-30 min-h-screen max-w-4xl mx-auto">
      <div class="flex flex-col lg:flex-row items-center gap-6">
        <!-- Photo -->
        <FadeInOnScroll animationClass="rotate-6">
          <div
            class="b2 flex-shrink-0 w-65 h-90 overflow-hidden shadow-lg border-4 border-white"
          >
            <img
              src="../assets/henintsoa.jpeg"
              alt="Votre nom"
              class="w-full h-full object-cover clip-diamond"
            />
          </div>
        </FadeInOnScroll>
        <!-- Description -->
        <div class="animate-fadeIn text-center px-16 lg:text-left">
          <FadeInOnScroll>
            <h2 class="text-3xl font-semibold mb-4">Henintsoa RAKOTONDRAIBE</h2>
            <p class="text-lg">
              Passionné par la création de sites web modernes et performants, je
              mets mes compétences en HTML, CSS, JavaScript et Vue.js au service
              de projets innovants.
            </p>
          </FadeInOnScroll>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import FadeInOnScroll from "../components/FadeInOnScroll.vue";
</script>

<style scoped></style>
