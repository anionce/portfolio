import { readFileSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const GOODREADS_USER_ID = '5126321';
const RSS_URL = `https://www.goodreads.com/review/list_rss/${GOODREADS_USER_ID}?shelf=currently-reading`;

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const contentPath = path.join(__dirname, '../src/content.ts');

function stripCdata(value) {
	if (!value) return value;
	const match = value.trim().match(/^<!\[CDATA\[([\s\S]*)\]\]>$/);
	return (match ? match[1] : value).trim();
}

async function fetchCurrentlyReading() {
	const res = await fetch(RSS_URL, {
		headers: { 'User-Agent': 'Mozilla/5.0 (portfolio-reading-sync)' },
	});

	if (!res.ok) {
		throw new Error(`Goodreads RSS request failed: ${res.status}`);
	}

	const xml = await res.text();
	const [firstItem] = xml.split('<item>').slice(1);

	if (!firstItem) return null;

	const title = stripCdata(firstItem.match(/<title>([\s\S]*?)<\/title>/)?.[1]);
	const author = stripCdata(firstItem.match(/<author_name>([\s\S]*?)<\/author_name>/)?.[1]);

	if (!title) return null;

	return author ? `${title} · ${author}` : title;
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

const reading = await fetchCurrentlyReading();

if (!reading) {
	console.log('No books on the currently-reading shelf — leaving readingValue untouched.');
	process.exit(0);
}

updateContentFile(reading);
