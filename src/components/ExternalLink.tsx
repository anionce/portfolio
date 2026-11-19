import type { ReactNode } from 'react';

type ExternalLinkProps = {
	href: string;
	children: ReactNode;
	className?: string;
	onClick?: () => void;
};

export const ExternalLink = ({ href, children, className, onClick }: ExternalLinkProps) => (
	<a href={href} target='_blank' rel='noreferrer' className={className} onClick={onClick}>
		{children}
	</a>
);
