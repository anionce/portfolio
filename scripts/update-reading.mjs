import { readFileSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const GOODREADS_USER_ID = '5126321';
const PROFILE_URL = `https://www.goodreads.com/user/show/${GOODREADS_USER_ID}`;

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const contentPath = path.join(__dirname, '../src/content.ts');

const ENTITIES = { '&amp;': '&', '&lt;': '<', '&gt;': '>', '&quot;': '"', '&#39;': "'", '&apos;': "'" };

function clean(value) {
	if (!value) return null;
	const text = value
		.replace(/<[^>]*>/g, '')
		.replace(/&(amp|lt|gt|quot|apos|#39);/g, match => ENTITIES[match])
		.replace(/\s+/g, ' ')
		.trim();
	return text || null;
}

async function fetchCurrentlyReading() {
	const res = await fetch(PROFILE_URL, {
		headers: { 'User-Agent': 'Mozilla/5.0 (portfolio-reading-sync)' },
		redirect: 'follow',
	});

	if (!res.ok) {
		throw new Error(`Goodreads profile request failed: ${res.status}`);
	}

	const html = await res.text();
	const marker = html.indexOf('id="currentlyReadingReviews"');

	if (marker === -1) return null;

	const section = html.slice(marker);
	const title = clean(section.match(/class="bookTitle"[^>]*>([\s\S]*?)<\/a>/)?.[1]);
	const author = clean(section.match(/class="authorName"[^>]*>([\s\S]*?)<\/a>/)?.[1]);

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
