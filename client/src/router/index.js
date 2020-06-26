import Vue from 'vue';
import VueRouter from 'vue-router';
import store from '@/store';
import Home from '../views/Home.vue';
import Messages from '../views/Messages.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: { noAuthRequired: true },
  },
  {
    path: '/messages',
    name: 'Messages',
    component: Messages,
  },
];

const router = new VueRouter({
  routes,
});

router.beforeEach((to, from, next) => {
  const authRequired = !(to.meta && to.meta.noAuthRequired);
  const isAuthenticated = store.state.auth.user !== null;
  if (authRequired && !isAuthenticated) {
    return next('/');
  }

  next();
  return null;
});

export default router;
