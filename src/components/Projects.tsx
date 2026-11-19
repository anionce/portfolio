import type { Content } from '../content';
import { ExternalLink } from './ExternalLink';

export const Projects = ({ t }: { t: Content }) => (
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
						{project.demo && <ExternalLink href={project.demo}>{t.projects.liveDemo}</ExternalLink>}
						<ExternalLink href={project.github}>{t.projects.github}</ExternalLink>
					</div>
				</article>
			))}
		</div>
	</section>
);
