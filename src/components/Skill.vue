<template>
  <section id="skill" class="py-30 bg-gray-900 text-white">
    <div class="max-w-3xl mx-auto px-6 lg:px-8">
      <FadeInOnScroll
        animationClass="transition-y-10 sm:pb-5 duration-800 ease-in-out"
      >
        <h2 class="text-3xl font-semibold text-center pb-5">Mes Compétences</h2>
      </FadeInOnScroll>
      <div class="grid grid-cols-1 md:grid-cols-2 sm:gap-8">
        <SkillBar class="" label="HTML" percentage="90" />
        <SkillBar label="CSS" percentage="85" />
        <SkillBar label="JavaScript" percentage="80" />
        <SkillBar label="Vue.js" percentage="80" />
        <SkillBar label="React.js" percentage="75" />
        <SkillBar label="Node.js" percentage="70" />
      </div>
    </div>
  </section>
</template>

<script setup>
import SkillBar from "../components/SkillBar.vue";
import { ref } from "vue";
import FadeInOnScroll from "./FadeInOnScroll.vue";

const skill = ref(null);
</script>
