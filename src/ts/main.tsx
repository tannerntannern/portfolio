import React from 'react';
import ReactDOM from 'react-dom';

import {Project} from './components/project';
import {projects} from './projects';

ReactDOM.render(
	<div>
		<Project data={projects[0]}/>
	</div>,
	document.getElementById('app'),
);