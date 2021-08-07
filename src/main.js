import { createApp } from 'vue';

import ToggleButton from '@/components/toggle-button.js';
import App from './app.vue';

const app = createApp(App);

app.component('toggle-button', ToggleButton);

app.mount('#app');
