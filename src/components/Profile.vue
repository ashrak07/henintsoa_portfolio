<template>
  <section id="about" class="bg-gray-900 text-white">
    <div class="pt-35 min-h-screen max-w-4xl mx-auto">
      <div class="flex flex-col lg:flex-row items-center gap-6">
        <!-- Photo -->
        <FadeInOnScroll animationClass="">
          <div
            class="flex-shrink-0 w-32 sm:w-68 h-32 sm:h-68 overflow-hidden relative group"
          >
            <img
              src="../assets/henintsoa.jpeg"
              alt="Votre nom"
              class="w-full h-full rounded-full object-cover border-4 border-green-500 relative"
              style="object-position: center top"
            />
          </div>
        </FadeInOnScroll>

        <!-- Description -->
        <div class="animate-fadeIn text-center px-6 sm:px-16 lg:text-left">
          <FadeInOnScroll animationClass="duration-1000 translate-y">
            <div class="text-3xl sm:text-5xl font-semibold mb-5">
              Henintsoa RAKOTONDRAIBE
            </div>
            <div class="text-xl sm:text-3xl font-semibold mb-5">
              Je suis <span ref="typedElement" class="text-green-400"></span>
            </div>
          </FadeInOnScroll>
          <FadeInOnScroll animationClass="duration-1000 translate-y">
            <div class="text-base sm:text-lg">
              Passionnée par la création de sites web modernes et performants,
              je mets mes compétences JavaScript, Vue.js et React.js au service
              de projets innovants.
            </div>
          </FadeInOnScroll>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted, ref } from "vue";
import Typed from "typed.js";
import FadeInOnScroll from "../components/FadeInOnScroll.vue";

const typedElement = ref(null);

onMounted(() => {
  new Typed(typedElement.value, {
    strings: ["Developpeur Frontend", "Developpeur Web"],
    typeSpeed: 40,
    backSpeed: 40,
    backDelay: 1000,
    loop: true,
  });
});
</script>

<style scoped>
/* Optionnel : style pour ta classe .clip-diamond si tu veux un effet particulier */
</style>
