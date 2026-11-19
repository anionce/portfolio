import type { Content } from '../content';

export const Experience = ({ t }: { t: Content }) => (
	<section id='experience' className='container section'>
		<h2>{t.experience.heading}</h2>
		<div className='experience-list'>
			{t.experience.items.map(item => (
				<article key={`${item.role}-${item.period}`} className='experience'>
					<h3>{item.role}</h3>
					<span>
						{item.company} · {item.period}
					</span>
					{item.summary && <p>{item.summary}</p>}
					{item.bullets && (
						<ul>
							{item.bullets.map(bullet => (
								<li key={bullet}>{bullet}</li>
							))}
						</ul>
					)}
				</article>
			))}
		</div>
	</section>
);
