<template>
  <div>
    <label class="block text-lg font-medium">{{ label }}</label>
    <div class="relative pt-1">
      <div class="flex mb-2 items-center justify-between">
        <div>
          <span class="font-semibold text-sm">{{ percentage }}%</span>
        </div>
      </div>
      <div class="flex mb-2 items-center justify-between">
        <div class="w-full bg-gray-700 rounded-full">
          <div
            class="bg-blue-500 text-xs leading-none py-1 text-center text-white rounded-full"
            :style="{ width: `${percentage}%` }"
          >
            <span class="sr-only">{{ percentage }}%</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  label: {
    type: String,
    required: true,
  },
  percentage: {
    type: Number,
    required: true,
  },
});
</script>
