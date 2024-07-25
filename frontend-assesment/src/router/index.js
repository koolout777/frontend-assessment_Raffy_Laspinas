import { createRouter, createWebHistory } from 'vue-router';
import Index from '../views/Index.vue';
import ExerciseTwo from '../views/ExerciseTwo.vue';

const routes = [
  {
    path: '/',
    name: 'Index',
    component: Index,
  },
  {
    path: '/exercise-two',
    name: 'ExerciseTwo',
    component: ExerciseTwo,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
