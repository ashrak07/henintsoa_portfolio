<template>
  <section id="contact" class="pt-20 bg-gray-900 text-white">
    <h2 class="font-1 text-3xl md:text-4xl font-semibold text-center mb-8">
      Contactez-moi
    </h2>
    <div class="flex flex-col md:flex-row gap-18 p-5 max-w-5xl mx-auto">
      <div class="md:flex-1">
        <!-- INFOS CONTACT -->

        <div class="space-y-5">
          <FadeInOnScroll
            initialClass="opacity-0 -translate-x-10"
            animationClass="opacity-100 duration-300 translate-x-0"
          >
            <div class="flex items-center gap-4 bg-gray-800 p-3 rounded-lg">
              <font-awesome-icon
                :icon="['fas', 'phone']"
                class="text-blue-400 w-5 h-5"
              />
              <span class="text-gray-300 font-1 text-sm"
                >+261 34 51 794 17</span
              >
            </div>
          </FadeInOnScroll>
          <FadeInOnScroll
            initialClass="opacity-0 -translate-x-10"
            animationClass="opacity-100 duration-300 translate-x-0"
          >
            <div class="flex items-center gap-4 bg-gray-800 p-3 rounded-lg">
              <font-awesome-icon
                :icon="['fas', 'envelope']"
                class="text-blue-400 w-5 h-5"
              />
              <span class="text-gray-300 font-1 text-sm"
                >hentsrak07@gmail.com</span
              >
            </div>
          </FadeInOnScroll>
          <FadeInOnScroll
            initialClass="opacity-0 -translate-x-10"
            animationClass="opacity-100 duration-300 translate-x-0"
          >
            <div class="flex items-center gap-4 bg-gray-800 p-3 rounded-lg">
              <font-awesome-icon
                :icon="['fas', 'map-marker-alt']"
                class="text-blue-400 w-5 h-5"
              />
              <span class="text-gray-300 text-sm font-1"
                >Antananarivo, Madagascar</span
              >
            </div>
          </FadeInOnScroll>
        </div>
      </div>
      <div class="md:flex-1">
        <!-- FORMULAIRE -->
        <FadeInOnScroll
          initialClass="opacity-0 translate-y-10"
          animationClass="opacity-100 duration-500 translate-y-0"
        >
          <div class="text-2xl font-1 mb-8">Envoyez un message</div>
          <form @submit.prevent="handleSubmit" class="space-y-6">
            <div>
              <label for="name" class="block text-sm font-2">Nom</label>
              <input
                id="name"
                placeholder="Entrer votre nom"
                v-model="form.name"
                type="text"
                required
                class="mt-1 block w-full px-4 py-2 border border-gray-700 rounded-md text-white focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label for="Sujet" class="block text-sm font-2">Email</label>
              <input
                id="email"
                placeholder="Entrer votre email"
                v-model="form.email"
                type="email"
                required
                class="mt-1 block w-full px-4 py-2 border border-gray-700 rounded-md text-white focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <!-- Nouveau champ téléphone -->
            <div>
              <label for="subjet" class="block text-sm font-2">Sujet</label>
              <input
                id="phone"
                v-model="form.subject"
                placeholder="Entrer le sujet de discussion"
                type="tel"
                required
                class="mt-1 block w-full px-4 py-2 border border-gray-700 rounded-md text-white focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label for="message" class="block text-sm font-2">Message</label>
              <textarea
                id="message"
                v-model="form.message"
                required
                placeholder="Entrer votre message"
                rows="4"
                class="mt-1 block w-full px-4 py-2 border border-gray-700 rounded-md text-white focus:ring-2 focus:ring-blue-500"
              ></textarea>
            </div>

            <div class="flex justify-center">
              <button
                type="submit"
                :disabled="isSubmitting"
                class="w-full inline-flex justify-center items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gradient-to-r from-blue-600 to-purple-700 hover:from-blue-700 hover:to-purple-800 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50"
              >
                <span v-if="isSubmitting">Envoi...</span>
                <span v-else class="font-2">Envoyer</span>
              </button>
            </div>
          </form>
        </FadeInOnScroll>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";
import FadeInOnScroll from "./FadeInOnScroll.vue";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

const form = ref({
  name: "",
  email: "",
  subject: "",
  message: "",
});

const isSubmitting = ref(false);

const handleSubmit = () => {
  isSubmitting.value = true;

  const serviceID = "service_rctw5nr";
  const templateID = "template_80euaoe";
  const publicKey = "NkyUVk2IrgHQNVnvG";

  emailjs
    .send(serviceID, templateID, form.value, publicKey)
    .then(() => {
      alert("✅ Message envoyé avec succès !");
      form.value = { name: "", email: "", subject: "", message: "" };
      isSubmitting.value = false;
    })
    .catch((error) => {
      console.error("Erreur lors de l'envoi :", error);
      alert("❌ Une erreur est survenue. Réessaie plus tard.");
      isSubmitting.value = false;
    });
};
</script>

<style scoped>
/* Tu peux ajouter un hover glow ou des effets supplémentaires si tu veux */
</style>
