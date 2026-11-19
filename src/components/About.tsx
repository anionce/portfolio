import type { Content } from '../content';
import { splitAround, SUBSTACK_LABEL, SUBSTACK_URL } from '../lib/links';
import { ExternalLink } from './ExternalLink';

const WithSubstackLink = ({ text }: { text: string }) =>
	splitAround(text, SUBSTACK_LABEL).map((part, index) => (
		<span key={index}>
			{index > 0 && (
				<ExternalLink className='substack-link' href={SUBSTACK_URL}>
					{SUBSTACK_LABEL}
				</ExternalLink>
			)}
			{part}
		</span>
	));

export const About = ({ t }: { t: Content }) => (
	<section id='about' className='container section'>
		<h2>{t.about.heading}</h2>
		<div className='about'>
			{t.about.paragraphs.map(paragraph => (
				<p key={paragraph}>
					<WithSubstackLink text={paragraph} />
				</p>
			))}
		</div>
	</section>
);
