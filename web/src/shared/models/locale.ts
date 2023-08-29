export type Locale = 'en' | 'kh';

export type I18nMessageDict = Record<string, string>;

export type I18nMessage = Record<Locale, I18nMessageDict>;
