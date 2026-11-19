import { render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';
import { App } from './App';
import { content } from './content';

describe('App', () => {
	it('shows the portfolio in English by default', () => {
		render(<App />);
		expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Building apps');
		expect(screen.getByRole('link', { name: 'View Projects' })).toHaveAttribute('href', '#projects');
		for (const project of content.en.projects.items) {
			expect(screen.getByRole('heading', { name: project.title })).toBeInTheDocument();
		}
	});

	it('switches language and remembers it', async () => {
		const user = userEvent.setup();
		render(<App />);

		await user.click(screen.getAllByRole('button', { name: 'ES' })[0]);

		expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Creando apps');
		expect(screen.getAllByRole('button', { name: 'ES' })[0]).toHaveAttribute('aria-pressed', 'true');
		expect(localStorage.getItem('lang')).toBe('es');
	});

	it('restores the stored language', () => {
		localStorage.setItem('lang', 'es');
		render(<App />);
		expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Creando apps');
	});

	it('opens and closes the mobile menu', async () => {
		const user = userEvent.setup();
		render(<App />);
		const toggle = screen.getByRole('button', { name: 'Toggle menu' });

		await user.click(toggle);
		expect(toggle).toHaveAttribute('aria-expanded', 'true');

		const mobileNav = document.querySelector('.mobile-nav') as HTMLElement;
		await user.click(within(mobileNav).getByRole('link', { name: 'About' }));
		expect(toggle).toHaveAttribute('aria-expanded', 'false');
	});

	it('links to the newsletter inside the about text and opens external links safely', () => {
		render(<App />);
		const newsletter = screen.getAllByRole('link', { name: 'the misstery diaries' })[0];
		expect(newsletter).toHaveAttribute('href', 'https://themisstery.substack.com/');

		for (const link of screen.getAllByRole('link').filter(link => link.getAttribute('target') === '_blank')) {
			expect(link).toHaveAttribute('rel', 'noreferrer');
		}
	});
});
