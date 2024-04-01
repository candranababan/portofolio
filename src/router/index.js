import { createRouter, createWebHistory } from 'vue-router'
import Header from '@Header.vue'
import Home from '@Home.vue'
import About from '@About.vue'
import Projects from '@Projects.vue'
import Contact from '@Contact.vue'
import Footer from '@Footer.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/projects',
      name: 'projects',
      component: Projects
    },
    {
      path: '/contact',
      name: 'contact',
      component: Contact
    },
  ]
})

export default router;
