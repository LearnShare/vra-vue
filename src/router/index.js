import {
  createRouter,
  createWebHistory,
} from 'vue-router';

import AppNav from '@/components/nav.vue';

import PageLogin from '@/pages/login.vue';
import PageAbout from '@/pages/about.vue';
import Page404 from '@/pages/404.vue';

import PageSettings from '@/pages/settings/index.vue';
import PageSettingsProfile from '@/pages/settings/profile.vue';
import PageSettingsNotification from '@/pages/settings/notification.vue';

const routes = [
  {
    name: 'Login',
    path: '/login',
    component: PageLogin,
    meta: {
      login: false,
    },
  },
  {
    name: 'About',
    path: '/about',
    components: {
      default: PageAbout,
      nav: AppNav,
    },
    meta: {
      login: false,
    },
  },
  {
    name: '404',
    path: '/:any(.*)',
    components: {
      default: Page404,
      nav: AppNav,
    },
  },
  {
    name: 'Shop',
    path: '/shop',
    redirect: {
      name: 'Store',
    },
  },
  {
    name: 'Settings',
    path: '/settings',
    components: {
      default: PageSettings,
      nav: AppNav,
    },
    meta: {
      login: true,
    },
    children: [
      {
        name: 'Profile',
        path: 'profile',
        component: PageSettingsProfile,
        meta: {
          login: true,
        },
      },
      {
        name: 'Notification',
        path: 'notification',
        component: PageSettingsNotification,
        meta: {
          login: true,
        },
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach(() => {
  console.log('beforeEach');

  return new Promise((resolve) => {
    window.setTimeout(() => resolve(), 2000);
  });
});
router.beforeResolve(() => {
  console.log('beforeResolve');
});
router.afterEach(() => {
  console.log('afterEach');
});

export default router;
