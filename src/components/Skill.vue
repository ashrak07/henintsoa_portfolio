<template>
  <section id="skill" class="pt-20 bg-gray-900 text-white">
    <div class="max-w-3xl mx-auto px-6 lg:px-8">
      <FadeInOnScroll
        animationClass="transition-y-10 sm:pb-5 duration-800 ease-in-out"
      >
        <h2 class="font-1 text-2xl font-semibold text-center mb-7">
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
