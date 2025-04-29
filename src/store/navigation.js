import { defineStore } from "pinia";

export const useNavigationStore = defineStore("navigation", {
  state: () => ({
    currentSection: "",
  }),
  actions: {
    setSection(section) {
      this.currentSection = section;
    },
    scrollToSection(section) {
      this.setSection(section);
      const element = document.getElementById(section);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    },
  },
});
