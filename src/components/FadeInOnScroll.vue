<template>
  <div
    ref="fadeElement"
    :class="[
      'transition-all duration-500 ease-out',
      isVisible ? animationClass : 'opacity-0 translate-y-20',
    ]"
  >
    <slot></slot>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";
import { defineProps } from "vue";

const props = defineProps({
  animationClass: {
    type: String,
    default: "opacity-100 translate-y-0",
  },
});

const fadeElement = ref(null);
const isVisible = ref(false);

const observer = new IntersectionObserver(
  ([entry]) => {
    isVisible.value = entry.isIntersecting;
  },
  { threshold: 0.2 }
);

onMounted(() => {
  if (fadeElement.value) {
    observer.observe(fadeElement.value);
  }
});

onBeforeUnmount(() => {
  if (fadeElement.value) {
    observer.unobserve(fadeElement.value);
  }
});
</script>
