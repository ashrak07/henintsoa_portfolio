<template>
  <section id="contact" class="min-h-screen bg-gray-900 text-white pt-32">
    <div class="max-w-3xl mx-auto px-6 lg:px-8">
      <h2 class="text-3xl font-semibold text-center mb-12">Contactez-moi</h2>
      <form @submit.prevent="handleSubmit" class="space-y-6">
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <label for="name" class="block text-sm font-medium">Nom</label>
            <input
              id="name"
              v-model="form.name"
              type="text"
              required
              class="mt-1 block w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-md text-white focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label for="email" class="block text-sm font-medium">Email</label>
            <input
              id="email"
              v-model="form.email"
              type="email"
              required
              class="mt-1 block w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-md text-white focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>
        <div>
          <label for="message" class="block text-sm font-medium">Message</label>
          <textarea
            id="message"
            v-model="form.message"
            required
            rows="4"
            class="mt-1 block w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-md text-white focus:ring-2 focus:ring-blue-500"
          ></textarea>
        </div>
        <div class="flex justify-center">
          <button
            type="submit"
            :disabled="isSubmitting"
            class="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50"
          >
            <span v-if="isSubmitting">Envoi...</span>
            <span v-else>Envoyer</span>
          </button>
        </div>
      </form>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";

const contact = ref(null);

const form = ref({
  name: "",
  email: "",
  message: "",
});

const isSubmitting = ref(false);

const handleSubmit = () => {
  isSubmitting.value = true;
  // Simulate form submission
  setTimeout(() => {
    alert("Message envoyé !");
    form.value = { name: "", email: "", message: "" };
    isSubmitting.value = false;
  }, 2000);
};
</script>

<style scoped>
/* Ajoutez des styles personnalisés si nécessaire */
</style>
