import { useState } from 'react';
import { About } from './components/About';
import { Experience } from './components/Experience';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Projects } from './components/Projects';
import { TagSection } from './components/TagSection';
import { content, STACK, type Lang } from './content';
import { storedLanguage, storeLanguage } from './lib/language';
import './index.css';

export const App = () => {
	const [lang, setLang] = useState<Lang>(storedLanguage);
	const t = content[lang];

	const changeLang = (next: Lang) => {
		setLang(next);
		storeLanguage(next);
	};

	return (
		<div className='app'>
			<Header t={t} lang={lang} onLangChange={changeLang} />
			<main>
				<Hero t={t} />
				<div className='divider container' />
				<Projects t={t} />
				<About t={t} />
				<Experience t={t} />
				<TagSection heading={t.stack.heading} items={STACK} />
				<TagSection heading={t.languages.heading} items={t.languages.items} />
			</main>
			<Footer t={t} />
		</div>
	);
};
