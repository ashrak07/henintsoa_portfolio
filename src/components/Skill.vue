<template>
  <!-- <section id="skill" class="pt-20 bg-gray-900 text-white"> -->
  <section
    id="skill"
    class="md:pt-20 pt-20 bg-gradient-to-b from-gray-900 to-black text-white"
  >
    <div class="max-w-3xl mx-auto px-6 lg:px-8">
      <FadeInOnScroll
        initialClass="opacity-0 translate-y-10"
        animationClass="opacity-100 duration-300 translate-y-0"
      >
        <h2 class="font-1 text-3xl font-semibold text-center mb-12">
          Mes Compétences
        </h2>
      </FadeInOnScroll>
      <div class="grid grid-cols-2 gap-6 md:gap-8 md:grid-cols-2">
        <SkillBar :image="html" label="HTML" percentage="90" />
        <SkillBar label="CSS" :image="css" percentage="85" />
        <SkillBar label="JavaScript" :image="js" percentage="80" />
        <SkillBar label="Vue.js" :image="vue" percentage="80" />
        <SkillBar label="React.js" :image="react" percentage="75" />
        <SkillBar label="Node.js" :image="node" percentage="70" />
      </div>
    </div>
  </section>
</template>

<script setup>
import SkillBar from "../components/SkillBar.vue";
import { ref } from "vue";
import FadeInOnScroll from "./FadeInOnScroll.vue";
import html from "../assets/icon-html.svg";
import css from "../assets/icon-css.svg";
import js from "../assets/icon-js.svg";
import node from "../assets/icon-node.svg";
import react from "../assets/icon-react.svg";
import vue from "../assets/icon-vue.svg";

const skill = ref(null);
</script>
