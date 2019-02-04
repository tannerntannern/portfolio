import React from 'react';
import {Technology} from '../../types';

// This structure serves two purposes: 1) hold the links and icon names of each technology and 2) generate TS errors
// if any Technology entries are added without updating this structure.
const techDataMap: {[K in keyof typeof Technology]: {icon?: string, link?: string}} = {
	HTML: {icon: 'fab fa-html5'},
	Pug: {link: 'https://pugjs.org'},
	CSS: {icon: 'fab fa-css3-alt'},
	SASS: {icon: 'fab fa-sass', link: 'https://sass-lang.com/'},
	JavaScript: {icon: 'fab fa-js'},
	TypeScript: {link: 'https://www.typescriptlang.org/'},
	'Node.js': {icon: 'fab fa-node-js', link: 'https://nodejs.org'},
	'Vue.js': {icon: 'fab fa-vuejs', link: 'https://vuejs.org/'},
	React: {icon: 'fab fa-react', link: 'https://reactjs.org/'},
	Materialize: {link: 'https://materializecss.com/'},
	php: {icon: 'fab fa-php', link: 'http://php.net/'},
	Laravel: {icon: 'fab fa-laravel', link: 'https://laravel.com/'},
	'Laravel Voyager': {link: 'https://laravelvoyager.com/'},
	GameMaker: {link: 'https://www.yoyogames.com/gamemaker'},
	'Digital Ocean': {icon: 'fab fa-digital-ocean', link: 'https://www.digitalocean.com/'}
};

export const TechTag = (props: {name: keyof typeof Technology}) => (
	<a href={techDataMap[props.name].link}>
		<i className={techDataMap[props.name].icon}></i>
		<span>{props.name}</span>
	</a>
);