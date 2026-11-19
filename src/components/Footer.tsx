import type { Content } from '../content';
import { EMAIL, GITHUB_URL, LINKEDIN_URL, SUBSTACK_URL } from '../lib/links';
import { ExternalLink } from './ExternalLink';

export const Footer = ({ t }: { t: Content }) => (
	<footer id='contact'>
		<div className='container footer'>
			<h2>{t.footer.heading}</h2>
			<p>
				<a href={`mailto:${EMAIL}`}>{EMAIL}</a>
			</p>
			<div>
				<ExternalLink href={GITHUB_URL}>GitHub</ExternalLink>
				<ExternalLink href={LINKEDIN_URL}>LinkedIn</ExternalLink>
				<ExternalLink href={SUBSTACK_URL}>Substack</ExternalLink>
			</div>
		</div>
	</footer>
);
