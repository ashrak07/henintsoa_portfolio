<template>
  <div class="flex md:px-12 flex-col text-center">
    <img :src="image" class="animate-pulse h-18" alt="" />
    <label class="block font-1 text-lg font-medium">{{ label }}</label>
    <div class="justify-center relative" ref="barRef">
      <div class="mb-2 items-center">
        <span class="font-1 font-semibold text-sm"
          >{{ animatedPercentage }}%</span
        >
      </div>
    </div>
    <div>
      <FadeInOnScroll>
        <div class="flex mb-2 items-center justify-between">
          <div class="w-full bg-gray-700 rounded-full">
            <div
              class="bg-gradient-to-r from-blue-400 to-cyan-800 text-xs leading-none py-1 text-center text-white rounded-full transition-all duration-500 ease-in-out"
              :style="{ width: `${animatedPercentage}%` }"
            >
              <span class="sr-only">{{ animatedPercentage }}%</span>
            </div>
          </div>
        </div>
      </FadeInOnScroll>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";
import FadeInOnScroll from "./FadeInOnScroll.vue";

const props = defineProps({
  label: {
    type: String,
    required: true,
  },
  percentage: {
    type: Number,
    required: true,
  },
  image: {
    type: String,
  },
});

const animatedPercentage = ref(0);
const barRef = ref(null);
let observer = null;

const animate = (target) => {
  let current = 0;
  const step = () => {
    if (current < target) {
      current += 5;
      animatedPercentage.value = current;
      requestAnimationFrame(step);
    } else {
      animatedPercentage.value = target;
    }
  };
  step();
};

const setupObserver = () => {
  if (!barRef.value) return;

  observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        animate(props.percentage);
      } else {
        // Réinitialiser à 0 quand on quitte la vue
        animatedPercentage.value = 0;
      }
    },
    { threshold: 0.5 }
  );

  observer.observe(barRef.value);
};

onMounted(() => {
  setupObserver();
});

onBeforeUnmount(() => {
  if (observer) {
    observer.disconnect();
    observer = null;
  }
});
</script>
