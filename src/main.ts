import { createApp } from 'vue';
import { createPinia } from 'pinia';
import router from '@router/router';
import App from './App.vue';
import useRoutesHistoryStore from './store/useRoutesHistoryStore';
import { DEFAULT_LOCALE, loadLocaleMessages, setupI18n } from './locales/i18n';
import './style.css';

const app = createApp(App);

const pinia = createPinia();
export const i18n = setupI18n();

app.use(router).use(pinia).use(i18n);

// @ts-ignore
export const storePathOnNavigation = (to, from) => {
	const routesHistoryStore = useRoutesHistoryStore();
	routesHistoryStore.addPath(from.path);
};

loadLocaleMessages(i18n, DEFAULT_LOCALE).then(() => {
	app.mount('#app');
});
