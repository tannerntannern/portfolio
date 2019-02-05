import {Collaborator, Project} from './types';

const collaborators: {[name: string]: Collaborator} = {
	jordan: {name: 'Jordan Hendrickson', website: 'http://jordanhendrickson.me'},
	joe: {name: 'Joseph Tortorello', website: 'https://joet.co'}
};

export const projects: Project[] = [{
	title: 'SportsLab360 Platform',
	company: 'SportsLab360 LLC',
	description: 'An online program aimed at youth soccer clubs to help refine players\' tactical abilities.',
	type: 'Professional',
	category: 'Website',
	openSource: false,
	timeline: {start: new Date('3/15/2017'), end: new Date('1/5/2019')},
	status: 'Completed',
	collaborators: [collaborators.jordan, collaborators.joe],
	technologies: [
		'Laravel',
		'php',
		'HTML',
		'SASS',
		'JavaScript',
		'Vue.js',
		'Materialize',
	],
	images: ['sportslab360_1.png'],
	links: {
		website: 'https://sportslab360.com'
	}
}, {
	title: 'Abrahamson Nurseries Website',
	description: 'A custom business website complete with an intuitive CMS.',
	type: 'Professional',
	category: 'Website',
	openSource: false,
	timeline: {start: new Date('1/15/2018'), end: new Date('3/25/2018')},
	status: 'Completed',
	technologies: [
		'Laravel',
		'Laravel Voyager',
		'php',
		'HTML',
		'SASS',
		'JavaScript',
	],
	images: ['abrahamson_1.png'],
	links: {
		website: 'https://abrahamsonnurseries.com'
	}
}, {
	title: 'Yob - Graph Editor',
	description: 'A simple and streamlined graphical analysis add-on for Google Docs.',
	type: 'Personal',
	category: 'Software',
	openSource: false,
	timeline: {start: new Date('7/15/2014'), end: new Date('12/29/2016')},
	status: 'Completed',
	collaborators: [collaborators.jordan],
	technologies: [
		'HTML',
		'CSS',
		'JavaScript'
	],
	images: ['yob_1.png'],
	links: {
		website: 'https://jordanhe2.github.io/Yob-Hosting',
		install: 'https://gsuite.google.com/marketplace/app/yob_graph_editor/31608768008'
	}
}, {
	title: 'micro-observer',
	description: 'A tiny TS/JS library for working with nested ES6 Proxies.',
	type: 'Personal',
	category: 'Package',
	openSource: true,
	timeline: {start: new Date('7/4/2018')},
	status: 'Maintaining',
	technologies: [
		'TypeScript'
	],
	links: {
		source: 'https://github.com/tannerntannern/micro-observer',
		install: 'https://npmjs.com/package/micro-observer',
		demo: 'https://tannernielsen.com/micro-observer-demo.html', // TODO: this may change
	}
}, {
	title: 'ts-mixer',
	description: 'A small TypeScript package that makes the mixin pattern feasible.',
	type: 'Personal',
	category: 'Package',
	openSource: true,
	timeline: {start: new Date('10/16/2018')},
	status: 'Maintaining',
	technologies: [
		'TypeScript'
	],
	links: {
		source: 'https://github.com/tannerntannern/ts-mixer',
		install: 'https://npmjs.com/package/ts-mixer',
	}
}];