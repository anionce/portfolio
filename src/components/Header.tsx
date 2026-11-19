import { useState } from 'react';
import { languages, type Content, type Lang } from '../content';
import { GITHUB_URL } from '../lib/links';
import { ExternalLink } from './ExternalLink';

type HeaderProps = {
	t: Content;
	lang: Lang;
	onLangChange: (lang: Lang) => void;
};

const SECTIONS = ['projects', 'about', 'experience'] as const;

const NavLinks = ({ t, onNavigate }: { t: Content; onNavigate?: () => void }) =>
	SECTIONS.map(section => (
		<a key={section} href={`#${section}`} onClick={onNavigate}>
			{t.nav[section]}
		</a>
	));

const LanguageSwitch = ({ lang, onLangChange }: Omit<HeaderProps, 't'>) => (
	<div className='lang-switch'>
		{languages.map(({ code, label }) => (
			<button
				key={code}
				type='button'
				className={lang === code ? 'active' : ''}
				aria-pressed={lang === code}
				onClick={() => onLangChange(code)}
			>
				{label}
			</button>
		))}
	</div>
);

export const Header = ({ t, lang, onLangChange }: HeaderProps) => {
	const [menuOpen, setMenuOpen] = useState(false);
	const closeMenu = () => setMenuOpen(false);

	return (
		<header className='header'>
			<div className='container nav'>
				<div className='logo'>AG</div>
				<div className='nav-right'>
					<nav>
						<NavLinks t={t} />
					</nav>
					<LanguageSwitch lang={lang} onLangChange={onLangChange} />
					<ExternalLink className='github' href={GITHUB_URL}>
						GitHub →
					</ExternalLink>
					<button
						type='button'
						className='nav-toggle'
						aria-label={t.nav.toggleMenu}
						aria-expanded={menuOpen}
						onClick={() => setMenuOpen(open => !open)}
					>
						<span />
						<span />
						<span />
					</button>
				</div>
			</div>

			<div className={`container mobile-nav ${menuOpen ? 'open' : ''}`}>
				<NavLinks t={t} onNavigate={closeMenu} />
				<ExternalLink href={GITHUB_URL} onClick={closeMenu}>
					GitHub →
				</ExternalLink>
				<LanguageSwitch lang={lang} onLangChange={onLangChange} />
			</div>
		</header>
	);
};
