import { derived, writable } from 'svelte/store';

import en from '../../assets/locale/en.json';
import kh from '../../assets/locale/kh.json';
import type { I18nMessage, Locale } from '../models/locale';

export type MessageKeys = keyof typeof en;

const messageDict: I18nMessage = { en: { ...en }, kh: { ...kh } };

export const locale = writable<Locale>('en');
export const locales = Object.keys(messageDict);

function translate(locale: Locale, key: MessageKeys, vars: Record<string, string>) {
	if (!key) throw new Error('no key provided to $t()');
	if (!locale) throw new Error(`no translation for key "${key}"`);

	let text = messageDict[locale][key];

	if (!text) throw new Error(`no translation found for ${locale}.${key}`);

	Object.keys(vars).map((k) => {
		const regex = new RegExp(`{{${k}}}`, 'g');
		text = text.replace(regex, vars[k]);
	});

	return text;
}

export const t = derived(
	locale,
	($locale) =>
		(key: MessageKeys, vars = {}) =>
			translate($locale, key, vars)
);
