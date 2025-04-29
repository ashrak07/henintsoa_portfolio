import { createRouter, createWebHistory } from "vue-router";
import Profile from "../components/Profile.vue";
import Skill from "../components/Skill.vue";
import Project from "../components/Project.vue";
import Contact from "../components/Contact.vue";

const routes = [
  { path: "/", component: Profile },
  { path: "/skill", component: Skill },
  { path: "/project", component: Project },
  { path: "/contact", component: Contact },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
