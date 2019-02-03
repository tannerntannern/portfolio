import React from 'react';
import ReactDOM from 'react-dom';

import {TechTag} from './components/TechTag';
import {Technology} from './types';

ReactDOM.render(
	<div>{
		Object.getOwnPropertyNames(Technology)
			.filter(name => isNaN(parseInt(name)))
			.map(name => <TechTag name={name as any}/>)
	}</div>,
	document.getElementById('app'),
);