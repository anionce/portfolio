import { useState } from 'react';
import './index.css';
import { content, languages, type Lang } from './content';
import avatarPhoto from './assets/3.jpg';

const stackItems = [
	'React',
	'TypeScript',
	'Next.js',
	'Redux Toolkit',
	'Node.js',
	'Supabase',
	'MySQL',
	'React Testing Library',
	'Jest',
	'Vitest',
	'Cypress',
	'Playwright',
	'Docker',
	'Netlify',
	'Storybook',
	'GitHub Actions',
	'Figma',
];

function App() {
	const [menuOpen, setMenuOpen] = useState(false);
	const [lang, setLang] = useState<Lang>(() => (localStorage.getItem('lang') as Lang) || 'en');
	const t = content[lang];

	function changeLang(next: Lang) {
		setLang(next);
		localStorage.setItem('lang', next);
	}

	return (
		<div className='app'>
			<header className='header'>
				<div className='container nav'>
					<div className='logo'>AG</div>

					<div className='nav-right'>
						<nav>
							<a href='#projects'>{t.nav.projects}</a>

							<a href='#about'>{t.nav.about}</a>

							<a href='#experience'>{t.nav.experience}</a>
						</nav>

						<div className='lang-switch'>
							{languages.map(({ code, label }) => (
								<button
									key={code}
									className={lang === code ? 'active' : ''}
									aria-pressed={lang === code}
									onClick={() => changeLang(code)}
								>
									{label}
								</button>
							))}
						</div>

						<a className='github' href='https://github.com/anionce' target='_blank'>
							GitHub →
						</a>

						<button
							className='nav-toggle'
							aria-label='Toggle menu'
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
					<a href='#projects' onClick={() => setMenuOpen(false)}>
						{t.nav.projects}
					</a>

					<a href='#about' onClick={() => setMenuOpen(false)}>
						{t.nav.about}
					</a>

					<a href='#experience' onClick={() => setMenuOpen(false)}>
						{t.nav.experience}
					</a>

					<a href='https://github.com/anionce' target='_blank' onClick={() => setMenuOpen(false)}>
						GitHub →
					</a>

					<div className='lang-switch'>
						{languages.map(({ code, label }) => (
							<button
								key={code}
								className={lang === code ? 'active' : ''}
								aria-pressed={lang === code}
								onClick={() => changeLang(code)}
							>
								{label}
							</button>
						))}
					</div>
				</div>
			</header>

			<main>
				<section className='hero container'>
					<div className='hero-left'>
						<span className='eyebrow'>{t.hero.eyebrow}</span>

						<h1>
							{t.hero.heading[0]}
							<br />
							{t.hero.heading[1]}
							<br />
							{t.hero.heading[2]}
						</h1>

						<p>{t.hero.paragraph}</p>

						<div className='hero-buttons'>
							<button>{t.hero.viewProjects}</button>

							<a href='https://github.com/anionce' target='_blank' rel='noreferrer' className='secondary'>
								{t.hero.githubCta}
							</a>
						</div>
					</div>

					<div className='hero-right'>
						<div className='hero-orb'></div>

						<div className='hero-card'>
							<div className='profile'>
								<img className='avatar' src={avatarPhoto} alt='Ana Gracia' />

								<div>
									<h3>Ana Gracia</h3>

									<span>{t.hero.card.role}</span>
								</div>
							</div>

							<div className='card-section'>
								<small>{t.hero.card.location}</small>

								<strong>{t.hero.card.locationValue}</strong>
							</div>

							<div className='card-section'>
								<small>{t.hero.card.building}</small>

								<strong>{t.hero.card.buildingValue}</strong>
							</div>

							<div className='card-section'>
								<small>{t.hero.card.reading}</small>

								<strong>{t.hero.card.readingValue}</strong>
							</div>

							<div className='card-section'>
								<small>{t.hero.card.stack}</small>

								<strong>{t.hero.card.stackValue}</strong>
							</div>
						</div>
					</div>
				</section>
				<div className='divider container' />

				<section id='projects' className='container section'>
					<h2>{t.projects.heading}</h2>

					<div className='projects-grid'>
						{t.projects.items.map(project => (
							<article key={project.title} className='card'>
								<div className='card-image'>
									<img src={project.image} alt={project.title} loading='lazy' />
								</div>

								<h3>{project.title}</h3>

								<p>{project.description}</p>

								<div className='tags'>
									{project.tech.map(tech => (
										<span key={tech}>{tech}</span>
									))}
								</div>

								<div className='links'>
									{project.demo && (
										<a href={project.demo} target='_blank' rel='noreferrer'>
											{t.projects.liveDemo}
										</a>
									)}

									<a href={project.github} target='_blank' rel='noreferrer'>
										{t.projects.github}
									</a>
								</div>
							</article>
						))}
					</div>
				</section>

				<section id='about' className='container section'>
					<h2>{t.about.heading}</h2>

					<p className='about'>
						{t.about.paragraphs.map((paragraph, index) => (
							<span key={index}>
								{index > 0 && (
									<>
										<br />
										<br />
									</>
								)}
								{paragraph}
							</span>
						))}
					</p>
				</section>

				<section id='experience' className='container section'>
					<h2>{t.experience.heading}</h2>

					<div className='experience'>
						<h3>{t.experience.role}</h3>

						<span>{t.experience.meta}</span>

						<p>{t.experience.description}</p>
					</div>
				</section>

				<section className='container section'>
					<h2>{t.stack.heading}</h2>

					<div className='stack'>
						{stackItems.map(item => (
							<span key={item}>{item}</span>
						))}
					</div>
				</section>
			</main>

			<footer id='contact'>
				<div className='container footer'>
					<h2>{t.footer.heading}</h2>

					<p>
						<a href='mailto:anionce91@gmail.com'>anionce91@gmail.com</a>
					</p>

					<div>
						<a href='https://github.com/anionce' target='_blank' rel='noreferrer'>
							GitHub
						</a>
						<a href='https://www.linkedin.com/in/ana-gracia-20081930/' target='_blank' rel='noreferrer'>
							LinkedIn
						</a>
					</div>
				</div>
			</footer>
		</div>
	);
}

export default App;
