import { describe, expect, it } from 'vitest';
import { isLang, storedLanguage, storeLanguage } from './language';

describe('language preference', () => {
	it('defaults to English and remembers the choice', () => {
		expect(storedLanguage()).toBe('en');
		storeLanguage('ca');
		expect(storedLanguage()).toBe('ca');
	});

	it('ignores unknown stored values', () => {
		localStorage.setItem('lang', 'fr');
		expect(storedLanguage()).toBe('en');
		expect(isLang('es')).toBe(true);
		expect(isLang(null)).toBe(false);
	});
});
