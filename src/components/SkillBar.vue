<template>
  <div>
    <label class="block text-lg font-medium">{{ label }}</label>
    <div class="relative pt-1" ref="barRef">
      <div class="flex mb-2 items-center justify-between">
        <div>
          <span class="font-semibold text-sm">{{ animatedPercentage }}%</span>
        </div>
      </div>
      <FadeInOnScroll>
        <div class="flex mb-2 items-center justify-between">
          <div class="w-full bg-gray-700 rounded-full">
            <div
              class="bg-blue-500 text-xs leading-none py-1 text-center text-white rounded-full transition-all duration-500 ease-in-out"
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
});

const animatedPercentage = ref(0);
const barRef = ref(null);
let observer = null;

const animate = (target) => {
  let current = 0;
  const step = () => {
    if (current < target) {
      current += 1;
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
