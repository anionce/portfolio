import { readFileSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const GOODREADS_USER_ID = '5126321';
const RSS_URL = `https://www.goodreads.com/review/list_rss/${GOODREADS_USER_ID}?shelf=currently-reading`;
const MAX_BOOKS = 2;

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const contentPath = path.join(__dirname, '../src/content.ts');

async function fetchCurrentlyReading() {
	const res = await fetch(RSS_URL, {
		headers: { 'User-Agent': 'Mozilla/5.0 (portfolio-reading-sync)' },
	});

	if (!res.ok) {
		throw new Error(`Goodreads RSS request failed: ${res.status}`);
	}

	const xml = await res.text();
	const items = xml.split('<item>').slice(1);

	const titles = items
		.map(item => item.match(/<title>([\s\S]*?)<\/title>/)?.[1]?.trim())
		.filter(Boolean)
		.slice(0, MAX_BOOKS);

	return titles;
}

function quoteJs(value) {
	return value.includes("'") ? JSON.stringify(value) : `'${value}'`;
}

function updateContentFile(readingValue) {
	const source = readFileSync(contentPath, 'utf8');
	const currentMatch = source.match(/readingValue:\s*(['"])(.*?)\1,/);

	if (currentMatch && currentMatch[2] === readingValue) {
		console.log('No change needed.');
		return false;
	}

	const literal = quoteJs(readingValue);
	const updated = source.replace(/readingValue:\s*(['"]).*?\1,/g, `readingValue: ${literal},`);

	writeFileSync(contentPath, updated);
	console.log(`Updated readingValue to: ${readingValue}`);
	return true;
}

const titles = await fetchCurrentlyReading();

if (titles.length === 0) {
	console.log('No books on the currently-reading shelf — leaving readingValue untouched.');
	process.exit(0);
}

updateContentFile(titles.join(' · '));
