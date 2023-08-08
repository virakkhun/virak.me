import type { Locale } from '../models/locale';

export const LOCALES = ['en', 'kh'] as const;

export const LOCALE_MAP: Record<Locale, string> = {
	en: 'English',
	kh: 'ខ្មែរ'
};
