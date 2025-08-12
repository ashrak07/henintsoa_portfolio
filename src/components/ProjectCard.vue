<template>
  <!-- <div  class="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300"> -->
  <div
    class="relative group cursor-pointer rounded-lg overflow-hidden shadow-lg"
  >
    <img :src="image" alt="Project Image" class="w-full h-48 object-cover" />

    <div
      class="md:absolute justify-center inset-0 bg-black opacity-0 flex group-hover:opacity-80 transition-opacity duration-300"
    >
      <div class="font-1 text-lg md:absolute hidden md:block top-10">
        {{ title }}
      </div>

      <div class="absolute bottom-5 flex justify-center w-full gap-2">
        <div
          v-for="t in tech"
          class="bg-transparent font-2 text-white text-semibold rounded-xl border-white border-1 text-sm px-2 h-min"
        >
          {{ t }}
        </div>
      </div>
    </div>

    <!-- small screen -->
    <div
      class="md:hidden absolute inset-0 bg-transparent transition-opacity duration-300"
    >
      <div class="absolute bottom-5 flex justify-center w-full gap-2">
        <!-- <div
          v-for="t in tech"
          class="bg-transparent font-2 rounded-xl border-white border-1 text-sm bg-auto px-2 h-min"
        > -->
        <div
          v-for="t in tech"
          class="bg-gradient-to-r from-blue-400 to-blue-600 font-2 text-white text-semibold rounded-xl text-sm bg-auto px-2 h-min"
        >
          {{ t }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  image: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  link: {
    type: String,
    required: true,
  },
  tech: {
    type: String,
  },
});
</script>
