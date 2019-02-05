import React from 'react';
import {Category} from '../../types';

const categoryDataMap: {[K in Category]: {icon: string}} = {
	Website: {icon: 'fas fa-globe-americas'},
	Software: {icon: 'fas fa-laptop'},
	Package: {icon: 'fas fa-box-open'},
	Framework: {icon: 'fas fa-toolbox'}
};

export const CategoryTag = (props: {name: Category}) => (
	<span>
		<i className={categoryDataMap[props.name].icon}></i>
		{props.name}
	</span>
);