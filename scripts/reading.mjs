const ENTITIES = { '&amp;': '&', '&lt;': '<', '&gt;': '>', '&quot;': '"', '&#39;': "'", '&apos;': "'" };
const CURRENTLY_READING_MARKER = 'id="currentlyReadingReviews"';
const READING_VALUE_PATTERN = /readingValue:\s*(['"])(.*?)\1,/;

export const cleanHtmlText = value => {
	if (!value) return null;
	const text = value
		.replace(/<[^>]*>/g, '')
		.replace(/&(amp|lt|gt|quot|apos|#39);/g, match => ENTITIES[match])
		.replace(/\s+/g, ' ')
		.trim();
	return text || null;
};

export const parseCurrentlyReading = html => {
	const marker = html.indexOf(CURRENTLY_READING_MARKER);
	if (marker === -1) return null;

	const section = html.slice(marker);
	const title = cleanHtmlText(section.match(/class="bookTitle"[^>]*>([\s\S]*?)<\/a>/)?.[1]);
	const author = cleanHtmlText(section.match(/class="authorName"[^>]*>([\s\S]*?)<\/a>/)?.[1]);
	if (!title) return null;
	return author ? `${title} · ${author}` : title;
};

export const quoteJs = value => (value.includes("'") ? JSON.stringify(value) : `'${value}'`);

export const replaceReadingValue = (source, readingValue) => {
	if (source.match(READING_VALUE_PATTERN)?.[2] === readingValue) return null;
	return source.replace(new RegExp(READING_VALUE_PATTERN, 'g'), `readingValue: ${quoteJs(readingValue)},`);
};
