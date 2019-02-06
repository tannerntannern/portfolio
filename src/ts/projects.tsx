import React from 'react';
import {Collaborator, Project} from './types';

const collaborators: {[name: string]: Collaborator} = {
	jordan: {name: 'Jordan Hendrickson', website: 'http://jordanhendrickson.me'},
	joe: {name: 'Joseph Tortorello', website: 'https://joet.co'}
};

export const projects: Project[] = [{
	title: 'SportsLab360 Platform',
	description: (<div>
		<p>
			SportsLab360 is an online program aimed at youth soccer clubs to help refine how players think and plan on
			the field. Players, coaches, and club directors can all benefit from what the program can offers:  Players
			have access to videos, lessons, quizzes, and other resources to help them improve their game.  Coaches can
			organize players into teams, assign specific modules, track player progress, and insert their own ideas
			directly into the videos and lessons if they want to clarify or add upon the existing material.  Club
			directors can do all these things, as well as purchase discounted club-wide licenses and oversee their
			clubs at a higher level than coaches.
		</p>
		<p>
			While the company was getting off the ground, I was the lead web developer at SportsLab360.  I had a small
			team, and we built the whole platform from scratch.
		</p>
	</div>),
	type: 'Professional',
	category: 'Website',
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