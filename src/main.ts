import { createApp } from 'vue';
import App from './App.vue';
import './style.css';
import router from '@router/router';
import { setupI18n } from './locales/i18n';

const app = createApp(App);
export const i18n = setupI18n();

app.use(router).use(i18n).mount('#app');
