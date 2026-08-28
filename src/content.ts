import calaImage from './assets/projects/cala.png';
import movieQuestImage from './assets/projects/movie-quest.png';
import filmRouletteImage from './assets/projects/film-roulette.png';
import nextChapterImage from './assets/projects/next-chapter.png';

export type Lang = 'en' | 'es' | 'ca';

export const languages: { code: Lang; label: string }[] = [
	{ code: 'en', label: 'EN' },
	{ code: 'es', label: 'ES' },
	{ code: 'ca', label: 'CA' },
];

interface Project {
	title: string;
	description: string;
	tech: string[];
	github: string;
	demo?: string;
	image: string;
}

interface Content {
	nav: {
		projects: string;
		about: string;
		experience: string;
	};
	hero: {
		eyebrow: string;
		heading: string[];
		paragraph: string;
		viewProjects: string;
		githubCta: string;
		card: {
			role: string;
			location: string;
			locationValue: string;
			building: string;
			buildingValue: string;
			reading: string;
			readingValue: string;
			stack: string;
			stackValue: string;
		};
	};
	projects: {
		heading: string;
		liveDemo: string;
		github: string;
		items: Project[];
	};
	about: {
		heading: string;
		paragraphs: string[];
	};
	experience: {
		heading: string;
		role: string;
		meta: string;
		description: string;
	};
	stack: {
		heading: string;
	};
	footer: {
		heading: string;
	};
}

export const content: Record<Lang, Content> = {
	en: {
		nav: {
			projects: 'Projects',
			about: 'About',
			experience: 'Experience',
		},
		hero: {
			eyebrow: 'Software Engineer',
			heading: ['Building apps', 'that are useful,', 'usable and beautiful.'],
			paragraph:
				"I care about the details: building features that work well, feel good to use, and hold up once they hit production, always with real users in mind.",
			viewProjects: 'View Projects',
			githubCta: 'GitHub ↗',
			card: {
				role: 'Software Engineer',
				location: 'Location',
				locationValue: 'Barcelona 🇪🇸',
				building: 'Currently building',
				buildingValue: 'Next Chapter',
				reading: 'Reading',
				readingValue: 'The Unknown',
				stack: 'Stack',
				stackValue: 'React · TypeScript',
			},
		},
		projects: {
			heading: 'Selected Projects',
			liveDemo: 'Live Demo',
			github: 'GitHub',
			items: [
				{
					title: 'Cala',
					description: 'A personal finance dashboard for tracking expenses, budgets and savings.',
					tech: ['React', 'TypeScript', 'Firebase'],
					github: 'https://github.com/anionce/anafinance',
					image: calaImage,
				},
				{
					title: 'Movie Quest',
					description: 'Guess the movie from a series of clues before you run out of guesses.',
					tech: ['React', 'Redux Toolkit', 'i18next'],
					github: 'https://github.com/anionce/movie-quest',
					image: movieQuestImage,
				},
				{
					title: 'Film Roulette',
					description: 'Spin up a random, personalized movie recommendation for your next watch.',
					tech: ['React', 'Redux Toolkit', 'MUI'],
					github: 'https://github.com/anionce/film-roulette',
					image: filmRouletteImage,
				},
				{
					title: 'Next Chapter',
					description: 'Book recommendations tailored to your mood, genre, length and favorite themes.',
					tech: ['React', 'TanStack Query', 'Tailwind CSS'],
					github: 'https://github.com/anionce/next-chapter',
					image: nextChapterImage,
				},
			],
		},
		about: {
			heading: 'About',
			paragraphs: [
				"I'm a Software Engineer who's passionate about building products that solve real problems. I like being involved end to end: understanding what users actually need, shipping new features, and staying close to the codebase through code reviews, releases and production support.",
				"What drives me is creating software that's useful, maintainable and pleasant to use, working closely with Product and Design to find the simplest solution that delivers real value. I'm also big on automating repetitive work: I've built internal tools and AI-assisted workflows to help the team focus on what actually matters.",
				"Outside of work, I love reading, films and TV series. I'm organized, a strong team player, and efficient in how I work.",
			],
		},
		experience: {
			heading: 'Experience',
			role: 'Software Engineer',
			meta: 'Signaturit · 2021–Present',
			description:
				'Day to day that means shipping features, reviewing pull requests, keeping releases smooth, and jumping in whenever production needs support.',
		},
		stack: {
			heading: 'Tech Stack',
		},
		footer: {
			heading: "Let's build something.",
		},
	},
	es: {
		nav: {
			projects: 'Proyectos',
			about: 'Sobre mí',
			experience: 'Experiencia',
		},
		hero: {
			eyebrow: 'Software Engineer',
			heading: ['Creando apps', 'útiles, usables', 'y bonitas.'],
			paragraph:
				'Cuido los detalles: que las funcionalidades funcionen bien, sean fáciles de usar y aguanten en producción, siempre pensando en quien las usa.',
			viewProjects: 'Ver Proyectos',
			githubCta: 'GitHub ↗',
			card: {
				role: 'Software Engineer',
				location: 'Ubicación',
				locationValue: 'Barcelona 🇪🇸',
				building: 'Construyendo ahora',
				buildingValue: 'Next Chapter',
				reading: 'Leyendo',
				readingValue: 'The Unknown',
				stack: 'Stack',
				stackValue: 'React · TypeScript',
			},
		},
		projects: {
			heading: 'Proyectos Seleccionados',
			liveDemo: 'Demo en vivo',
			github: 'GitHub',
			items: [
				{
					title: 'Cala',
					description: 'Panel de finanzas personales para controlar gastos, presupuestos y ahorros.',
					tech: ['React', 'TypeScript', 'Firebase'],
					github: 'https://github.com/anionce/anafinance',
					image: calaImage,
				},
				{
					title: 'Movie Quest',
					description: 'Adivina la película a partir de una serie de pistas antes de quedarte sin intentos.',
					tech: ['React', 'Redux Toolkit', 'i18next'],
					github: 'https://github.com/anionce/movie-quest',
					image: movieQuestImage,
				},
				{
					title: 'Film Roulette',
					description: 'Descubre qué ver con una recomendación de película al azar, hecha a tu medida.',
					tech: ['React', 'Redux Toolkit', 'MUI'],
					github: 'https://github.com/anionce/film-roulette',
					image: filmRouletteImage,
				},
				{
					title: 'Next Chapter',
					description: 'Recibe recomendaciones de libros según tu estado de ánimo, género, duración y temática.',
					tech: ['React', 'TanStack Query', 'Tailwind CSS'],
					github: 'https://github.com/anionce/next-chapter',
					image: nextChapterImage,
				},
			],
		},
		about: {
			heading: 'Sobre mí',
			paragraphs: [
				'Soy Software Engineer y me apasiona construir productos que resuelvan problemas reales. Me gusta estar implicada de principio a fin: entender lo que necesitan los usuarios, sacar adelante nuevas funcionalidades y mantenerme cerca del código a través de revisiones, releases y soporte en producción.',
				'Lo que más me motiva es crear software útil, mantenible y agradable de usar, colaborando de cerca con Producto y Diseño para encontrar la solución más simple que aporte valor real. También me apasiona automatizar tareas repetitivas: he creado herramientas internas y flujos de trabajo con IA para que el equipo se centre en lo que realmente importa.',
				'Fuera del trabajo, me encanta leer, el cine y las series. Soy organizada, trabajo bien en equipo y soy eficiente en lo que hago.',
			],
		},
		experience: {
			heading: 'Experiencia',
			role: 'Software Engineer',
			meta: 'Signaturit · 2021 — Presente',
			description:
				'En el día a día eso significa sacar adelante nuevas funcionalidades, revisar pull requests, cuidar que los releases salgan bien y estar ahí cuando producción lo necesita.',
		},
		stack: {
			heading: 'Stack Tecnológico',
		},
		footer: {
			heading: 'Construyamos algo.',
		},
	},
	ca: {
		nav: {
			projects: 'Projectes',
			about: 'Sobre mi',
			experience: 'Experiència',
		},
		hero: {
			eyebrow: 'Software Engineer',
			heading: ['Creant apps', 'útils, usables', 'i boniques.'],
			paragraph:
				"Cuido els detalls: que les funcionalitats funcionin bé, siguin fàcils d'utilitzar i aguantin en producció, sempre pensant en qui les fa servir.",
			viewProjects: 'Veure Projectes',
			githubCta: 'GitHub ↗',
			card: {
				role: 'Software Engineer',
				location: 'Ubicació',
				locationValue: 'Barcelona 🇪🇸',
				building: 'Construint ara',
				buildingValue: 'Next Chapter',
				reading: 'Llegint',
				readingValue: 'The Unknown',
				stack: 'Stack',
				stackValue: 'React · TypeScript',
			},
		},
		projects: {
			heading: 'Projectes Seleccionats',
			liveDemo: 'Demo en directe',
			github: 'GitHub',
			items: [
				{
					title: 'Cala',
					description: 'Panell de finances personals per controlar despeses, pressupostos i estalvis.',
					tech: ['React', 'TypeScript', 'Firebase'],
					github: 'https://github.com/anionce/anafinance',
					image: calaImage,
				},
				{
					title: 'Movie Quest',
					description: "Endevina la pel·lícula a partir d'una sèrie de pistes abans de quedar-te sense intents.",
					tech: ['React', 'Redux Toolkit', 'i18next'],
					github: 'https://github.com/anionce/movie-quest',
					image: movieQuestImage,
				},
				{
					title: 'Film Roulette',
					description: "Descobreix què veure amb una recomanació de pel·lícula a l'atzar, feta a mida.",
					tech: ['React', 'Redux Toolkit', 'MUI'],
					github: 'https://github.com/anionce/film-roulette',
					image: filmRouletteImage,
				},
				{
					title: 'Next Chapter',
					description: "Rep recomanacions de llibres segons el teu estat d'ànim, gènere, durada i temàtica.",
					tech: ['React', 'TanStack Query', 'Tailwind CSS'],
					github: 'https://github.com/anionce/next-chapter',
					image: nextChapterImage,
				},
			],
		},
		about: {
			heading: 'Sobre mi',
			paragraphs: [
				"Sóc Software Engineer i m'apassiona construir productes que resolguin problemes reals. Participo en tot el cicle de vida del producte: des d'entendre les necessitats dels usuaris i desenvolupar noves funcionalitats fins a revisar codi, validar releases i donar suport a producció.",

				"El que més em motiva és crear programari útil, mantenible i agradable d'utilitzar, treballant molt a prop de Producte i Disseny per trobar la solució més senzilla que aporti valor real. També m'apassiona automatitzar tasques repetitives: he creat eines internes i fluxos de treball amb IA perquè l'equip es pugui centrar en el que realment importa.",
				"Fora de la feina, m'encanta llegir, el cinema i les sèries. Sóc organitzada, treballo bé en equip i sóc eficient en el que faig.",
			],
		},
		experience: {
			heading: 'Experiència',
			role: 'Software Engineer',
			meta: 'Signaturit · 2021 — Actualitat',
			description:
				"En el dia a dia això vol dir treure endavant noves funcionalitats, revisar pull requests, tenir cura que els releases surtin bé i ser-hi quan producció ho necessita.",
		},
		stack: {
			heading: 'Stack Tecnològic',
		},
		footer: {
			heading: 'Construïm alguna cosa.',
		},
	},
};
