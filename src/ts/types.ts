export enum Type {
	Professional, Personal
}

export enum Category {
	Website, Software, Package, Framework
}

export enum Technology {
	HTML, Pug,
	CSS, SASS,
	JavaScript, TypeScript,
	'Node.js',
	'Vue.js', React,
	Materialize,
	php, Laravel, 'Laravel Voyager',
	GameMaker
}

export enum DevelopmentStatus {
	Completed, Maintaining, Active, Paused, Abandoned
}

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
	openSource: boolean,
	timeline: Timeline,
	status: DevelopmentStatus,
	collaborators?: Collaborator[],
	technologies: Technology[],
	images?: string[],
	links: {
		website?: string,
		demo?: string,
		source?: string,
		install?: string,
		download?: string,
		blogPost?: string
	}
}
