// @ts-nocheck

import { nextTick } from 'vue';
import { createI18n } from 'vue-i18n';

export const DEFAULT_LOCALE = 'en';
export const SUPPORT_LOCALES = ['en', 'ru'];

export function setupI18n(options = { locale: DEFAULT_LOCALE }) {
	const i18n = createI18n(options);
	setI18nLanguage(i18n, options.locale);

	return i18n;
}

export function setI18nLanguage(i18n, locale) {
	if (i18n.mode === 'legacy') {
		i18n.global.locale = locale;
	} else {
		i18n.global.locale.value = locale;
	}

	/**
	 * NOTE:
	 * If you need to specify the language setting for headers, such as the `fetch` API, set it here.
	 * The following is an example for axios.
	 *
	 * axios.defaults.headers.common['Accept-Language'] = locale
	 */
	document.querySelector('html').setAttribute('lang', locale);
}

export async function loadLocaleMessages(i18n, locale) {
	const messages = await import(`./${locale || DEFAULT_LOCALE}.json`);

	console.log(locale, messages);

	// set locale and locale message
	i18n.global.setLocaleMessage(locale || DEFAULT_LOCALE, messages.default);

	return nextTick();
}
