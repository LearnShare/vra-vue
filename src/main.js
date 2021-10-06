import {
  createApp,
} from 'vue';

import store from './store/index';

import App from './app.vue';

const app = createApp(App);

app.use(store);

app.mount('#app');
