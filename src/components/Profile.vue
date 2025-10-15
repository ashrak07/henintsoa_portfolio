<template>
  <section
    id="about"
    class="relative bg-gradient-to-t from-gray-900 to-black md:pt-60 pt-25 pb-20 px-6 md:px-24 text-white"
  >
    <div
      class="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12"
    >
      <!-- PHOTO -->
      <FadeInOnScroll
        initialClass="opacity-0 translate-y-10"
        animationClass="opacity-100 duration-400 translate-y-0"
      >
        <div class="group relative w-48 h-48 sm:w-64 sm:h-64 flex-shrink-0">
          <div
            class="w-full h-full rounded-full overflow-hidden border-4 border-white relative transition-transform duration-500 group-hover:scale-105 shadow-xl"
          >
            <img
              src="../assets/henintsoa.jpeg"
              alt="Henintsoa"
              class="w-full h-full object-cover"
              style="object-position: center top"
            />
          </div>
          <!-- Glow hover effect -->
          <div
            class="absolute inset-0 rounded-full bg-blue-400 opacity-0 transition-opacity duration-500 group-hover:opacity-20"
          ></div>
        </div>
      </FadeInOnScroll>

      <!-- DESCRIPTION -->
      <div
        class="flex-1 flex flex-col justify-center space-y-6 text-center lg:text-left"
      >
        <!-- Nom et rôle -->
        <FadeInOnScroll
          initialClass="opacity-0 translate-y-10"
          animationClass="opacity-100 duration-400 translate-y-0"
        >
          <h1 class="text-3xl md:text-5xl font-bold font-2">
            Henintsoa <span class="text-blue-400">RAKOTONDRAIBE</span>
          </h1>
          <h2 class="text-lg md:text-3xl font-semibold mt-3">
            Je suis <span ref="typedElement" class="text-blue-400"></span>
          </h2>
        </FadeInOnScroll>

        <!-- Description -->
        <FadeInOnScroll
          initialClass="opacity-0 translate-y-10"
          animationClass="opacity-100 duration-400 translate-y-0"
        >
          <p class="text-gray-300 font-2 md:text-lg leading-relaxed">
            Passionnée par la création de sites web modernes et performants, je
            mets mes compétences en JavaScript, Vue.js et React.js au service de
            projets innovants.
          </p>
        </FadeInOnScroll>

        <!-- Social icons -->
        <FadeInOnScroll
          initialClass="opacity-0 translate-y-10"
          animationClass="opacity-100 duration-700 translate-y-0"
        >
          <div class="flex justify-center lg:justify-start gap-6 mt-4">
            <a
              href="https://github.com"
              target="_blank"
              class="hover:scale-110 transition-transform duration-300"
            >
              <img src="../assets/github.svg" alt="GitHub" class="h-6 w-6" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              class="hover:scale-110 transition-transform duration-300"
            >
              <img
                src="../assets/linkedin .svg"
                alt="LinkedIn"
                class="h-6 w-6"
              />
            </a>
          </div>
        </FadeInOnScroll>
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
    typeSpeed: 50,
    backSpeed: 40,
    backDelay: 1200,
    loop: true,
  });
});
</script>

<style scoped>
/* Optional: Custom fonts or shadow effects */
</style>
