import { describe, expect, it } from 'vitest';
import { cleanHtmlText, parseCurrentlyReading, quoteJs, replaceReadingValue } from './reading.mjs';

const profile = shelf => `<html><div>other</div><div id="currentlyReadingReviews">${shelf}</div></html>`;

describe('Goodreads reading sync', () => {
	it('cleans tags, entities and whitespace', () => {
		expect(cleanHtmlText('  <b>Tom &amp; Jerry</b>\n  &#39;tale&#39; ')).toBe("Tom & Jerry 'tale'");
		expect(cleanHtmlText('  ')).toBeNull();
		expect(cleanHtmlText(undefined)).toBeNull();
	});

	it('reads the title and author of the current book', () => {
		const html = profile('<a class="bookTitle" href="#">North Woods</a><a class="authorName" href="#">Daniel Mason</a>');
		expect(parseCurrentlyReading(html)).toBe('North Woods · Daniel Mason');
		expect(parseCurrentlyReading(profile('<a class="bookTitle" href="#">Solo</a>'))).toBe('Solo');
	});

	it('returns nothing without a currently-reading shelf or title', () => {
		expect(parseCurrentlyReading('<html></html>')).toBeNull();
		expect(parseCurrentlyReading(profile('<a class="authorName">Someone</a>'))).toBeNull();
	});

	it('rewrites every language and quotes titles with apostrophes', () => {
		const source = "en: { readingValue: 'Old', }, es: { readingValue: 'Old', },";
		expect(replaceReadingValue(source, "Swann's Way")).toBe(
			'en: { readingValue: "Swann\'s Way", }, es: { readingValue: "Swann\'s Way", },'
		);
		expect(replaceReadingValue(source, 'Old')).toBeNull();
		expect(quoteJs('Plain')).toBe("'Plain'");
	});
});
