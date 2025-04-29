<template>
  <section id="skill" class="py-30 bg-gray-900 text-white py-16">
    <div class="max-w-3xl mx-auto px-6 lg:px-8">
      <h2 class="text-3xl font-semibold text-center mb-12">Mes Compétences</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <SkillBar label="HTML" percentage="90" />
        <SkillBar label="CSS" percentage="85" />
        <SkillBar label="JavaScript" percentage="80" />
        <SkillBar label="Vue.js" percentage="75" />
        <SkillBar label="Node.js" percentage="70" />
      </div>
    </div>
  </section>
</template>

<script setup>
import SkillBar from "../components/SkillBar.vue";
import { ref } from "vue";

const skill = ref(null);
</script>
