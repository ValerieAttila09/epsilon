export interface IMenuSection {
  title: string;
  links: string[];
}

export type IMenuData = Record<string, IMenuSection[]>;

export type MenuKey = keyof IMenuData;

export interface INavbar {
	logo: { src: string; alt: string; };
	links: { href: string; label: string; }[];
	contact: { href: string; label: string; };
}

export interface IHero {
	title: string;
	subtitle: string;
	button: { href: string; label: string; };
	image: { src: string; alt: string; };
}

export interface IDR3 {
	title: string;
	content: string;
	button: { href: string; label: string; };
	image: { src: string; alt: string; };
}

export interface IPipeline {
	title: string;
	content: string;
	button: { href: string; label: string; };
	chart: { src: string; alt: string; };
}

export interface IJoinOurTeam {
	joinUs: {
		title: string;
		content: string;
		button: { href: string; label: string; };
	};
	ourTeam: {
		title: string;
		content: string;
		button: { href: string; label: string; };
		images: { src: string; alt: string; }[];
	};
	locations: {
		title: string;
		content: string;
		button: { href: string; label: string; };
	};
}

export interface INews {
	title: string;
	items: {
		date: string;
		title: string;
		button: { href: string; label: string; };
	}[];
}

export interface IEvents {
	title: string;
	items: {
		date: string;
		title: string;
		button: { href: string; label: string; };
	}[];
}

export interface IFooter {
	logo: { src: string; alt: string; };
	contact: { href: string; label: string; };
	links: {
		[key: string]: {
			href: string;
			label: string;
		}[];
	};
	social: { href: string; src: string; alt: string; }[];
	legal: { text: string; };
}
