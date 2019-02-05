import React from 'react';
import {DevelopmentStatus} from '../../types';

const devStatusDataMap: {[K in DevelopmentStatus]: {icon: string}} = {
	Completed: {icon: 'fas fa-check-circle'},
	Maintaining: {icon: 'fas fa-wrench'},
	Active: {icon: 'fas fa-laptop-code'},
	Paused: {icon: 'fas fa-pause-circle'},
	Dead: {icon: 'fas fa-skull'}
};

export const DevStatusTag = (props: {name: DevelopmentStatus}) => (
	<span>
		<i className={devStatusDataMap[props.name].icon}></i>
		{props.name}
	</span>
);
