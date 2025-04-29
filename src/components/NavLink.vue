<template>
  <a
    :href="href"
    @click="$emit('navigate')"
    class="group relative text-white hover:text-blue-400 transition duration-300"
  >
    <span class="relative z-10"><slot /></span>
    <span
      class="absolute left-0 bottom-0 w-full h-0.5 bg-blue-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"
    ></span>
  </a>
</template>

<script setup>
defineProps({
  href: {
    type: String,
    required: true,
  },
});
</script>
