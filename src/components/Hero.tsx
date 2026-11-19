import avatarPhoto from '../assets/3.jpg';
import type { Content } from '../content';
import { GITHUB_URL } from '../lib/links';
import { ExternalLink } from './ExternalLink';

const OWNER_NAME = 'Ana Gracia';

export const Hero = ({ t }: { t: Content }) => {
	const { card } = t.hero;
	const facts = [
		{ label: card.location, value: card.locationValue },
		{ label: card.building, value: card.buildingValue },
		{ label: card.reading, value: card.readingValue },
		{ label: card.stack, value: card.stackValue },
	];

	return (
		<section className='hero container'>
			<div className='hero-left'>
				<span className='eyebrow'>{t.hero.eyebrow}</span>
				<h1>
					{t.hero.heading.map((line, index) => (
						<span key={line}>
							{index > 0 && <br />}
							{line}
						</span>
					))}
				</h1>
				<p>{t.hero.paragraph}</p>
				<div className='hero-buttons'>
					<a className='primary' href='#projects'>
						{t.hero.viewProjects}
					</a>
					<ExternalLink href={GITHUB_URL} className='secondary'>
						{t.hero.githubCta}
					</ExternalLink>
				</div>
			</div>

			<div className='hero-right'>
				<div className='hero-orb' />
				<div className='hero-card'>
					<div className='profile'>
						<img className='avatar' src={avatarPhoto} alt={OWNER_NAME} />
						<div>
							<h3>{OWNER_NAME}</h3>
							<span>{card.role}</span>
						</div>
					</div>
					{facts.map(fact => (
						<div key={fact.label} className='card-section'>
							<small>{fact.label}</small>
							<strong>{fact.value}</strong>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};
