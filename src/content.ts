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
			heading: ['Thoughtfully building', 'software products', 'people love using.'],
			paragraph:
				'I care about the details that make software feel solid — from shipping new features to keeping things running smoothly in production, always with real users in mind.',
			viewProjects: 'View Projects',
			githubCta: 'GitHub ↗',
			card: {
				role: 'Software Engineer',
				location: 'Location',
				locationValue: 'Barcelona 🇪🇸',
				building: 'Currently building',
				buildingValue: 'Next Chapter',
				reading: 'Reading',
				readingValue: 'Good Material · The Wedding People',
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
					description: 'Personal finance dashboard to track expenses, budgets and savings.',
					tech: ['React', 'TypeScript', 'Firebase'],
					github: 'https://github.com/anionce/anafinance',
					image: calaImage,
				},
				{
					title: 'Movie Quest',
					description: 'A movie guessing game — figure out the film from a series of clues.',
					tech: ['React', 'Redux Toolkit', 'i18next'],
					github: 'https://github.com/anionce/movie-quest',
					image: movieQuestImage,
				},
				{
					title: 'Film Roulette',
					description: 'Discover what to watch next with personalized, randomized movie recommendations.',
					tech: ['React', 'Redux Toolkit', 'MUI'],
					github: 'https://github.com/anionce/film-roulette',
					image: filmRouletteImage,
				},
				{
					title: 'Next Chapter',
					description: 'Get book picks tailored to your mood, genre, length and favorite themes.',
					tech: ['React', 'TanStack Query', 'Tailwind CSS'],
					github: 'https://github.com/anionce/next-chapter',
					image: nextChapterImage,
				},
			],
		},
		about: {
			heading: 'About',
			paragraphs: [
				"I'm a Software Engineer who's passionate about building products that solve real problems. I like being involved end to end — understanding what users actually need, shipping new features, and staying close to the codebase through code reviews, releases and production support.",
				"What drives me is creating software that's useful, maintainable and pleasant to use, working closely with Product and Design to find the simplest solution that delivers real value. I'm also big on automating repetitive work — I've built internal tools and AI-assisted workflows to help the team focus on what actually matters.",
			],
		},
		experience: {
			heading: 'Experience',
			role: 'Software Engineer',
			meta: 'Signaturit · 2021 — Present',
			description:
				'Day to day that means shipping features, reviewing pull requests, keeping releases smooth and jumping in when production needs support — plus automating the repetitive parts with internal tools and AI-assisted workflows.',
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
			heading: ['Construyendo con cuidado', 'productos de software', 'que a la gente le encanta usar.'],
			paragraph:
				'Me importan los detalles que hacen que el software se sienta sólido — desde sacar nuevas funcionalidades hasta que todo siga funcionando bien en producción, siempre pensando en quién lo usa.',
			viewProjects: 'Ver Proyectos',
			githubCta: 'GitHub ↗',
			card: {
				role: 'Software Engineer',
				location: 'Ubicación',
				locationValue: 'Barcelona 🇪🇸',
				building: 'Construyendo ahora',
				buildingValue: 'Next Chapter',
				reading: 'Leyendo',
				readingValue: 'Good Material · The Wedding People',
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
					description: 'Juego para adivinar películas a partir de una serie de pistas.',
					tech: ['React', 'Redux Toolkit', 'i18next'],
					github: 'https://github.com/anionce/movie-quest',
					image: movieQuestImage,
				},
				{
					title: 'Film Roulette',
					description:
						'Descubre qué ver a continuación con recomendaciones de películas aleatorias y personalizadas.',
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
			],
		},
		experience: {
			heading: 'Experiencia',
			role: 'Software Engineer',
			meta: 'Signaturit · 2021 — Presente',
			description:
				'En el día a día eso significa sacar funcionalidades adelante, revisar pull requests, cuidar que los releases salgan bien y estar ahí cuando producción lo necesita — además de automatizar lo repetitivo con herramientas internas y flujos de trabajo con IA.',
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
			heading: ['Construint', 'productes', 'que la gent gaudeixi fent servir.'],
			paragraph:
				'Construeixo productes digitals de principi a fi, des de les noves funcionalitats fins al suport en producció, sempre buscant aportar valor i crear experiències que la gent gaudeixi fent servir.',
			viewProjects: 'Veure Projectes',
			githubCta: 'GitHub ↗',
			card: {
				role: 'Software Engineer',
				location: 'Ubicació',
				locationValue: 'Barcelona 🇪🇸',
				building: 'Construint ara',
				buildingValue: 'Next Chapter',
				reading: 'Llegint',
				readingValue: 'Good Material · The Wedding People',
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
					description: "Joc per endevinar pel·lícules a partir d'una sèrie de pistes.",
					tech: ['React', 'Redux Toolkit', 'i18next'],
					github: 'https://github.com/anionce/movie-quest',
					image: movieQuestImage,
				},
				{
					title: 'Film Roulette',
					description:
						'Descobreix què veure a continuació amb recomanacions de pel·lícules aleatòries i personalitzades.',
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

				"El que més em motiva és crear aplicacions útils, mantenibles i amb bona usabilitat. M'agrada treballar amb Producte i Disseny per trobar solucions senzilles que aportin valor real. També gaudeixo automatitzant tasques repetitives i construint eines internes i fluxos de treball amb IA que permetin a l'equip centrar-se en allò que realment importa.",
			],
		},
		experience: {
			heading: 'Experiència',
			role: 'Software Engineer',
			meta: 'Signaturit · 2021 — Actualitat',
			description:
				"En el dia a dia això vol dir treure funcionalitats endavant, revisar pull requests, tenir cura que els releases surtin bé i ser-hi quan producció ho necessita — a més d'automatitzar allò repetitiu amb eines internes i fluxos de treball amb IA.",
		},
		stack: {
			heading: 'Stack Tecnològic',
		},
		footer: {
			heading: 'Construïm alguna cosa.',
		},
	},
};
