// @ts-nocheck

import { nextTick } from 'vue';
import { createI18n } from 'vue-i18n';

export const DEFAULT_LOCALE = 'en';
export const SUPPORT_LOCALES = ['en', 'ru'];

export function setupI18n(
	options = {
		locale: DEFAULT_LOCALE,
		fallbackLocale: DEFAULT_LOCALE,
	}
) {
	const i18n = createI18n(options);

	setI18nLanguage(i18n, options.locale);

	return i18n;
}

export async function setI18nLanguage(i18n, locale) {
	i18n.global.locale = locale;

	document.querySelector('html').setAttribute('lang', locale);
}

export async function handleSettingLanguage(i18n, locale) {
	// To fallback locale
	if (!SUPPORT_LOCALES.includes(locale)) {
		setI18nLanguage(i18n, DEFAULT_LOCALE);

		return;
	}

	// If such local is new, need to load then
	if (!i18n.global.availableLocales.includes(locale)) {
		try {
			await loadLocaleMessages(i18n, locale);
		} catch (err) {
			console.error(err);
		}
	}

	setI18nLanguage(i18n, locale);
}

export async function loadLocaleMessages(i18n, locale) {
	const myLocale = locale == null ? DEFAULT_LOCALE : locale;

	const messages = await import(`./${myLocale}.json`);

	// Set locale and locale message
	i18n.global.setLocaleMessage(myLocale, messages.default);

	return nextTick();
}

export async function checkLocalizationOnRouting(to, next, i18n) {
	const paramsLocale = to.params.locale as string;

	handleSettingLanguage(i18n, paramsLocale);
}
