import calaImage from './assets/projects/cala.png';
import movieQuestImage from './assets/projects/movie-quest.png';
import filmRouletteImage from './assets/projects/film-roulette.png';
import jardinDePapelImage from './assets/projects/jardin-de-papel.png';

export type Lang = 'en' | 'es' | 'ca';

export const STACK = [
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

interface ExperienceItem {
	role: string;
	company: string;
	period: string;
	summary?: string;
	bullets?: string[];
}

export interface Content {
	nav: {
		projects: string;
		about: string;
		experience: string;
		toggleMenu: string;
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
		items: ExperienceItem[];
	};
	stack: {
		heading: string;
	};
	languages: {
		heading: string;
		items: string[];
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
			toggleMenu: 'Toggle menu',
		},
		hero: {
			eyebrow: 'Product Engineer',
			heading: ['Building apps', 'that are useful,', 'usable and beautiful.'],
			paragraph:
				'I care about the details: building features that work well and feel good to use, always with real users in mind.',
			viewProjects: 'View Projects',
			githubCta: 'GitHub ↗',
			card: {
				role: 'Product Engineer',
				location: 'Location',
				locationValue: 'Barcelona 🇪🇸',
				building: 'Currently building',
				buildingValue: 'Jardín de papel',
				reading: 'Reading',
				readingValue: 'Fruit Fly · Josh Silver',
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
					title: 'Jardín de papel',
					description: 'A home library for cataloguing, searching and sharing your books, with Goodreads import.',
					tech: ['React', 'TypeScript', 'Firebase', 'Tailwind'],
					github: 'https://github.com/anionce/jardin-de-papel',
					image: jardinDePapelImage,
				},
			],
		},
		about: {
			heading: 'About',
			paragraphs: [
				"I'm a Product Engineer who's passionate about building products that solve real problems. I like being involved end to end: understanding what users actually need, shipping new features, and staying close to the codebase through code reviews, releases and production support. I started out on the frontend, but AI tools have opened the door to full-stack work, and I've discovered how much I love building complete products from start to finish.",
				"What drives me is creating software that's useful, maintainable and pleasant to use, working closely with Product and Design to find the simplest solution that delivers real value. I'm also big on automating repetitive work: I've built internal tools and AI-assisted workflows to help the team focus on what actually matters.",
				"Outside of work, I love reading, films, TV series, fiber arts (sewing, crochet and embroidery) and fashion. I also write a newsletter on Substack, the misstery diaries. I'm organized, a strong team player, and I consider myself efficient.",
			],
		},
		experience: {
			heading: 'Experience',
			items: [
				{
					role: 'Product Engineer',
					company: 'Signaturit Group',
					period: '2022–Present',
					summary:
						"Product-minded engineer on Signaturit's e-signature platform, owning customer-facing features end to end.",
					bullets: [
						'Ship customer-facing features in React and TypeScript, from shaping requirements with Product and Design to release and post-launch support',
						'Own quality in production: code reviews, QA validation, releases and incident investigation',
						'Build internal tools, AI-assisted workflows and MCP servers that automate repetitive work for the team',
						'Iterate on shipped features using feedback from customers, Support and teammates',
					],
				},
				{
					role: 'Technical Support Engineer',
					company: 'Signaturit Group',
					period: '2021–2022',
					summary: 'Bridge between customers and engineering for the Signaturit product and API.',
					bullets: [
						'Level-2 support for the product and public API',
						'Investigated issues across AWS, MySQL, Datadog and Sentry',
						'Reproduced and documented bugs so engineering could fix them quickly',
					],
				},
				{
					role: 'Customer Support Team Lead',
					company: 'Signaturit Group',
					period: '2020–2022',
					summary: 'Led the customer support team with a focus on automation and close collaboration with Tech.',
					bullets: [
						'Automated support workflows in Zendesk (macros, triggers, Answer Bot) to reduce manual work',
						'Built reporting with SQL and Zendesk Explore to track performance and recurring product issues',
						'Triaged and prioritised escalations together with engineering',
						'Ran 1:1s, onboarding and training; owned internal and external documentation',
					],
				},
				{ role: 'Customer Support Specialist', company: 'Signaturit Group', period: '2018–2020' },
				{ role: 'Account Manager', company: 'Littio', period: '2016–2018' },
				{ role: 'Content Editor & Translator', company: 'Appszoom', period: '2011–2016' },
			],
		},
		stack: {
			heading: 'Tech Stack',
		},
		languages: {
			heading: 'Languages',
			items: ['Spanish', 'Catalan', 'English'],
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
			toggleMenu: 'Abrir o cerrar el menú',
		},
		hero: {
			eyebrow: 'Product Engineer',
			heading: ['Creando apps', 'útiles, usables', 'y bonitas.'],
			paragraph:
				'Cuido los detalles: que las funcionalidades funcionen bien y sean fáciles de usar, siempre pensando en quien las usa.',
			viewProjects: 'Ver Proyectos',
			githubCta: 'GitHub ↗',
			card: {
				role: 'Product Engineer',
				location: 'Ubicación',
				locationValue: 'Barcelona 🇪🇸',
				building: 'Creando',
				buildingValue: 'Jardín de papel',
				reading: 'Leyendo',
				readingValue: 'Fruit Fly · Josh Silver',
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
					title: 'Jardín de papel',
					description: 'Una biblioteca en casa para catalogar, buscar y compartir tus libros, con importación desde Goodreads.',
					tech: ['React', 'TypeScript', 'Firebase', 'Tailwind'],
					github: 'https://github.com/anionce/jardin-de-papel',
					image: jardinDePapelImage,
				},
			],
		},
		about: {
			heading: 'Sobre mí',
			paragraphs: [
				'Soy Product Engineer y me apasiona crear productos que resuelvan problemas reales. Me gusta estar implicada de principio a fin: entender lo que necesitan los usuarios, sacar adelante nuevas funcionalidades y mantenerme cerca del código a través de revisiones, releases y soporte en producción. Empecé como frontend, pero gracias a las herramientas de IA ahora trabajo en proyectos fullstack, y he descubierto lo mucho que me gusta crear proyectos completos.',
				'Lo que más me motiva es crear software útil, fácil de mantener y agradable de usar, colaborando de cerca con Producto y Diseño para encontrar la solución más simple que aporte valor real. También me apasiona automatizar tareas repetitivas: he creado herramientas internas y flujos de trabajo con IA para que el equipo se centre en lo que realmente importa.',
				'Fuera del trabajo, me encanta leer, el cine, las series, las artes textiles (costura, ganchillo y bordado) y la moda. También tengo mi propia newsletter en Substack, the misstery diaries. Soy organizada, trabajo bien en equipo y me considero eficiente.',
			],
		},
		experience: {
			heading: 'Experiencia',
			items: [
				{
					role: 'Product Engineer',
					company: 'Signaturit Group',
					period: '2022–Presente',
					summary:
						'Con mentalidad de producto, me encargo de funcionalidades de cara al cliente de principio a fin en la plataforma de firma electrónica de Signaturit.',
					bullets: [
						'Lanzo funcionalidades de cara al cliente con React y TypeScript, desde definir los requisitos con Producto y Diseño hasta la release y el soporte posterior',
						'Me encargo de la calidad en producción: code reviews, validación de QA, releases e investigación de incidencias',
						'Creo herramientas internas, flujos de trabajo con IA y servidores MCP que automatizan tareas repetitivas del equipo',
						'Itero sobre las funcionalidades lanzadas a partir del feedback de clientes, Soporte y compañeros',
					],
				},
				{
					role: 'Technical Support Engineer',
					company: 'Signaturit Group',
					period: '2021–2022',
					summary: 'Puente entre los clientes e ingeniería para el producto y la API de Signaturit.',
					bullets: [
						'Soporte de nivel 2 del producto y de la API pública',
						'Investigué incidencias en AWS, MySQL, Datadog y Sentry',
						'Reproduje y documenté bugs para que ingeniería pudiera corregirlos rápido',
					],
				},
				{
					role: 'Customer Support Team Lead',
					company: 'Signaturit Group',
					period: '2020–2022',
					summary:
						'Lideré el equipo de soporte al cliente, con foco en la automatización y en una colaboración estrecha con Tech.',
					bullets: [
						'Automaticé flujos de soporte en Zendesk (macros, triggers, Answer Bot) para reducir trabajo manual',
						'Creé informes con SQL y Zendesk Explore para seguir el rendimiento y los problemas recurrentes del producto',
						'Clasifiqué y prioricé escalados junto con ingeniería',
						'Hice 1:1s, onboarding y formación, y me encargué de la documentación interna y externa',
					],
				},
				{ role: 'Customer Support Specialist', company: 'Signaturit Group', period: '2018–2020' },
				{ role: 'Account Manager', company: 'Littio', period: '2016–2018' },
				{ role: 'Content Editor & Translator', company: 'Appszoom', period: '2011–2016' },
			],
		},
		stack: {
			heading: 'Stack Tecnológico',
		},
		languages: {
			heading: 'Idiomas',
			items: ['Español', 'Catalán', 'Inglés'],
		},
		footer: {
			heading: 'Creemos algo.',
		},
	},
	ca: {
		nav: {
			projects: 'Projectes',
			about: 'Sobre mi',
			experience: 'Experiència',
			toggleMenu: 'Obre o tanca el menú',
		},
		hero: {
			eyebrow: 'Product Engineer',
			heading: ['Creant apps', 'útils, usables', 'i boniques.'],
			paragraph:
				"Cuido els detalls: que les funcionalitats funcionin bé i siguin fàcils d'utilitzar, sempre pensant en qui les fa servir.",
			viewProjects: 'Veure Projectes',
			githubCta: 'GitHub ↗',
			card: {
				role: 'Product Engineer',
				location: 'Ubicació',
				locationValue: 'Barcelona 🇪🇸',
				building: 'Creant',
				buildingValue: 'Jardín de papel',
				reading: 'Llegint',
				readingValue: 'Fruit Fly · Josh Silver',
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
					title: 'Jardín de papel',
					description: 'Una biblioteca a casa per catalogar, cercar i compartir els teus llibres, amb importació des de Goodreads.',
					tech: ['React', 'TypeScript', 'Firebase', 'Tailwind'],
					github: 'https://github.com/anionce/jardin-de-papel',
					image: jardinDePapelImage,
				},
			],
		},
		about: {
			heading: 'Sobre mi',
			paragraphs: [
				"Sóc Product Engineer i m'apassiona crear productes que resolguin problemes reals. Participo en tot el cicle de vida del producte: des d'entendre les necessitats dels usuaris i desenvolupar noves funcionalitats fins a revisar codi, validar releases i donar suport a producció. Vaig començar en frontend, però gràcies a les eines d'IA ara treballo en projectes fullstack, i he descobert com m'agrada crear projectes complets.",

				"El que més em motiva és crear apps útils, fàcils de mantenir i agradables d'utilitzar, treballant molt a prop de Producte i Disseny per trobar la solució més senzilla que aporti valor real. També m'apassiona automatitzar tasques repetitives: he creat eines internes i fluxos de treball amb IA perquè l'equip es pugui centrar en el que realment importa.",
				"Fora de la feina, m'encanta llegir, el cinema, les sèries, les arts tèxtils (costura, ganxet i brodat) i la moda. També tinc la meva pròpia newsletter a Substack, the misstery diaries. Sóc organitzada, treballo bé en equip i em considero eficient.",
			],
		},
		experience: {
			heading: 'Experiència',
			items: [
				{
					role: 'Product Engineer',
					company: 'Signaturit Group',
					period: '2022–Actualitat',
					summary:
						"Amb mentalitat de producte, m'encarrego de funcionalitats de cara al client de principi a fi a la plataforma de signatura electrònica de Signaturit.",
					bullets: [
						'Llanço funcionalitats de cara al client amb React i TypeScript, des de definir els requisits amb Producte i Disseny fins a la release i el suport posterior',
						"Em responsabilitzo de la qualitat en producció: code reviews, validació de QA, releases i investigació d'incidències",
						"Creo eines internes, fluxos de treball amb IA i servidors MCP que automatitzen tasques repetitives de l'equip",
						'Itero sobre les funcionalitats llançades a partir del feedback de clients, Suport i companys',
					],
				},
				{
					role: 'Technical Support Engineer',
					company: 'Signaturit Group',
					period: '2021–2022',
					summary: "Pont entre els clients i enginyeria per al producte i l'API de Signaturit.",
					bullets: [
						"Suport de nivell 2 del producte i de l'API pública",
						'Vaig investigar incidències a AWS, MySQL, Datadog i Sentry',
						'Vaig reproduir i documentar bugs perquè enginyeria els pogués corregir ràpidament',
					],
				},
				{
					role: 'Customer Support Team Lead',
					company: 'Signaturit Group',
					period: '2020–2022',
					summary:
						"Vaig liderar l'equip de suport al client, amb focus en l'automatització i en una col·laboració estreta amb Tech.",
					bullets: [
						'Vaig automatitzar fluxos de suport a Zendesk (macros, triggers, Answer Bot) per reduir feina manual',
						'Vaig crear informes amb SQL i Zendesk Explore per seguir el rendiment i els problemes recurrents del producte',
						'Vaig classificar i prioritzar escalats juntament amb enginyeria',
						'Vaig fer 1:1s, onboarding i formació, i em vaig encarregar de la documentació interna i externa',
					],
				},
				{ role: 'Customer Support Specialist', company: 'Signaturit Group', period: '2018–2020' },
				{ role: 'Account Manager', company: 'Littio', period: '2016–2018' },
				{ role: 'Content Editor & Translator', company: 'Appszoom', period: '2011–2016' },
			],
		},
		stack: {
			heading: 'Stack Tecnològic',
		},
		languages: {
			heading: 'Idiomes',
			items: ['Espanyol', 'Català', 'Anglès'],
		},
		footer: {
			heading: 'Creem alguna cosa.',
		},
	},
};
