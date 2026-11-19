import { readFileSync, writeFileSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { parseCurrentlyReading, replaceReadingValue } from './reading.mjs';

const GOODREADS_USER_ID = '5126321';
const PROFILE_URL = `https://www.goodreads.com/user/show/${GOODREADS_USER_ID}`;
const CONTENT_PATH = path.join(path.dirname(fileURLToPath(import.meta.url)), '../src/content.ts');

const fetchProfileHtml = async () => {
	const response = await fetch(PROFILE_URL, {
		headers: { 'User-Agent': 'Mozilla/5.0 (portfolio-reading-sync)' },
		redirect: 'follow',
	});
	if (!response.ok) throw new Error(`Goodreads profile request failed: ${response.status}`);
	return response.text();
};

const reading = parseCurrentlyReading(await fetchProfileHtml());

if (!reading) {
	console.log('No books on the currently-reading shelf — leaving readingValue untouched.');
} else {
	const updated = replaceReadingValue(readFileSync(CONTENT_PATH, 'utf8'), reading);
	if (updated) writeFileSync(CONTENT_PATH, updated);
	console.log(updated ? `Updated readingValue to: ${reading}` : 'No change needed.');
}
