<template>
  <!-- <section id="about" class="md:px-30 md:py-40 pt-20 bg-gray-900 text-white"> -->
  <section
    id="about"
    class="md:px-30 md:py-40 pt-20 bg-gradient-to-t from-gray-900 to-black p-6 text-white"
  >
    <div class="">
      <div class="flex flex-col lg:flex-row items-center gap-6">
        <!-- Photo -->
        <FadeInOnScroll animationClass="">
          <div
            class="flex-shrink-0 w-50 h-50 sm:w-68 sm:h-68 overflow-hidden relative group"
          >
            <img
              src="../assets/henintsoa.jpeg"
              alt="Votre nom"
              class="w-full h-full rounded-full object-cover border-4 border-white relative"
              style="object-position: center top"
            />
          </div>
        </FadeInOnScroll>

        <!-- Description -->
        <div class="animate-fadeIn text-center px-6 sm:px-16 lg:text-left">
          <FadeInOnScroll animationClass="duration-1000 translate-y">
            <div class="font-1 text-2xl font-semibold md:text-5xl">
              Henintsoa <br />
              RAKOTONDRAIBE
            </div>
            <div class="my-4 text-lg font-semibold md:my-6 md:text-3xl">
              Je suis <span ref="typedElement" class="text-blue-400"></span>
            </div>
          </FadeInOnScroll>
          <FadeInOnScroll animationClass="duration-1000 translate-y">
            <div class="font-2 text-sm">
              Passionnée par la création de sites web modernes et performants,
              je mets mes compétences JavaScript, Vue.js et React.js au service
              de projets innovants.
            </div>
          </FadeInOnScroll>
          <div
            class="pt-5"
            style="display: flex; gap: 10px; justify-content: end"
          >
            <img src="/src/assets/github.svg" alt="" style="height: 20px" />
            <img src="/src/assets/linkedin .svg" alt="" style="height: 20px" />
          </div>
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
