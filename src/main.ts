import { createApp } from 'vue';
import App from './App.vue';
import './style.css';
import router from '@router/router';
import { DEFAULT_LOCALE, loadLocaleMessages, setupI18n } from './locales/i18n';

const app = createApp(App);
export const i18n = setupI18n();

app.use(router).use(i18n);

loadLocaleMessages(i18n, DEFAULT_LOCALE).then(() => {
	app.mount('#app');
});
