import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import Home from '@/views/Home.vue';
import {
	DEFAULT_LOCALE,
	loadLocaleMessages,
	setI18nLanguage,
	SUPPORT_LOCALES,
} from '@/locales/i18n';
import { i18n } from '@/main';

const routes: RouteRecordRaw[] = [
	{
		path: '/',
		name: 'Home',
		component: Home,
	},
];

const router = createRouter({
	history: createWebHistory(),
	routes,
});

// navigation guards
router.beforeEach(async (to, _, next) => {
	const paramsLocale = to.params.locale as string;

	// to fallback locale
	if (!SUPPORT_LOCALES.includes(paramsLocale)) {
		return next({ params: { locale: DEFAULT_LOCALE } });
	}

	// load locale messages
	if (!i18n.global.availableLocales.includes(paramsLocale)) {
		try {
			await loadLocaleMessages(i18n, paramsLocale);
		} catch (error) {
			console.error(
				`Failed to load locale messages for ${paramsLocale}`,
				error
			);
			// Optionally redirect to fallback if loading fails
			return next({ params: { locale: DEFAULT_LOCALE } });
		}
	}

	// set i18n language
	setI18nLanguage(i18n, paramsLocale);

	return next();
});

export default router;
