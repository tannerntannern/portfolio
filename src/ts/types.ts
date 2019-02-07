export type Type = 'Professional' | 'Personal' | 'School';

export type Category = 'Website' | 'Software' | 'Package' | 'Framework';

export type Technology =
	'HTML' | 'Pug' |
	'CSS' | 'SASS' |
	'JavaScript' | 'TypeScript' |
	'Node.js' |
	'Vue.js' | 'React' |
	'Materialize' |
	'php' | 'Laravel' | 'Laravel Voyager' |
	'GameMaker' |
	'Digital Ocean';

export type DevelopmentStatus = 'Completed' | 'Maintaining' | 'Active' | 'Paused' | 'Dead';

export type Link = 'website' | 'demo' | 'source' | 'documentation' | 'install' | 'download' | 'blogPost';

export type Timeline = {start: Date, end?: Date};

export type Collaborator = {
	name: string,
	website: string
}

export type Project = {
	title: string,
	description: string,
	type: Type,
	category: Category,
	timeline: Timeline,
	status: DevelopmentStatus,
	collaborators?: Collaborator[],
	technologies: Technology[],
	images: string[],
	links: {[K in Link]?: string}
}
