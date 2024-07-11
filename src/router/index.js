import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import QuizesView from "../views/QuizesView.vue";
import QuizView from "../views/QuizView.vue";
import NotesView from "../views/NotesView.vue";
import CounterView from "../views/CounterView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/counter",
      name: "counter",
      component: CounterView,
    },
    {
      path: "/notes",
      name: "notes",
      component: NotesView,
    },
    {
      path: "/quiz",
      name: "quizes",
      component: QuizesView,
    },
    {
        path: "/quiz/:id",
        name: "quiz",
        component: QuizView,
      },
  ],
});

export default router;
