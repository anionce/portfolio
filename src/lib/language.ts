import { languages, type Lang } from '../content';

const LANGUAGE_KEY = 'lang';
const DEFAULT_LANGUAGE: Lang = 'en';

export const isLang = (value: unknown): value is Lang => languages.some(({ code }) => code === value);

export const storedLanguage = (): Lang => {
	const stored = localStorage.getItem(LANGUAGE_KEY);
	return isLang(stored) ? stored : DEFAULT_LANGUAGE;
};

export const storeLanguage = (lang: Lang) => localStorage.setItem(LANGUAGE_KEY, lang);
